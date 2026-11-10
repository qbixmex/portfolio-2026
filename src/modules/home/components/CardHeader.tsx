import type { FC, ReactNode } from 'react';
import type { CSSProperties } from 'react';
import { FaStar } from 'react-icons/fa6';
import { cn } from 'cn';
import styles from './CardHeader.module.css';

type CardHeaderProps = FC<Readonly<{
  children: ReactNode;
  className?: string;
  style?: CSSProperties;
}>> & {
  Title: FC<Readonly<SubProps>>;
  Description: FC<Readonly<SubProps>>;
};

type SubProps = {
  children: string | ReactNode;
};

const CardHeader: CardHeaderProps = ({ children, className = '', style = {} }) => {
  return (
    <div
      className={cn(styles.wrapper, className)}
      style={style}
    >
      {children}
    </div>
  );
};

CardHeader.displayName = "CardHeader";

CardHeader.Title = ({ children }: SubProps) => {
  return (
    <div className={styles['icon_title']}>
      <FaStar className={styles.icon} />
      <h3 className={styles.title}>{children}</h3>
    </div>
  );
};

CardHeader.Title.displayName = "CardHeader.Title";

CardHeader.Description = ({ children }: SubProps) => {
  return (
    <p className={styles.description}>{children}</p>
  );
};

CardHeader.Description.displayName = "CardHeader.Description";

export default CardHeader;
