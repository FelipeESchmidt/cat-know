"use client";

import { CatDetailedNormalized } from "@/types";
import { CardItem } from "@/components/CardItem";
import { CatDetails } from "@/components/CatDetails";

import mainStyles from "../../app/page.module.css";
import styles from "./index.module.css";

export interface CatByIdLoadedProps {
  cat: CatDetailedNormalized;
}

export function CatByIdLoaded({ cat }: CatByIdLoadedProps) {
  return (
    <main className={mainStyles.page}>
      <div className={mainStyles.container}>
        <h1 className={mainStyles.title}>CatKnow</h1>
        <div className={styles.catInfo}>
          <CardItem
            asGiant
            id={cat.id}
            title={cat.name}
            image={cat.url}
            origin={cat.origin}
            countyCode={cat.countyCode}
          />
          <CatDetails breed={cat.breeds[0]} />
        </div>
      </div>
    </main>
  );
}
