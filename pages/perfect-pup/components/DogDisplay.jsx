"use client";
import React, { useEffect, useState } from "react";
import style from "../../../styles/perfect-pup/DogDisplay.module.scss";
import Image from "next/image";

import pawIcon from "../icons/paw.png";

import Button from "./Button";

function DogDisplay({ id, name, sex, breed, age, temperament, img_path }) {
  // const imageIndex = image.indexOf("/dogImages");
  // const imageUrl = "https://perfectpup.xyz/" + image.slice(imageIndex);
  console.log(img_path);

  return (
    <>
      <article className={style["dogListings"]}>
        <div className={style["dogDisplay"]}>
          <div className={style["dogDisplay-head"]}>
            <h3 className={style["dogDisplay-title"]}>{`${name}, ${sex}`}</h3>
          </div>
          <div className={style["dogDisplay-content"]}>
            <Image
              src={img_path}
              alt=""
              className={style["dogDisplay-img"]}
              width="500"
              height="500"
            />
            <Button
              to={{ pathname: `/search/${id}` }}
              text={`Learn about `}
              text2={name}
            />
          </div>
          <Image
            src={pawIcon}
            alt="paw icon"
            className={style["dogDisplay-paw-icon"]}
          />
        </div>
      </article>
    </>
  );
}

export default DogDisplay;
