import React from "react";
import Link from "next/link";
import Image from "next/image";
import facebookIcon from "../icons/facebook-brands.svg";
import instagramIcon from "../icons/instagram-brands.svg";
import twitterIcon from "../icons/twitter-brands.svg";
import style from "../../../styles/perfect-pup/Footer.module.scss";

const Footer = () => {
  return (
    <footer className={style.footer}>
      <div className={style.footerContent}>
        <div className={style.footerGroup}>
          <section className={style.footerInfo}>
            <h2 className={style.footerTitle}>Perfect Pup</h2>
            <p className={style.footerContact}>
              123 React Road - Unit 1 <br />
              Fredericton, NB A1A 1A1 <br />
              (506) 123-4567
            </p>
          </section>
        </div>
        <div className={style.footerGroup}>
          <section className={style.social}>
            <Image
              src={facebookIcon}
              alt="Facebook Icon"
              className={style.footerIcon}
            />
            <Image
              src={instagramIcon}
              alt="Instagram Icon"
              className={style.footerIcon}
            />
            <Image
              src={twitterIcon}
              alt="Twitter Icon"
              className={style.footerIcon}
            />
          </section>
        </div>
        <div className={style.footerGroup}>
          <section className={style.footerLinks}>
            <Link href="/perfect-pup" className={style.footerLinkA}>
              Home
            </Link>
            <Link href="/perfect-pup/search" className={style.footerLinkA}>
              Search
            </Link>
            <Link href="/perfect-pup/about" className={style.footerLinkA}>
              About
            </Link>
            <Link href="/perfect-pup/tips" className={style.footerLinkA}>
              Tips
            </Link>
            <Link href="/perfect-pup/contact" className={style.footerLinkA}>
              Contact
            </Link>
          </section>
        </div>
      </div>
      <section className={style.author}>
        <p className={style.footerText}>A React App by Sebastien Legault </p>
        <div className={style.footerLinks}>
          <span>
            <a href="https://sebastienlegault.com" className={style.footerLink}>
              sebastienlegault.com
            </a>
          </span>
          <span>
            <a href="https://github.com/SadPlum/" className={style.footerLink}>
              github.com/SadPlum
            </a>
          </span>
        </div>
      </section>
    </footer>
  );
};

export default Footer;
