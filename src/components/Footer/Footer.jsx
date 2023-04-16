import React from "react";
import "./Footer.css";
import Wave from "../../img/wave.png";
import Insta from "@iconscout/react-unicons/icons/uil-instagram";
import Linkdin from "@iconscout/react-unicons/icons/uil-linkedin";
import Mail from "@iconscout/react-unicons/icons/uil-envelope";
import Facebook from "@iconscout/react-unicons/icons/uil-facebook";
import Gitub from "@iconscout/react-unicons/icons/uil-github";

const Footer = () => {
  const date = new Date();
  const currentYear = date.getFullYear();
  return (
    <div className="footer">
      <img src={Wave} alt="" style={{ width: "100%", height: "40vh" }} />
      <div className="f-content">
        <div className="f-icons">
          <a
            title="Mail"
            target="_blank"
            rel="noreferrer"
            href="mailto:fataoouedraogo226@gmail.com"
          >
            <Mail color="white" size={"3rem"} />
          </a>
          <a
            title="LinkdIn"
            target="_blank"
            rel="noreferrer"
            href="https://www.linkedin.com/in/fatao-ouedraogo-1385b31b4"
          >
            <Linkdin color="white" size={"3rem"} />
          </a>
          <a
            title="LinkdIn"
            target="_blank"
            rel="noreferrer"
            href="https://www.instagram.com/fatao-ouedraogo"
          >
            <Insta color="white" size={"3rem"} />
          </a>
          <a
            title="LinkdIn"
            target="_blank"
            rel="noreferrer"
            href="https://www.faceboock.com/fatao.ouedraogo.315213"
          >
            <Facebook color="white" size={"3rem"} />
          </a>
          <a
            title="LinkdIn"
            target="_blank"
            rel="noreferrer"
            href="https://github.com/FataoDev?tab=repositories"
          >
            <Gitub color="white" size={"3rem"} />
          </a>
        </div>
        <span>
          Copyright &copy; {currentYear} Fatao OUEDRAOGO - Burkina Faso
        </span>
      </div>
    </div>
  );
};

export default Footer;
