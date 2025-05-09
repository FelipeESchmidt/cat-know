"use client";

import Link from "next/link";

import { CatDetailedNormalized } from "@/types";
import { CardItem } from "@/components/CardItem";
import { CatDetails } from "@/components/CatDetails";
import { generateRandomBreedDetailed } from "@/utils/randomBreed";

import mainStyles from "../../app/page.module.css";
import styles from "./index.module.css";

export interface CatByIdLoadedProps {
  cat: CatDetailedNormalized;
}

export function CatByIdLoaded({ cat }: CatByIdLoadedProps) {
  const breedToDisplay = cat.breeds
    ? cat.breeds[0]
    : generateRandomBreedDetailed(cat.name);

  return (
    <main className={mainStyles.page}>
      <div className={mainStyles.container}>
        <Link href="/" className={mainStyles.backButton}>
          <h1 className={mainStyles.title}>CatKnow</h1>
        </Link>
        <div className={styles.catInfo}>
          <CardItem
            asGiant
            id={cat.id}
            title={cat.name}
            image={cat.url}
            origin={cat.origin}
            countyCode={cat.countyCode}
          />
          {<CatDetails breed={breedToDisplay} categories={cat.categories} />}
        </div>
      </div>
    </main>
  );
}
