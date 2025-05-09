/* eslint-disable @next/next/no-img-element */
import { useState } from "react";
import ReactCountryFlag from "react-country-flag";

import { LoadingDots } from "../LoadingDots";

import styles from "./index.module.css";
import { defaultCountryCode } from "@/lib/normalizer/cats";

interface CardItemProps {
  image: string;
  title: string;
  countyCode: string;
}

export const CardItem = ({ image, title, countyCode }: CardItemProps) => {
  const [loaded, setLoaded] = useState(false);

  return (
    <div className={styles.card}>
      {!loaded && <LoadingDots />}
      <img
        src={image}
        alt={title}
        className={styles.image}
        style={{ display: loaded ? "block" : "none" }}
        onLoad={() => setLoaded(true)}
      />
      {loaded && (
        <div className={styles.catInfo}>
          <p className={styles.title}>{title}</p>
          <ReactCountryFlag
            svg
            title={countyCode !== defaultCountryCode ? countyCode : ""}
            className={styles.flag}
            countryCode={countyCode}
          />
        </div>
      )}
    </div>
  );
};
