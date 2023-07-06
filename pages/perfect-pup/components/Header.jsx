import React, { useState } from "react";
// import MenuIcon from "@mui/icons-material/Menu";
// import IconButton from "@mui/material/IconButton";
import Link from "next/link";
import { useRouter } from "next/router";
import style from "../../../styles/perfect-pup/Header.module.scss";

const Tab = ({ page }) => {
  // page within page is capitalized in CSS
  const router = useRouter();
  const path = router.pathname;

  return (
    <div className={style.tabMargin}>
      <Link
        href={page === "home" ? "/perfect-pup" : `/perfect-pup/${page}`}
        data-testid={`${page}NavButton`}
        className={
          path === "/perfect-pup" && page === "home"
            ? `${style.tabActive} ${style.tab}`
            : path === `/perfect-pup/${page}`
            ? `${style.tabActive} ${style.tab}`
            : `${style.tab}`
        }
      >
        <span>{page}</span>
      </Link>
    </div>
  );
};

const Dropdown = ({ stateChange }) => {
  // adds event listener when opened, removes when closed
  // sets headers dropDown state to false when anywhere on screen is clicked
  useEffect(() => {
    const clickEvent = (e) => {
      stateChange(false);
    };
    document.body.addEventListener("click", clickEvent);
    return () => {
      document.body.removeEventListener("click", clickEvent);
    };
  }, [stateChange]);

  return (
    <>
      <div className={style.dropdownContainer}>
        <ul className={style.dropdown}>
          <li className={style.listItem} onClick={() => stateChange(false)}>
            <Link href="/perfect-pup" className={style.navLinkTab}>
              Home
            </Link>
          </li>
          <li className={style.listItem} onClick={() => stateChange(false)}>
            <Link href="/perfect-pup/search" className={style.navLinkTab}>
              Search
            </Link>
          </li>
          <li className={style.listItem} onClick={() => stateChange(false)}>
            <Link href="/perfect-pup/about" className={style.navLinkTab}>
              About
            </Link>
          </li>
          <li className={style.listItem} onClick={() => stateChange(false)}>
            <Link href="/perfect-pup/tips" className={style.navLinkTab}>
              Tips
            </Link>
          </li>
          <li className={style.listItem} onClick={() => stateChange(false)}>
            <Link href="/perfect-pup/contact" className={style.navLinkTab}>
              Contact
            </Link>
          </li>
        </ul>
      </div>
    </>
  );
};

const Header = () => {
  // dropdown and handleClick for dropdown on smaller screens
  const [dropDown, setDropDown] = useState(false);
  const handleClick = () => {
    setDropDown(!dropDown);
  };
  console.log("router", useRouter());

  return (
    <header className={style.header}>
      <summary className={style.titleBox}>
        <h1 className={style.titleUpper}>Perfect Pup</h1>
        <h6 className={style.titleLower}>Find your new best friend</h6>
      </summary>

      <nav className={style.nav}>
        {/* for mobile */}
        <div className={style.navButton}>
          {/* <IconButton onClick={handleClick}>
            <MenuIcon sx={{ color: "#f0ecec" }} />
          </IconButton> */}
        </div>
        {dropDown && (
          <div className={style.dropdown}>
            <Dropdown stateChange={setDropDown} style={{ zIndex: "1000" }} />
          </div>
        )}

        {/* for tablet and destop */}
        <div className={style.navBar}>
          <Tab page="home" />
          <Tab page="search" />
          <Tab page="about" />
          <Tab page="tips" />
          <Tab page="contact" />
        </div>
      </nav>
    </header>
  );
};

export default Header;
