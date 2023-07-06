import React from "react";
import Link from "next/link";
import style from "../../../styles/perfect-pup/Button.module.scss";

function Button({ to, text, text2 }) {
  return (
    <Link className={style.btn} data-testid="btn" href={`/perfect-pup/${to}`}>
      {text}
      <span className={style.text2}>{text2}</span>
    </Link>
  );
}

export default Button;
