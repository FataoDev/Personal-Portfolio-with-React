import React, { useContext } from "react";
import "./Portfolio.css";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import Sidebar from "../../img/sidebar.png";
import Ecommerce from "../../img/ecommerce.png";
import HOC from "../../img/hoc.png";
import MusicApp from "../../img/musicapp.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSquareGithub } from "@fortawesome/free-brands-svg-icons";
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
        spaceBetween={30}
        slidesPerView={3}
        grabCursor={true}
        className="portfolio-slider"
      >
        <SwiperSlide>
          {/* <img src={Sidebar} alt="" /> */}
          <figure className="portfolio-projet">
            <img src={Sidebar} alt="" />
            <figcaption>
              <p>Javascript</p>
              <h3>Kanap</h3>
              <p>
                Réalisation de la partie Javascript d'un site e-commerce dont le
                back et l'API sont fournit.
              </p>
              <a
                title="github"
                target="_blank"
                rel="noreferrer"
                href="https://github.com/FataoDev"
              >
                Repo Github du projet{" "}
                <FontAwesomeIcon icon={faSquareGithub} size="lg" />
              </a>
            </figcaption>
          </figure>
        </SwiperSlide>
        <SwiperSlide>
          <img src={Ecommerce} alt="" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={MusicApp} alt="" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={HOC} alt="" />
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default Portfolio;
