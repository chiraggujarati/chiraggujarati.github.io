import { useEffect, useRef } from 'react';

const config = {
  friction: 0.5,
  trails: 20,
  size: 50,
  dampening: 0.25,
  tension: 0.98,
};

// The accent is #ff8b5f - hsl(17, 100%, 69%). The oscillator sweeps a narrow band
// around that hue, so the trail reads as warmer and cooler shades of the site colour
// instead of the original rainbow.
const stroke = {
  hue: 18,
  spread: 16,
  frequency: 0.0015,
  saturation: 92,
  lightness: 64,
  alpha: 0.22,
};

class Oscillator {
  constructor({ phase = 0, offset = 0, frequency = 0.001, amplitude = 1 }) {
    this.phase = phase;
    this.offset = offset;
    this.frequency = frequency;
    this.amplitude = amplitude;
    this.value = offset;
  }

  update() {
    this.phase += this.frequency;
    this.value = this.offset + Math.sin(this.phase) * this.amplitude;
    return this.value;
  }
}

class Node {
  constructor(x, y) {
    this.x = x;
    this.y = y;
    this.vx = 0;
    this.vy = 0;
  }
}

class Line {
  constructor(spring, pos) {
    this.spring = spring + 0.1 * Math.random() - 0.05;
    this.friction = config.friction + 0.01 * Math.random() - 0.005;
    this.nodes = Array.from({ length: config.size }, () => new Node(pos.x, pos.y));
  }

  update(pos) {
    let spring = this.spring;
    const head = this.nodes[0];
    head.vx += (pos.x - head.x) * spring;
    head.vy += (pos.y - head.y) * spring;

    for (let i = 0; i < this.nodes.length; i++) {
      const node = this.nodes[i];

      if (i > 0) {
        const prev = this.nodes[i - 1];
        node.vx += (prev.x - node.x) * spring;
        node.vy += (prev.y - node.y) * spring;
        node.vx += prev.vx * config.dampening;
        node.vy += prev.vy * config.dampening;
      }

      node.vx *= this.friction;
      node.vy *= this.friction;
      node.x += node.vx;
      node.y += node.vy;
      spring *= config.tension;
    }
  }

  draw(ctx) {
    const nodes = this.nodes;
    let x = nodes[0].x;
    let y = nodes[0].y;

    ctx.beginPath();
    ctx.moveTo(x, y);

    for (let i = 1; i < nodes.length - 2; i++) {
      const node = nodes[i];
      const next = nodes[i + 1];
      x = 0.5 * (node.x + next.x);
      y = 0.5 * (node.y + next.y);
      ctx.quadraticCurveTo(node.x, node.y, x, y);
    }

    const beforeLast = nodes[nodes.length - 2];
    const last = nodes[nodes.length - 1];
    ctx.quadraticCurveTo(beforeLast.x, beforeLast.y, last.x, last.y);
    ctx.stroke();
    ctx.closePath();
  }
}

const CanvasCursor = () => {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)');
    if (reduceMotion.matches) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    const pos = { x: window.innerWidth / 2, y: window.innerHeight / 2 };
    const oscillator = new Oscillator({
      phase: Math.random() * Math.PI * 2,
      offset: stroke.hue,
      frequency: stroke.frequency,
      amplitude: stroke.spread,
    });

    let lines = [];
    let frame = 0;
    let running = false;
    let started = false;

    const resize = () => {
      const dpr = Math.min(window.devicePixelRatio || 1, 2);
      canvas.width = window.innerWidth * dpr;
      canvas.height = window.innerHeight * dpr;
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
      ctx.lineWidth = 1;
    };

    const spawn = () => {
      lines = Array.from({ length: config.trails }, (_, i) => new Line(0.4 + (i / config.trails) * 0.025, pos));
    };

    const render = () => {
      if (!running) return;

      ctx.globalCompositeOperation = 'source-over';
      ctx.clearRect(0, 0, window.innerWidth, window.innerHeight);
      ctx.globalCompositeOperation = 'lighter';
      ctx.strokeStyle = `hsla(${oscillator.update().toFixed(1)},${stroke.saturation}%,${stroke.lightness}%,${stroke.alpha})`;
      ctx.lineWidth = 1;

      for (const line of lines) {
        line.update(pos);
        line.draw(ctx);
      }

      frame = window.requestAnimationFrame(render);
    };

    const start = () => {
      if (running) return;
      running = true;
      frame = window.requestAnimationFrame(render);
    };

    const stop = () => {
      running = false;
      window.cancelAnimationFrame(frame);
    };

    const move = (event) => {
      if (event.touches) {
        pos.x = event.touches[0].clientX;
        pos.y = event.touches[0].clientY;
      } else {
        pos.x = event.clientX;
        pos.y = event.clientY;
      }

      if (!started) {
        started = true;
        spawn();
        start();
      }
    };

    const onVisibility = () => (document.hidden ? stop() : started && start());

    resize();

    window.addEventListener('mousemove', move, { passive: true });
    window.addEventListener('touchmove', move, { passive: true });
    window.addEventListener('touchstart', move, { passive: true });
    window.addEventListener('resize', resize);
    window.addEventListener('orientationchange', resize);
    window.addEventListener('focus', onVisibility);
    window.addEventListener('blur', stop);
    document.addEventListener('visibilitychange', onVisibility);

    return () => {
      stop();
      window.removeEventListener('mousemove', move);
      window.removeEventListener('touchmove', move);
      window.removeEventListener('touchstart', move);
      window.removeEventListener('resize', resize);
      window.removeEventListener('orientationchange', resize);
      window.removeEventListener('focus', onVisibility);
      window.removeEventListener('blur', stop);
      document.removeEventListener('visibilitychange', onVisibility);
    };
  }, []);

  return <canvas ref={canvasRef} aria-hidden="true" className="pointer-events-none fixed inset-0 z-40 h-full w-full" />;
};

export default CanvasCursor;
