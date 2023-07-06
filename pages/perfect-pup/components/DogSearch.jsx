"use client";

import React, { useEffect, useState } from "react";
import Image from "next/image";
import DogDisplay from "./DogDisplay";
import Filter from "./Filter";
import pawIcon from "../icons/paw.png";
import style from "../../../styles/perfect-pup/DogSearch.module.scss";
import { getDogs } from "../../api/perfect-pup/getDogs";

function DogSearch() {
  const [dogList, setDogList] = useState(null);
  const [sexValue, setSexValue] = useState("");
  const [vaccinatedValue, setVaccinatedValue] = useState("");
  const [sizeValue, setSizeValue] = useState("");
  // set default dog list to API call from Search Page
  const [dogArr, setDogArr] = useState(null);

  // SETS FILTER TO SEARCH DOG BY SEX
  const handleChangeSex = (value) => {
    setSexValue(value);
  };
  // SETS FILTER TO SEARCH DOG BY VACCINATION STATUS
  const handleChangeVaccinated = (value) => {
    setVaccinatedValue(value);
  };
  // SETS FILTER TO SEARCH DOG BY SIZE
  const handleChangeSize = (value) => {
    setSizeValue(value);
  };

  // Filters
  useEffect(() => {
    let tempDogList = dogList;
    if (sexValue !== "") {
      tempDogList = tempDogList.filter(
        (dog) => dog.sex.toString() === sexValue
      );
    }
    if (vaccinatedValue !== "") {
      tempDogList = tempDogList.filter(
        (dog) => dog.vaccinated.toString() === vaccinatedValue
      );
    }
    if (sizeValue !== "") {
      tempDogList = tempDogList.filter(
        (dog) => dog.size.toString() === sizeValue
      );
    }
    setDogArr(tempDogList);
  }, [sexValue, vaccinatedValue, sizeValue]);

  useEffect(() => {
    const dogs = getDogs().then((data) => {
      console.log(data);
      setDogList(data);
      setDogArr(data);
      return data;
    });

    console.log("dogs", dogs);
    console.log("dogList", dogList);
  }, []);

  // useEffect(() => {
  //   setDogArr(dogList);
  //   console.log(dogArr);
  // }, [dogList]);

  return (
    <>
      <section className={style["dogSearch"]}>
        <div className={style["dogSearch-head"]}>
          <h2 className={style["dogSearch-title"]}> List of available dogs</h2>
          <section className={style["searchBars"]}>
            <Filter
              value={sexValue}
              title="Sex"
              handleChange={handleChangeSex}
              valueOptionArray={[
                ["", "Both"],
                ["male", "Male"],
                ["female", "Female"],
              ]}
            />
            <Filter
              value={vaccinatedValue}
              title="Vaccinated"
              handleChange={handleChangeVaccinated}
              valueOptionArray={[
                ["", "Either"],
                ["true", "Yes"],
                ["false", "No"],
              ]}
            />
            <Filter
              value={sizeValue}
              title="Size"
              handleChange={handleChangeSize}
              valueOptionArray={[
                ["", "Any"],
                ["small", "Small"],
                ["medium", "Medium"],
                ["large", "Large"],
              ]}
              last={true}
            />
          </section>
        </div>
        {/* 

            

        {/* IF DOG IS NOT ADOPTED, RETURN PROFILES */}
        {!dogArr && (
          <Image
            src={pawIcon}
            alt="paw icon"
            className={style["dogSearch-paw-icon"]}
          />
        )}

        {dogArr &&
          dogArr.map((dog) => {
            if (dog.adopted === false) {
              return (
                <DogDisplay
                  key={dog.id}
                  id={dog.id}
                  name={dog.name}
                  breed={dog.breed}
                  sex={dog.sex}
                  img_path={dog.img_path}
                  age={dog.age}
                />
              );
            }
          })}
      </section>
    </>
  );
}

export default DogSearch;
