import logo from "../images/logo.svg";
import { pagelinks } from "../PageLinks";
import { sociallinks } from "../PageLinks";
const Nav = () => {
  return (
    <nav className="navbar">
      <div className="nav-center">
        <div className="nav-header">
          <img src={logo} className="nav-logo" alt="backroads" />
          <button type="button" className="nav-toggle" id="nav-toggle">
            <i className="fas fa-bars"></i>
          </button>
        </div>
        {/* <!-- left this comment on purpose --> */}
        <ul className="nav-links" id="nav-links">
          {pagelinks.map((link) => {
            return (
              <li>
                <a href={link.href} className="nav-link">
                  {" "}
                  {link.name}{" "}
                </a>
              </li>
            );
          })}
        </ul>

        <ul className="nav-icons">
          {sociallinks.map((sociallink) => {
            return (
              <li>
                <a
                  href={sociallink.href}
                  target="_blank"
                  rel="noreferrer"
                  className="nav-icon"
                >
                  <i className={sociallink.icon}></i>
                </a>
              </li>
            );
          })}
        </ul>
      </div>
    </nav>
  );
};
export default Nav;
