import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart } from "@fortawesome/free-solid-svg-icons";
import {
  faFacebook,
  faLinkedin,
  faTwitter,
  faGooglePlus,
} from "@fortawesome/free-brands-svg-icons";

export default function Footer() {
  return (
    <>
      <div className="copyright-footer">
        <div className="w3l-copy-right-left">
          <p>
            © 2020 Action. Made with <FontAwesomeIcon icon={faHeart} /> |
            Designed by{" "}
            <a href="https://w3layouts.com" target="_blank">
              W3layouts
            </a>
          </p>
        </div>
        <div className="w3l-copy-right">
          <ul className="social">
            <li>
              <a href="#facebook">
                <FontAwesomeIcon icon={faFacebook} />
              </a>
            </li>
            <li>
              <a href="#linkedin">
                <FontAwesomeIcon icon={faLinkedin} />
              </a>
            </li>
            <li>
              <a href="#twitter">
                <FontAwesomeIcon icon={faTwitter} />
              </a>
            </li>
            <li>
              <a href="#google">
                <FontAwesomeIcon icon={faGooglePlus} />
              </a>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
}
