import React, { useState } from "react";
import { Icon } from "@iconify/react";

export default function Menu() {
  const [menuList, setMenuList] = useState(false);

  function toggleMobMenu() {
    setMenuList((prev) => !prev);
  }

  function removeMobMenu() {
    setMenuList((prev) => prev === true && false);
  }
  return (
    <div className="menu-bar">
      <a href="/">
        <div className="logo">
          Yarko.<span>grigoriy</span> ()
        </div>
      </a>
      <div className="hamburger" onClick={toggleMobMenu}>
        <div className="hamburger-line"></div>
        <div className="hamburger-line"></div>
        <div className="hamburger-line"></div>
      </div>
      <nav className={menuList ? "nav-mobile" : ""}>
        <ul className="menu-container">
          <li className="menu-item" onClick={removeMobMenu}>
            <a href="/#skills" className="menu-item-link">
              Skills
            </a>
          </li>
          <li className="menu-item" onClick={removeMobMenu}>
            <a href="/#portfolio" className="menu-item-link">
              Portfolio
            </a>
          </li>
          <li className="menu-item" onClick={removeMobMenu}>
            <a href="/#about" className="menu-item-link">
              About
            </a>
          </li>
          <li className="menu-item" onClick={removeMobMenu}>
            <a href="/#contact" className="menu-item-link">
              Contact
            </a>
          </li>
          <div className="btn-cv-container" onClick={removeMobMenu}>
            <a
              href="./js-dev-yarko-grigoriy.pdf"
              className="purple-btn"
              download
            >
              <div className="icon-container">
                <Icon
                  icon="akar-icons:download"
                  width="1.6rem"
                  height="1.6rem"
                />
              </div>
              <p>CV</p>
            </a>
          </div>
        </ul>
      </nav>
    </div>
  );
}
