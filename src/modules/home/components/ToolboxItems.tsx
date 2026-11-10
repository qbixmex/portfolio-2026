import { Fragment } from 'react';
import Icon from '@/modules/home/components/Icon';
import type Language from '@/interfaces/language';
import { cn } from 'cn';
import styles from './ToolboxItems.module.css';

type Props = {
  items: Language[];
  className?: string;
  itemsWrapperClassName?: string;
  fromColor?: string;
  toColor?: string;
};

const ToolboxItems: React.FC<Readonly<Props>> = ({
  items,
  className = '',
  itemsWrapperClassName = '',
  fromColor,
  toColor,
}) => {
  return (
    <div className={cn(styles.wrapper, className)}>
      <div className={cn(styles.tools, itemsWrapperClassName)}>
        {new Array(2).fill(0).map((_, index) => (
          <Fragment key={index}>
            {items.map(({ id, title, iconType }) => (
              <div key={id} className={styles.techIconTitle}>
                <Icon
                  component={iconType}
                  fromColor={fromColor}
                  toColor={toColor}
                />
                <span className={styles.techTitle}>{title}</span>
              </div>
            ))}
          </Fragment>
        ))}
      </div>
    </div>
  );
};

export default ToolboxItems;
