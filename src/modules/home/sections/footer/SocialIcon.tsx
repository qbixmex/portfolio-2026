import type { FC } from "react";
import type  { IconType } from "react-icons";

type Props = Readonly<{ icon: IconType }>;

const SocialIcon: FC<Props> = ({ icon: Icon }) => <Icon />;

export { SocialIcon };
