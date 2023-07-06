import React, { useState, useEffect } from "react";
import Image from "next/image";
import DogSearch from "./components/DogSearch";
import pawIcon from "./icons/paw.png";
import style from "../../styles/perfect-pup/Search.module.scss";
import Header from "./components/Header";
import Footer from "./components/Footer";

// import { getAllDogs } from "../../../functions/apiRequests.js";

function SearchPage() {
  // useEffect(() => {
  //   getAllDogs().then((data) => setDogData(data));
  // }, []);

  return (
    <main className={style.container}>
      <Header />
      <div className={style.wrap}>
        <section className={style["searchPage"]}>
          <DogSearch />
        </section>
      </div>
      <Footer />
    </main>
  );
}

export default SearchPage;
