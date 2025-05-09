import { BreedDetailed } from "@/types";

const temperamentOptions = [
  "Playful",
  "Curious",
  "Affectionate",
  "Intelligent",
  "Energetic",
  "Loyal",
  "Gentle",
  "Vocal",
  "Quiet",
  "Social",
  "Independent",
  "Easy Going",
  "Agile",
  "Loving",
  "Adaptable",
  "Shy",
];

const getRandomValue = (min: number, max: number) =>
  Math.floor(Math.random() * (max - min + 1)) + min;

const getWeightedRandom = () => {
  const options = [2, 3, 3, 4, 4, 5];
  return options[Math.floor(Math.random() * options.length)];
};

const generateRandomTemperament = (min = 3, max = 5): string => {
  const count = Math.floor(Math.random() * (max - min + 1)) + min;
  const shuffled = temperamentOptions.sort(() => 0.5 - Math.random());
  const selected = shuffled.slice(0, count);
  return selected.join(", ");
};

export const generateRandomBreedDetailed = (
  catName?: string
): BreedDetailed => {
  const randomId = `rand-${Math.floor(Math.random() * 100000)}`;
  const refImageId = `img-${Math.floor(Math.random() * 9999)}`;

  return {
    id: randomId,
    name: catName || `Random Cat ${randomId}`,
    description:
      "A friendly and curious cat that loves people, playtime, and moderate activity.",
    temperament: generateRandomTemperament(),
    origin: "Unknown",
    country_codes: "AQ",
    country_code: "AQ",
    weight: {
      metric: `${getRandomValue(2, 4)} - ${getRandomValue(4, 6)}`,
      imperial: `${getRandomValue(5, 7)} - ${getRandomValue(7, 10)}`,
    },
    life_span: `${getRandomValue(10, 12)} - ${getRandomValue(13, 16)}`,
    indoor: getRandomValue(0, 1),
    lap: getRandomValue(0, 1),
    alt_names: "",
    adaptability: getWeightedRandom(),
    affection_level: getWeightedRandom(),
    child_friendly: getWeightedRandom(),
    dog_friendly: getWeightedRandom(),
    energy_level: getWeightedRandom(),
    grooming: getWeightedRandom(),
    health_issues: getWeightedRandom(),
    intelligence: getWeightedRandom(),
    shedding_level: getWeightedRandom(),
    social_needs: getWeightedRandom(),
    stranger_friendly: getWeightedRandom(),
    vocalisation: getWeightedRandom(),
    experimental: 0,
    hairless: 0,
    natural: getRandomValue(0, 1),
    rare: getRandomValue(0, 1),
    rex: 0,
    suppressed_tail: getRandomValue(0, 1),
    short_legs: getRandomValue(0, 1),
    hypoallergenic: getRandomValue(0, 1),
    wikipedia_url: "",
    cfa_url: "",
    vetstreet_url: "",
    vcahospitals_url: "",
    reference_image_id: refImageId,
  };
};
