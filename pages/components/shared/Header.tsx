import React, { useState } from "react";
import Link from "next/link";
import style from "../../../styles/main/Header.module.scss";
import buttonStyle from "../../../styles/main/Buttons.module.scss";

interface props {
  page: string;
}

function Tab({ page }: props) {
  const [mouseLeave, setMouseLeave] = useState<boolean>(false);

  return (
    <Link
      href={`/${page}`}
      className={buttonStyle.link}
      onMouseEnter={() => setMouseLeave(false)}
      onMouseLeave={() => setMouseLeave(true)}
    >
      <span className={buttonStyle.btnText}>
        {page ? page.toUpperCase() : "HOME"}
      </span>
      <button className={buttonStyle.linkBtn}>
        <div className={buttonStyle.upper}>
          {" "}
          <div className={buttonStyle.btnUpper}></div>
          <div
            className={
              mouseLeave
                ? `${buttonStyle.btnUpperSlide} ${buttonStyle.btnUpperOut}`
                : `${buttonStyle.btnUpperSlide}`
            }
          ></div>
        </div>
        <div className={buttonStyle.lower}>
          {" "}
          <div className={buttonStyle.btnLower}></div>
          <div
            className={
              mouseLeave
                ? `${buttonStyle.btnLowerSlide} ${buttonStyle.btnLowerOut}`
                : `${buttonStyle.btnLowerSlide}`
            }
          ></div>
        </div>
      </button>
    </Link>
  );
}

function Header() {
  return (
    <header className={style.header}>
      <div className={style.headerContainer}>
        <div className={style.nameBox}>
          <p>Sébastien Legault</p>
        </div>

        <div className={style.tabBox}>
          <span className={style.tab}>
            <Tab page="" />
          </span>
          <span className={style.tab}>
            <Tab page="about" />
          </span>
          <span className={style.tab}>
            <Tab page="projects" />
          </span>
          <span className={style.tab}>
            <Tab page="contact" />
          </span>
        </div>
      </div>
    </header>
  );
}

export default Header;
