import type { FC } from "react";
import { useId } from "react";
import { FaStar } from "react-icons/fa6";
import styles from "./Tape.module.css";

export const TapeWord: FC<{ word: string }> = ({ word }) => {
  const wordId = useId();
  return (
    <div key={wordId} className={styles.word_star}>
      <span className={styles.word}>{word}</span>
      <FaStar className={styles.starIcon} />
    </div>
  );
};
