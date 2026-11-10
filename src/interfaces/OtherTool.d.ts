import type { FC, CSSProperties } from "react";

interface OtherTool {
  id: string;
  title: string;
  icon: FC<{
    className?: string;
    style?: CSSProperties;
  }>;
}

export default OtherTool;
