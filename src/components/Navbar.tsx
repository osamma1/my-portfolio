"use client"

import Link from 'next/link';
import React, { useState } from 'react';
import styles from '../styles/Navbar.module.css';
import { BiSolidPhoneCall } from "react-icons/bi";
import { RiMenu3Line, RiCloseLine } from "react-icons/ri";

function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <div className={styles.navbar}>
      <h2 className={styles.logo}>{`<UF/>`}</h2>
      
      {/* Toggle the display of navlinks */}
      <div className={`${styles.navlinks} ${isMenuOpen ? styles.showMenu : ""}`}>
        <Link href="/about" className={styles.link} onClick={toggleMenu}>About</Link>
        <Link href="/projects" className={styles.link} onClick={toggleMenu}>Projects</Link>
        <Link href="/contact" className={styles.link} onClick={toggleMenu}>Contact</Link>
      </div>

      <div className={styles.buttoncontainer}>
        <Link href="/contact" className={styles.connectbtn}>
          <BiSolidPhoneCall className={styles.call} /> 
          Let&#39;s connect
        </Link>

        {/* Toggle button */}
        <div className={styles.menubtn} onClick={toggleMenu}>
          {isMenuOpen ? <RiCloseLine /> : <RiMenu3Line />}
        </div>
      </div>
    </div>
  );
}

export default Navbar;