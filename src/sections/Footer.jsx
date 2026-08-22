import { translations } from '../i18n';

const Footer = () => {
  const t = translations;

  return (
    <footer className="py-16 text-center text-muted text-sm border-t border-line">
      <span>
        © {new Date().getFullYear()} Chirag Gujarati - {t.footer.text}
      </span>
    </footer>
  );
};

export default Footer;
