import { useState, useRef, useEffect } from 'react';
import { AnimatePresence, motion } from 'framer-motion';

const API = 'https://portfolio-chat.chiraggujarati.workers.dev';

const GREETING =
  "Hey, welcome here!👋 I'm here to help with anything about mobile apps development, design, and backend integration. What brings you here today?";
 
export default function ChatWidget() {
  const [open, setOpen] = useState(false);
  const [messages, setMessages] = useState([{ role: 'assistant', content: GREETING }]);
  const [input, setInput] = useState('');
  const [busy, setBusy] = useState(false);
  const bodyRef = useRef(null);

  useEffect(() => {
    bodyRef.current?.scrollTo({ top: bodyRef.current.scrollHeight, behavior: 'smooth' });
  }, [messages, open]);

  async function send(e) {
    e?.preventDefault();
    const text = input.trim();
    if (!text || busy) return;

    // The greeting is ours, not the model's - it never goes back upstream.
    const history = [...messages.slice(1), { role: 'user', content: text }];

    setMessages((prev) => [
      ...prev,
      { role: 'user', content: text },
      { role: 'assistant', content: '' },
    ]);
    setInput('');
    setBusy(true);

    try {
      const res = await fetch(API, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ messages: history, stream: true }),
      });

      if (!res.ok) {
        const { error } = await res.json().catch(() => ({}));
        throw new Error(error || 'Something went wrong.');
      }

      const reader = res.body.getReader();
      const decoder = new TextDecoder();
      let buf = '';

      while (true) {
        const { done, value } = await reader.read();
        if (done) break;
        buf += decoder.decode(value, { stream: true });

        const lines = buf.split('\n');
        buf = lines.pop() ?? ''; // a half-received line waits for the next chunk

        for (const line of lines) {
          if (!line.startsWith('data: ')) continue;
          const payload = line.slice(6).trim();
          if (payload === '[DONE]') break;

          try {
            const delta = JSON.parse(payload).choices?.[0]?.delta?.content;
            if (!delta) continue;
            setMessages((prev) => {
              const copy = [...prev];
              const last = copy[copy.length - 1];
              copy[copy.length - 1] = { ...last, content: last.content + delta };
              return copy;
            });
          } catch {
            // Partial JSON across a chunk boundary - the next read completes it.
          }
        }
      }
    } catch (err) {
      setMessages((prev) => {
        const copy = [...prev];
        copy[copy.length - 1] = { role: 'assistant', content: `Sorry - ${err.message}` };
        return copy;
      });
    } finally {
      setBusy(false);
    }
  }

  return (
    <>
      <button
        onClick={() => setOpen((o) => !o)}
        aria-label={open ? 'Close chat' : 'AI Assistant'}
        aria-expanded={open}
        className="fixed right-5 bottom-5 z-50 grid h-14 w-14 place-items-center rounded-full bg-accent text-black shadow-lg transition-transform duration-300 hover:scale-105 focus:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2 focus-visible:ring-offset-bg"
      >
        {open ? <CloseIcon /> : <ChatIcon />}
      </button>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: 12, scale: 0.97 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 12, scale: 0.97 }}
            transition={{ duration: 0.2, ease: 'easeOut' }}
            role="dialog"
            aria-label="AI Assistant"
            className="fixed right-5 bottom-24 z-50 flex h-[480px] max-h-[calc(100vh-9rem)] w-[360px] max-w-[calc(100vw-2.5rem)] flex-col overflow-hidden rounded-2xl border border-line bg-bg shadow-2xl max-[480px]:right-3 max-[480px]:left-3 max-[480px]:w-auto"
          >
            <header className="flex items-center gap-2 border-b border-line px-4 py-3.5">
              <span className="grid h-7 w-7 place-items-center rounded-full bg-accent text-[11px] font-semibold tracking-tight text-black">
                CG
              </span>
              <span className="text-sm font-medium text-text">AI Assistant</span>
            </header>

            <div ref={bodyRef} className="flex flex-1 flex-col gap-2.5 overflow-y-auto p-4">
              {messages.map((m, i) => (
                <div
                  key={i}
                  className={
                    m.role === 'user'
                      ? 'max-w-[85%] self-end rounded-xl rounded-br-sm bg-accent px-3 py-2.5 text-sm leading-relaxed whitespace-pre-wrap text-black'
                      : 'max-w-[85%] self-start rounded-xl rounded-bl-sm bg-surface px-3 py-2.5 text-sm leading-relaxed whitespace-pre-wrap text-text'
                  }
                >
                  {m.content || <TypingDots />}
                </div>
              ))}
            </div>

            <form onSubmit={send} className="flex gap-2 border-t border-line p-3">
              <input
                value={input}
                onChange={(e) => setInput(e.target.value)}
                placeholder="Ask a question..."
                maxLength={500}
                disabled={busy}
                className="min-w-0 flex-1 rounded-lg border border-line bg-surface px-3 py-2.5 text-sm text-text transition-colors placeholder:text-muted focus:border-accent focus:outline-none"
              />
              <button
                type="submit"
                disabled={busy || !input.trim()}
                aria-label="Send"
                className="grid w-10 shrink-0 place-items-center rounded-lg bg-accent text-black transition-opacity disabled:cursor-not-allowed disabled:opacity-40"
              >
                <SendIcon />
              </button>
            </form>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}

function TypingDots() {
  return (
    <span className="inline-flex gap-1 py-1" aria-label="Thinking">
      {[0, 0.2, 0.4].map((delay) => (
        <motion.i
          key={delay}
          className="h-1.5 w-1.5 rounded-full bg-muted"
          animate={{ opacity: [0.3, 1, 0.3] }}
          transition={{ duration: 1.2, repeat: Infinity, delay }}
        />
      ))}
    </span>
  );
}

function ChatIcon() {
  return (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <path
        d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5Z"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function CloseIcon() {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <path d="M18 6 6 18M6 6l12 12" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
    </svg>
  );
}

function SendIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <path
        d="M12 19V5M5 12l7-7 7 7"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}
