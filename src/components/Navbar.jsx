import {
  Backpack,
  Info,
  NewspaperClipping,
  AddressBookTabs,
} from "@phosphor-icons/react";
import styles from "./Navbar.module.css";
import { useState, useRef, useEffect } from "react";

import YbEduLogo from "../assets/ybedu-logo.svg";
import MenuIcon from "../assets/menu-icon.svg";
import MenuIconWhite from "../assets/menu-icon-white.svg";

export function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const menuRef = useRef(null);

  function toggleMenu() {
    setMenuOpen(!menuOpen);
  }

  useEffect(() => {
    function handleClickOutside(event) {
      if (menuRef.current && !menuRef.current.contains(event.target)) {
        setMenuOpen(false);
      }
    }

    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <div>
      <nav className={styles.navbar}>
        <img src={YbEduLogo} alt="Logo da YellowBagEdu"/>
        <div className={styles.menuWrapper} ref={menuRef}>
          <button className={menuOpen ? styles.menuButtonOpen : styles.menuButton} onClick={toggleMenu}>
            <img src={menuOpen ? MenuIconWhite : MenuIcon} alt="Ícone de Menu" />
          </button>
          {menuOpen && (
            <div className={styles.menu}>
              <a href="#">
                {" "}
                <Backpack size={32} /> HOME
              </a>
              <a href="#">
                {" "}
                <Info size={32} /> SOBRE NÓS
              </a>
              <a href="#">
                {" "}
                <NewspaperClipping size={32} /> MEMÓRIAS
              </a>
              <a href="#">
                {" "}
                <AddressBookTabs size={32} /> CONTATOS
              </a>
            </div>
          )}
        </div>
      </nav>
    </div>
  );
}

