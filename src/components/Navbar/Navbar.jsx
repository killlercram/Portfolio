import React, { useState } from "react";
import styles from "./Navbar.module.css";

const Navbar = () => {
  /*creating state for managing the state for making responsive*/
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className={styles.navbar}>
      <a href="/" className={styles.title}>
        Porfolio
      </a>
      <div className={styles.menu}>
        {/* Adding Image */}
        <img
          className={styles.menuBtn}
          src={
            menuOpen 
            ? "/assets/nav/closeIcon.png" 
            : "/assets/nav/menuIcon.png" 
          }
          alt="Menu Button"
          onClick={() => setMenuOpen(!menuOpen)}
        />

        <ul className={`${menuOpen && styles.menuOpen} ${styles.menuItems} `}
        onClick={() => setMenuOpen(false)}>
          <li>
            <a href="#about">About</a>
          </li>
          <li>
            <a href="#experience">Experience</a>
          </li>
          <li>
            <a href="/project">Project</a>
          </li>
          <li>
            <a href="/contact">Contact</a>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
