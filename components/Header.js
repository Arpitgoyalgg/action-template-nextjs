import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeadphones } from "@fortawesome/free-solid-svg-icons";

export default function Header() {
  return (
    <>
      <div className="header">
        <div className="logo">
          <Link href="/">
            <a className="brand-logo">
              <FontAwesomeIcon icon={faHeadphones} />
              Action
            </a>
          </Link>
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
