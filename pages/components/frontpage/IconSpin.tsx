import React from "react";
import Image from "next/image";
import htmlicon from "pages/images/icons/icons8-html-5-96.png";
import cssicon from "pages/images/icons/icons8-css3-96.png";
import reacticon from "pages/images/icons/icons8-react-native-96.png";
import githubicon from "pages/images/icons/icons8-github-96.png";
import cicon from "pages/images/icons/icons8-c-programming-96.png";
import nodeicon from "pages/images/icons/icons8-nodejs-96.png";
import sassicon from "pages/images/icons/icons8-sass-96.png";
import nexticon from "pages/images/icons/icons8-next.js-96.png";
import styles from "../../../styles/main/Index.module.scss";

function IconSpin() {
  return (
    <div className={styles.animation}>
      <div className={styles.box}>
        {" "}
        <div className={`${styles.circle} ${styles.circle1}`}>
          <Image src={htmlicon} alt="html5 icon" className={styles.icon} />
        </div>
        <div className={`${styles.circle} ${styles.circle1}`}>
          {" "}
          <Image src={cssicon} alt="css3 icon" className={styles.icon} />
        </div>
      </div>
      <div className={styles.box}>
        {" "}
        <div className={`${styles.circle} ${styles.circle2}`}>
          {" "}
          <Image
            src={reacticon}
            alt="React (Javascript Front-End Framework) icon"
            className={styles.icon}
          />
        </div>
        <div className={`${styles.circle} ${styles.circle2}`}>
          {" "}
          <Image src={githubicon} alt="github icon" className={styles.icon} />
        </div>
      </div>
      <div className={styles.box}>
        {" "}
        <div className={`${styles.circle} ${styles.circle3}`}>
          {" "}
          <Image
            src={cicon}
            alt="C programming language icon"
            className={styles.icon}
          />
        </div>
        <div className={`${styles.circle} ${styles.circle3}`}>
          {" "}
          <Image src={nodeicon} alt="Node.JS icon" className={styles.icon} />
        </div>
      </div>
      <div className={styles.box}>
        {" "}
        <div className={`${styles.circle} ${styles.circle4}`}>
          {" "}
          <Image
            src={sassicon}
            alt="SASS (Syntactically Awesome Style Sheets, CSS pre-processor) icon"
            className={styles.icon}
          />
        </div>
        <div className={`${styles.circle} ${styles.circle4}`}>
          {" "}
          <Image src={nexticon} alt="Next.JS icon" className={styles.icon} />
        </div>
      </div>
    </div>
  );
}

export default IconSpin;
