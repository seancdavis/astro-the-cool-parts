import styles from "./FunFact.module.css";

export default function FunFact({ children, heading, sourceUrl }) {
  return (
    <div className={styles.wrapper}>
      <h2 className={styles.heading}>{heading}</h2>
      <p className={styles.fact}>{children}</p>
      <p>
        <a href={sourceUrl}>Source</a>
      </p>
    </div>
  );
}
