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
  const [showMenu, setShowMenu] = useState(false);
  const menuRef = useRef(null);

  function toggleMenu() {
    setShowMenu(!showMenu);
  }

  useEffect(() => {
    function handleClickOutside(event) {
      if (menuRef.current && !menuRef.current.contains(event.target)) {
        setShowMenu(false);
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
        <img src={YbEduLogo} className={styles.logo} alt="Logo da YellowBagEdu"/>
        <div className={styles.navLinks}>
          <a href="#">
            <Backpack size={32} />
            HOME
          </a>
          <a href="#">
            <Info size={32} />
            SOBRE NÓS
          </a>
          <a href="#">
            <NewspaperClipping size={32} />
            MEMÓRIAS
          </a>
          <a href="#">
            <AddressBookTabs size={32} />
            CONTATOS
          </a>
        </div>
        <div className={styles.menuWrapper} ref={menuRef}>
          <button className={showMenu ? styles.menuButtonOpen : styles.menuButton} onClick={toggleMenu}>
            <img src={showMenu ? MenuIconWhite : MenuIcon} alt="Ícone de Menu" />
          </button>
          {showMenu && (
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

