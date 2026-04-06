
import styles from "./navbar.module.css";
import logo from "../../assets/YellowBag Logo 1.png";
import menu from "../../assets/menu-rounded.svg";
import container from "../../styles/container.module.css";
import {
  Backpack,
  Info,
  NewspaperClipping,
  AddressBookTabs,
} from "@phosphor-icons/react";
import { useState, useRef, useEffect } from "react";

function Navbar() {
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
    <div className={container.container}>
      <nav className={styles.navbar}>
        <img src={logo} alt="logo" className={styles.logo} />
        <div className={styles.menuWrapper} ref={menuRef}>
          <button className={styles.menuButton} onClick={toggleMenu}>
            <img src={menu} alt="menu" />
          </button>

          {menuOpen && (
            <div className={styles.menu}>
              <a href="#">
                {" "}
                <Backpack size={20} /> HOME
              </a>
              <a href="#">
                {" "}
                <Info size={20} /> SOBRE NÓS
              </a>
              <a href="#">
                {" "}
                <NewspaperClipping size={20} /> MEMÓRIAS
              </a>
              <a href="#">
                {" "}
                <AddressBookTabs size={20} /> CONTATOS
              </a>
            </div>
          )}
        </div>
      </nav>
    </div>
  );
}

export default Navbar;
