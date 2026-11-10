import type { FC } from "react";
import type { CustomIconType } from "./CustomIconType";

interface Language {
  id: string;
  title: string;
  iconType: FC<CustomIconType>;
}

export default Language;
