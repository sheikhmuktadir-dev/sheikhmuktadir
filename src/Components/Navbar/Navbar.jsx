import { Link } from "react-router-dom";
import Style from "./navbar.module.css";
import { useEffect, useState } from "react";
import { navLinks } from "../../Data/Data";
import { TbMenu } from "react-icons/tb";
import { IoClose } from "react-icons/io5";

export default function Navbar() {
  const [navScroll, setNavScroll] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setNavScroll(window.scrollY > 100);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    if (menuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }

    return () => {
      document.body.style.overflow = "auto";
    };
  }, [menuOpen]);

  return (
    <nav
      className={`${Style.navbarMain} ${
        navScroll ? Style.navbarMainScroll : ""
      }`}
    >
      <div className={Style.navLogoArea}>
        <Link to="/" className={Style.navLogo}>
          Sheikh Muktadir
        </Link>
        <button className={Style.navToggle} onClick={() => setMenuOpen(true)}>
          <TbMenu />
        </button>
      </div>

      <ul
        className={`${Style.navbarList} ${
          menuOpen ? Style.navbarListShow : ""
        }`}
      >
        <button
          className={Style.navCloseToggle}
          onClick={() => setMenuOpen(false)}
        >
          <IoClose />
        </button>
        {navLinks.map((items, index) => {
          return (
            <li key={items.id || index} className={Style.navbarItem}>
              <a
                onClick={() => setMenuOpen(false)}
                href={items?.href}
                download={items.className === "navCv" ? true : false}
                className={
                  items.className === "navCv" ? Style.navCv : Style.navbarLink
                }
              >
                {items?.label}
              </a>
            </li>
          );
        })}
      </ul>
    </nav>
  );
}
