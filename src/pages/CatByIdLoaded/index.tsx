"use client";

import { CardItem } from "@/components/CardItem";
import { CatDetailedNormalized } from "@/types";

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
            title={cat.name}
            id={cat.id}
            countyCode={cat.countyCode}
            image={cat.url}
            asGiant
          />
        </div>
      </div>
    </main>
  );
}
