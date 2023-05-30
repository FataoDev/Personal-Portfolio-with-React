import React, { useContext } from "react";
import "./Portfolio.css";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import Sidebar from "../../img/sidebar.png";
import Admin_dash from "../../img/admin-dash-1.png";
import web_ecommerce from "../../img/web-ecommerce.png";
import web_training from "../../img/web-training.png";
import calc_javascript from "../../img/calc-javascript.png";
import { themeContext } from "../../Context";
const Portfolio = () => {
  const theme = useContext(themeContext);
  const darkMode = theme.state.darkMode;
  return (
    <div className="portfolio" id="portfolio">
      {/* heading */}
      <span style={{ color: darkMode ? "white" : "" }}>Projects Recent</span>
      <span>Portfolio</span>

      {/* slider */}
      <Swiper
        spaceBetween={0}
        slidesPerView={3}
        grabCursor={true}
        className="portfolio-slider"
      >
        <SwiperSlide>
          {/* <img src={Sidebar} alt="" /> */}
          <figure className="portfolio-projet">
            <img src={Sidebar} alt="" />
            <figcaption>
              <p className="titre">ReactJS</p>
              <h3>Site web</h3>
              <p>
                Réalisation de la partie front-end d'un site de la liste des
                pays et population dont l'API est fournit par l'API
                restcontries.
              </p>
              <a
                title="github"
                target="_blank"
                rel="noreferrer"
                href="https://github.com/FataoDev"
              >
                Repo Github du projet{" "}
              </a>
            </figcaption>
          </figure>
        </SwiperSlide>
        <SwiperSlide>
          {/* <img src={Admin-dash} alt="" /> */}
          <figure className="portfolio-projet">
            <img src={Admin_dash} alt="" />
            <figcaption>
              <p>ReactJS/NodeJS</p>
              <h3>site web complet-interface admin</h3>
              <p>
                Réalisation d'un site web avec interface admin, utilisateur,
                utilisie une interface Connexion/Inscription à travers mon API
                CRUD REST Express avec NodeJS avec possibilité de CRUD produits
                et users avec photos
              </p>
              <a
                title="github"
                target="_blank"
                rel="noreferrer"
                href="https://github.com/FataoDev"
              >
                Repo Github du projet{" "}
              </a>
            </figcaption>
          </figure>
        </SwiperSlide>
        <SwiperSlide>
          {/* <img src={MusicApp} alt="" /> */}
          <figure className="portfolio-projet">
            <img src={web_training} alt="" />
            <figcaption>
              <p>ReactJS</p>
              <h3>Kanap</h3>
              <p>Réalisation d'un site web complet de training.</p>
              <a
                title="github"
                target="_blank"
                rel="noreferrer"
                href="https://github.com/FataoDev"
              >
                Repo Github du projet{" "}
              </a>
            </figcaption>
          </figure>
        </SwiperSlide>
        <SwiperSlide>
          {/* <img src={HOC} alt="" /> */}
          <figure className="portfolio-projet">
            <img src={web_ecommerce} alt="" />
            <figcaption>
              <p>Javascript</p>
              <h3>E-commerce</h3>
              <p>Réalisation d'un site E-commerce avec HTML/CSS/JavaScript.</p>
              <a
                title="github"
                target="_blank"
                rel="noreferrer"
                href="https://github.com/FataoDev"
              >
                Repo Github du projet{" "}
              </a>
            </figcaption>
          </figure>
        </SwiperSlide>
        <SwiperSlide>
          {/* <img src={HOC} alt="" /> */}
          <figure className="portfolio-projet">
            <img src={calc_javascript} alt="" />
            <figcaption>
              <p>Javascript</p>
              <h3>Calculatrice</h3>
              <p>
                Réalisation d'une calculatrice utilisant plusieurs fonctions
                avec HTML/CSS/JavaScript.
              </p>
              <a
                title="github"
                target="_blank"
                rel="noreferrer"
                href="https://github.com/FataoDev"
              >
                Repo Github du projet{" "}
              </a>
            </figcaption>
          </figure>
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default Portfolio;
