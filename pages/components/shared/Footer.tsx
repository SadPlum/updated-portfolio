import React from "react";
import style from "../../../styles/main/Footer.module.scss";

function Footer() {
  return (
    <footer className={style.footer}>
      <div className={style.footerContainer}>
        {" "}
        <a target="_blank" href="https://icons8.com/icon/21278/css3">
          CSS3
        </a>{" "}
        icon by{" "}
        <a target="_blank" href="https://icons8.com">
          Icons8
        </a>
      </div>
    </footer>
  );
}

export default Footer;
