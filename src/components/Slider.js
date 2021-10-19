import React from "react";
import uniqid from "uniqid";
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, { Navigation, Pagination } from "swiper";

import "swiper/swiper-bundle.css";

SwiperCore.use([Navigation, Pagination]);

const projects = [
  {
    key: uniqid(),
    title: "Wim Hof's Breathing Assistant",
    img: "./img/breathing-assistant.png",
    alt: "screenshot of Breathing assistant website",
    descr:
      "Breathing assistant give users a possibility to track activities and phases at one place.",
    objective:
      "Own project. Created to help people who used Wim Hof's breathing method",
    techList: "React, JavaScript, HTML5, CSS3",
    url: "https://breathing-assistant.com/",
  },
  {
    key: uniqid(),
    title: "Bankist: Landing Page",
    img: "./img/bankist-lp.png",
    alt: "Screenshot of Bankist Website's Landing page",
    descr: "Landing page of Conceptual Virtual Bank",
    objective: "Project from JS course. Used to practise DOM manipulations.",
    techList: "Pure JavaScript",
    url: "https://bankist-lp-yarkode.netlify.app/",
  },
  {
    key: uniqid(),
    title: "Bankist: Client Area",
    img: "./img/bankist-client-area.png",
    alt: "screenshot of Bankist Website's client area",
    descr:
      "Client area of Virtual Bank. It allows user to send money, request a loan, close account. All operations displayed in specail table.",
    objective: "Project from JS course. Completed to practice JavaScript.",
    techList: "Pure JavaScript",
    url: "https://bankinst-client-area.netlify.app/",
  },
  {
    key: uniqid(),
    title: "Mapty: tracking phisical activities across a map",
    img: "./img/mapty.png",
    alt: "Screenshot of Mapty Website",
    descr:
      "Allows users to mark Start points on map and track different types of phissical activity",
    objective:
      "Project from JS course. Practice in JS and using Browser API (geolocation) and External API (LeafLet).",
    techList: "Pure JavaScript",
    url: "https://mapty-yarkode.netlify.app/",
  },
  {
    key: uniqid(),
    title: "Forkify: WebApp to find and safe nice recipies",
    img: "./img/forkify.png",
    alt: "Screenshot of Forkify webapp",
    descr:
      "Webservice used to search, safe, create and manage different kind of recipies.",
    objective:
      "Project from JS course. Used to practice JavaScript and External API.",
    techList: "Pure JavaScript",
    url: "https://forkify-yarkode.netlify.app",
  },
  {
    key: uniqid(),
    title: "Amazon Market: a proper place to sell Amazon Businness",
    img: "./img/amz-market.png",
    alt: "Screenshot of Amazon Market Website",
    descr:
      "Website used to collect contact info of leads who wish to sell their Amazon stores",
    objective: "Practice in HTML, CSS and Bootstrap",
    techList: "HTML5, CSS3",
    url: "https://amz-market.netlify.app/",
  },
];

export default function Slider() {
  return (
    <Swiper
      modules={[Navigation, Pagination]}
      spaceBetween={50}
      navigation
      pagination={{ clickable: true }}
      loop
    >
      {projects.map((item) => {
        return (
          <SwiperSlide key={item.key}>
            <h4>{item.title}</h4>
            <div className="slide-container">
              <img src={item.img} alt={item.alt} />
              <div className="slide-overlay">
                <div className="slide-descr">
                  <h5>Description</h5>
                  <p>{item.descr}</p>
                </div>
                <div className="slide-obj">
                  <h5>Project Objective</h5>
                  <p>{item.objective}</p>
                </div>

                <div className="slide-tech">
                  <h5>Techologies used:</h5>
                  <p>{item.techList}</p>
                </div>
                <a href={item.url} className="slide-button">
                  Visit Website
                </a>
              </div>
            </div>
          </SwiperSlide>
        );
      })}
    </Swiper>
  );
}
