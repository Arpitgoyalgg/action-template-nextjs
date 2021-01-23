import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeadphones } from "@fortawesome/free-solid-svg-icons";

export default function Header() {
  return (
    <>
      <div className="header">
        <div className="logo">
          <a className="brand-logo" href="index.html">
            <FontAwesomeIcon icon={faHeadphones} />
            Action
          </a>
        </div>
        <div className="button text-right">
          <a href="#contact" className="btn contact">
            Contact Us
          </a>
        </div>
      </div>
    </>
  );
}
