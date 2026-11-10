import type { FC, ReactNode } from "react";
import { cn } from "cn";
import styles from "./Orbit.module.css";

type Props = {
  children: ReactNode;
  size: number;
  rotation: number;
  shouldOrbit?: boolean,
  orbitDuration?: string;
  shouldSpin?: boolean,
  spinDuration?: string,
};

export const Orbit: FC<Readonly<Props>> = ({
  children,
  size,
  rotation,
  shouldOrbit = false,
  orbitDuration = '30s',
  shouldSpin = false,
  spinDuration = '30s',
}) => {
  return (
    <div className={styles.starIconContainer}>
      <div
        className={cn({ 'animate-spin': shouldOrbit })}
        style={{ animationDuration: orbitDuration }}
      >
        <div
          className={styles.starIconFrame}
          style={{
            transform: `rotate(${rotation}deg)`,
            width: `${size}px`,
            height: `${size}px`,
          }}
        >
          <div
            className={cn(styles.starIconSpin, { 'animate-spin': shouldSpin })}
            style={{ animationDuration: spinDuration }}
          >
            <div
              className={styles.starIcon}
              style={{
                transform: `rotate(${rotation * -1}deg)`,
              }}
            >
              {children}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
