"use client";

import React from "react";
import style from "../../../styles/perfect-pup/Filter.module.scss";

function Filter({ value, title, handleChange, valueOptionArray, last }) {
  return (
    <div
      className={
        last
          ? `${style["searchOption"]} ${style["searchOption-last"]}`
          : `${style["searchOption"]}`
      }
    >
      <label className={style["label"]}>{title}:</label>
      <select
        className={style["select"]}
        value={value}
        onChange={(e) => handleChange(e.target.value)}
      >
        {valueOptionArray.map(([value, option], i) => (
          <option className={style["option"]} value={value} key={i}>
            {option}
          </option>
        ))}
      </select>
    </div>
  );
}

export default Filter;
