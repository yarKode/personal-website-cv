import "./App.scss";
import "swiper/swiper-bundle.min.css";
import { useState } from "react";
import Slider from "./components/Slider";
import Skills from "./components/Skills";
import Footer from "./components/Footer";
import Form from "./components/Form";
import Menu from "./components/Menu";
import Overlay from "./components/Overlay";

import { Icon } from "@iconify/react";

function App() {
  const [formSubmitted, setFormSubmitted] = useState(false);

  function toggleOverlay() {
    setFormSubmitted((prev) => !prev);
  }
  return (
    <div className="App">
      {formSubmitted && <Overlay toggleOverlay={toggleOverlay} />}
      <header>
        <Menu />
        <div className="gen-container">
          <div className="header-content">
            <h1>
              Junior <span>Front-End / React</span> Developer
            </h1>
            <h2>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Risus
              condimentum praesent mauris sit.
            </h2>
          </div>
          <a href="/#portfolio" className="purple-btn">
            <div className="icon-container">
              <Icon icon="feather:eye" width="1.6rem" height="1.6rem" />
            </div>
            <p className="btn-text">Check Portfolio</p>
          </a>
        </div>
      </header>

      <section className="skills" id="skills">
        <div className="gen-container">
          <h3>My Skills</h3>
          <Skills />
        </div>
      </section>

      <section className="portfolio" id="portfolio">
        <div className="gen-container">
          <h3>My Portfolio</h3>
          <Slider />
        </div>
      </section>

      <section className="about" id="about">
        <div className="gen-container">
          <h3>About Me</h3>
          <div className="about-container gen-card">
            <div className="about-photo"></div>
            <div className="about-description">
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Purus
                netus vulputate viverra mi elementum bibendum sodales.
              </p>
              <p>Tincidunt tempus sit suspendisse sodales congue integer.</p>
              <ul>
                <li>
                  <p>adipiscing elit</p>
                </li>
                <li>
                  <p>netus vulputate</p>
                </li>
                <li>
                  <p>sit suspendisse</p>
                </li>
                <li>
                  <p>sagittis lobortis</p>
                </li>
              </ul>
              <p>
                Enim viverra quam a dolor. Et, et sagittis lobortis dictum
                volutpat non integer senectus maecenas.
              </p>
            </div>
          </div>
        </div>
      </section>
      <section className="contact" id="contact">
        <div className="gen-container">
          <h3>Contact Me</h3>
          <Form toggleOverlay={toggleOverlay} />
        </div>
      </section>

      <Footer />
    </div>
  );
}

export default App;
