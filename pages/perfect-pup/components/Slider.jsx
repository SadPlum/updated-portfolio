import React, { useState, useEffect } from "react";
import leftArrow from "../icons/arrow-left-solid.svg";
import rightArrow from "../icons/arrow-right-solid.svg";
import image1 from "./images/dog1.jpg";
import image2 from "./images/dog2.jpg";
import image3 from "./images/dog3.jpg";
import image4 from "./images/dog4.jpg";
import style from "../../../styles/perfect-pup/Slider.module.scss";
import Image from "next/image";

const Slider = () => {
  const [slider, setSlider] = useState(0);

  const dogs = [image1, image2, image3, image4];

  const nextSlide = () => {
    setSlider(slider === 3 ? 0 : slider + 1);
  };

  const previousSlide = () => {
    setSlider(slider === 0 ? 3 : slider - 1);
  };

  useEffect(() => {
    const intervalId = setInterval(nextSlide, 3000);
    return () => clearInterval(intervalId);
  }, [slider]);

  return (
    <section className={style.sliderBody}>
      <section className={style.carousel}>
        <button
          data-testid={`left-slider-button`}
          className={style.buttonLeft}
          onClick={previousSlide}
        >
          <Image
            className={style.sliderButton}
            src={leftArrow}
            alt="Left arrow button to move back an image"
          />
        </button>

        <Image
          width="500"
          height="500"
          className={style.dogImage}
          src={dogs[slider]}
          alt="Pictures of Dogs"
        ></Image>

        <button
          data-testid={`right-slider-button`}
          className={style.buttonRight}
          onClick={nextSlide}
        >
          <Image
            className={style.sliderButton}
            src={rightArrow}
            alt="Right arrow button to move back an image"
          />
        </button>
      </section>
    </section>
  );
};

export default Slider;
