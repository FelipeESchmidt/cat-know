import styles from "./index.module.css";

export interface TraitProps {
  label: string;
  value: number;
}

export const Trait: React.FC<TraitProps> = ({ label, value }) => {
  return (
    <div className={styles.trait}>
      <p className={styles.label}>{label}</p>
      <div className={styles.bars}>
        {Array.from({ length: 5 }).map((_, i) => (
          <span
            key={i}
            className={`${styles.bar} ${i < value ? styles.active : ""}`}
          />
        ))}
      </div>
    </div>
  );
};
