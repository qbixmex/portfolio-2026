import type { FC } from 'react';
import type { CustomIconType } from '@/interfaces/CustomIconType';

export const KotlinIcon: FC<CustomIconType> = ({
  className,
  style,
  color = 'currentColor',
  size = 24,
}) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={size}
    height={size}
    viewBox="0 0 32 32"
    fill="currentColor"
    className={className}
    style={{ ...style, color }}
  >
    <path
      transform="translate(16,16) scale(0.8) translate(-16, -16)"
      d="m1.734 32l15.068-15.333L32 32zM0 0h16L0 16.667zm17.865 0L0 18.667V32L32 0z"
    />
  </svg>
);
