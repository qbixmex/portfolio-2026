import type { FC } from 'react';
import type { CustomIconType } from '@/interfaces/CustomIconType';

export const ArrowUpRightIcon: FC<CustomIconType> = ({
  className,
  style,
  color = 'currentColor',
  size = 24,
}) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"
    className={className}
    style={{ ...style, color }}
  >
    <line x1="7" y1="17" x2="17" y2="7"></line><polyline points="7 7 17 7 17 17"></polyline>
  </svg>
);
