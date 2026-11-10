import TapeWords from "./TapeWordsList";
import { cn } from "cn";
import styles from "./Tape.module.css";

export const Tape = () => {
  return (
    <section className={styles.tape}>
      <div className={styles.background}>
        <div className={styles.wrapper}>
          <div className={cn('animate-move-right', styles.wordsList)}>
            {['a','b'].map((list) => <TapeWords key={list} />)}
          </div>
        </div>
      </div>
  </section>
  );
};
