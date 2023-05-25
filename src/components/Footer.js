import { footerlinks } from "../PageLinks";
import { sociallinks } from "../PageLinks";
const Footer = () => {
  return (
    <footer className="section footer">
      <ul className="footer-links">
        {footerlinks.map((link) => {
          return (
            <li>
              <a href={link.href} className="footer-link">
                {link.name}
              </a>
            </li>
          );
        })}
      </ul>
      <ul className="footer-icons">
        {sociallinks.map((sociallink) => {
          return (
            <li>
              <a href={sociallink.href} className="footer-icon">
                <i className={sociallink.icon}></i>
              </a>
            </li>
          );
        })}
      </ul>
      <p className="copyright">
        copyright &copy; Backroads travel tours company
        <span id="date">{new Date().getFullYear()}</span> || all rights reserved
      </p>
    </footer>
  );
};
export default Footer;
