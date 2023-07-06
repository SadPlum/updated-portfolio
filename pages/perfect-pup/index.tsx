import Image from "next/image";
import React from "react";
import Slider from "./components/Slider";
import style from "../../styles/perfect-pup/Home.module.scss";
import Button from "./components/Button";
import pawIcon from "./icons/paw.png";
import Header from "./components/Header";
import Footer from "./components/Footer";

export default function Index() {
  return (
    <>
      <main className={style.container}>
        <Header />
        <div className={style.wrap}>
          <section className={style.perfectPupHome}>
            <section className={`${style.homeRow} ${style.slider}`}>
              <Slider />
              <aside className={style.textBox}>
                <h2 className={style.textBoxTitle}>Welcome, dog-lovers</h2>
                <p className={style.textBoxParag}>
                  We are Perfect Pup, a Fredericton based dog adoption service.
                  We are here to help dogs of all kinds and background find the
                  perfect homes.
                </p>
                <Button to="search" text="Head to Search Page" />
              </aside>
            </section>
            <Image src={pawIcon} alt="paw icon" className={style.pawIconHome} />
            <section
              className={`${style.homeRow} ${style.homeContactInformation}`}
            >
              <aside className={style.textBox}>
                <h2 className={style.textBoxTitle}>
                  Interested in helping, or visitng our pups?
                </h2>
                <p className={style.textBoxParag}>
                  To volunteer, schedule a tour or to donate, visit our contact
                  page.
                </p>
                <Button to="contact" text="Head to Contact Page" />
              </aside>
            </section>
          </section>
        </div>
        <Footer />
      </main>
    </>
  );
}
