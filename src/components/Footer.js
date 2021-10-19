import React from "react";
import { Icon } from "@iconify/react";

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer>
      <div className="gen-container">
        <div className="social-links">
          <a href="https://gmail.com" target="_blank" rel="noreferrer">
            <div className="footer-btn-container">
              <Icon icon="feather:mail" width="1.6rem" height="1.6rem" />
            </div>
          </a>
          <a
            href="https://www.linkedin.com/in/grigoriyyarko/"
            target="_blank"
            rel="noreferrer"
          >
            <div className="footer-btn-container">
              <Icon
                icon="akar-icons:linkedin-fill"
                width="1.6rem"
                height="1.6rem"
              />
            </div>
          </a>
          <a href="https://github.com/yarKode" target="_blank" rel="noreferrer">
            <div className="footer-btn-container">
              <Icon
                icon="akar-icons:github-fill"
                width="1.6rem"
                height="1.6rem"
              />
            </div>
          </a>
          <a href="https://t.me/YarkoGrigoriy" target="_blank" rel="noreferrer">
            <div className="footer-btn-container">
              <Icon icon="bx:bxl-telegram" width="1.6rem" height="1.6rem" />
            </div>
          </a>
        </div>
        <p>Yarkode © {year}</p>
      </div>
    </footer>
  );
}
