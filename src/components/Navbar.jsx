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
    <nav className={styles.navbar} aria-label="Navegação principal">
      <a href="#home" className={styles.logoLink}>
        <img src={YbEduLogo} className={styles.logo} alt="YellowBagEdu - Home"/>
      </a>
      <div className={styles.navLinks} role="menubar">
        <a href="#home" role="menuitem">
          <Backpack size={32} aria-hidden="true" />
          <span>HOME</span>
        </a>
        <a href="#aboutus" role="menuitem">
          <Info size={32} aria-hidden="true" />
          <span>SOBRE NÓS</span>
        </a>
        <a href="#memorias" role="menuitem">
          <NewspaperClipping size={32} aria-hidden="true" />
          <span>MEMÓRIAS</span>
        </a>
        <a href="#contatos" role="menuitem">
          <AddressBookTabs size={32} aria-hidden="true" />
          <span>CONTATOS</span>
        </a>
      </div>
      <div className={styles.menuWrapper} ref={menuRef}>
        <button 
          className={showMenu ? styles.menuButtonOpen : styles.menuButton} 
          onClick={toggleMenu}
          aria-label={showMenu ? "Fechar menu" : "Abrir menu"}
          aria-expanded={showMenu}
          aria-controls="mobile-menu"
        >
          <img src={showMenu ? MenuIconWhite : MenuIcon} alt="" aria-hidden="true" />
        </button>
        {showMenu && (
          <nav 
            className={styles.menu}
            id="mobile-menu"
            role="menu"
            aria-label="Navegação móvel"
          >
            <a href="#home" role="menuitem">
              <Backpack size={32} aria-hidden="true" /> 
              <span>HOME</span>
            </a>
            <a href="#aboutus" role="menuitem">
              <Info size={32} aria-hidden="true" /> 
              <span>SOBRE NÓS</span>
            </a>
            <a href="#memorias" role="menuitem">
              <NewspaperClipping size={32} aria-hidden="true" /> 
              <span>MEMÓRIAS</span>
            </a>
            <a href="#contatos" role="menuitem">
              <AddressBookTabs size={32} aria-hidden="true" /> 
              <span>CONTATOS</span>
            </a>
          </nav>
        )}
      </div>
    </nav>
  );
}

