import ReactCountryFlag from "react-country-flag";

import { BreedDetailed } from "@/types";

import styles from "./index.module.css";
import { Trait } from "../Trait";

interface CatDetailsProps {
  breed: BreedDetailed;
}

export const CatDetails = ({ breed }: CatDetailsProps) => {
  return (
    <div className={styles.details}>
      <div className={styles.detailsTop}>
        <h2 className={styles.name}>{breed.name}</h2>
        <p className={styles.description}>{breed.description}</p>
      </div>

      <div className={styles.meta}>
        <p className={styles.info}>
          <b>Origin:</b> {breed.origin}{" "}
          <ReactCountryFlag
            svg
            className={styles.flag}
            countryCode={breed.country_code}
          />
        </p>
        <p>
          <b>Temperament:</b> {breed.temperament}
        </p>
        <p>
          <b>Life Span:</b> {breed.life_span} years
        </p>
        <p>
          <b>Weight:</b> {breed.weight.metric} kg
        </p>
      </div>

      <div className={styles.traits}>
        <Trait label="Affection" value={breed.affection_level} />
        <Trait label="Intelligence" value={breed.intelligence} />
        <Trait label="Dog Friendly" value={breed.dog_friendly} />
        <Trait label="Child Friendly" value={breed.child_friendly} />
        <Trait label="Energy" value={breed.energy_level} />
        <Trait label="Grooming" value={breed.grooming} />
        <Trait label="Health Issues" value={breed.health_issues} />
        <Trait label="Shedding" value={breed.shedding_level} />
        <Trait label="Social Needs" value={breed.social_needs} />
        <Trait label="Stranger Friendly" value={breed.stranger_friendly} />
        <Trait label="Vocalisation" value={breed.vocalisation} />
      </div>

      <div className={styles.links}>
        {breed.wikipedia_url && (
          <a
            href={breed.wikipedia_url}
            target="_blank"
            rel="noopener noreferrer"
          >
            Wikipedia
          </a>
        )}
        {breed.vetstreet_url && (
          <a
            href={breed.vetstreet_url}
            target="_blank"
            rel="noopener noreferrer"
          >
            VetStreet
          </a>
        )}
      </div>
    </div>
  );
};
