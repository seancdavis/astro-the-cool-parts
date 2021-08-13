import { useState } from "react";
import styles from "./FunFact.module.css";

export default function FunFact({ children, heading, sourceUrl }) {
  const [expanded, setExpanded] = useState(false);

  let wrapperClasses = styles.wrapper;
  if (expanded) wrapperClasses += ` ${styles.wrapperExpanded}`;

  return (
    <div className={wrapperClasses}>
      <h2 className={styles.heading}>
        <button onClick={() => setExpanded(!expanded)}>
          <span>{expanded ? "🟣" : "⚪️"}</span>
          <span>{heading}</span>
        </button>
      </h2>
      <p className={styles.fact}>{children}</p>
      <p>
        <a href={sourceUrl}>Source</a>
      </p>
    </div>
  );
}
