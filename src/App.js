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
              Highly-motivated Junior <span>Front-End (React)</span> Developer
            </h1>
            <h2>
              Looking for a specialist who will be happy to grow up with your
              company and became a valuable team player? Check my CV or Contact
              Me now!
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
              {/*               <p>
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
              </p> */}
              <p>
                All my professional life was related with IT sphere. I made a
                long way from PPC Specialist till QA specialist. I always was
                excited from people who are able to CREATE great Services and
                Products. One day I asked muyself: what if I can do it too?
              </p>
              <p>
                From that moment I have completed several JavaScript / React
                Courses and build my own pet-project. It was quite interesting.
                And now I feel I'm ready to became a part of a team.
              </p>
              <p>My cons:</p>
              <ul>
                <li>Love to learn new technologies;</li>
                <li>Responsible;</li>
                <li>Have a rich experience in IT generaly;</li>
                <li>Adequate (I'm sure it is important nowadays 😀)</li>
              </ul>
              <p>
                If you are looking for such kind of person - please feel free to
                reach me via <a href="/#contact">Contact form</a> or any other
                channel specified in Footer.
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
