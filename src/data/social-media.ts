import type { IconType } from "react-icons";
import {
  FaLinkedin,
  FaXTwitter,
  FaYoutube,
  FaInstagram,
  FaTiktok,
} from "react-icons/fa6";

type Socia = {
  id: string;
  name: string;
  url: string;
  icon: IconType;
  enable: boolean;
};

export const socialMedia: Socia[] = [
  {
    id: "330b88bc-260a-4659-9708-4f50a7f56651",
    name: "Linkedin",
    url: "https://www.linkedin.com/in/qbix/",
    icon: FaLinkedin,
    enable: true,
  },
  {
    id: "f474139e-7a8c-41c8-9b09-66300ab8c73f",
    name: "Twitter",
    url: "https://x.com/qbixmex",
    icon: FaXTwitter,
    enable: true,
  },
  {
    id: "30cd54f7-d27a-4296-a23e-bf52219a57b3",
    name: "Youtube",
    url: "#",
    icon: FaYoutube,
    enable: false,
  },
  {
    id: "062296f2-3f8e-4b07-ac0d-101107861b64",
    name: "Instagram",
    url: "#",
    icon: FaInstagram,
    enable: false,
  },
  {
    id: "b3af69a4-1a85-4c3c-a3ac-b2e90ca25a88",
    name: "TikTok",
    url: "#",
    icon: FaTiktok,
    enable: false,
  },
];