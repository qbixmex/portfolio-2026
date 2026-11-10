import type { StaticImageData } from "next/image";
import { type IconType } from "react-icons";
import { FaHtml5, FaCss3 } from "react-icons/fa6";
import { SiTypescript, SiPrisma } from "react-icons/si";
import { RiNextjsFill, RiTailwindCssFill } from "react-icons/ri";
import { BiLogoPostgresql } from "react-icons/bi";
import dish_vibes from "@/assets/images/projects/dish-vibes.webp";
import limefut from "@/assets/images/projects/limefut.webp";
import viaprima from "@/assets/images/projects/viaprima.webp";


interface Project {
  id: string;
  company: string;
  year: string;
  title: string;
  url: string;
  image: StaticImageData;
  description: string;
  tools: Tool[];
};

interface Tool {
  name: string;
  icon: IconType;
};

const portfolioProjects: Project[] = [
  {
    id: "e89f8390-07b5-4098-89b2-53eb09a0f9f9",
    company: "Limefut",
    year: "2026",
    title: "Football App",
    url: "https://limefut.vercel.app",
    image: limefut,
    description: "<p>This is a web application designed to manage a sports football league.</p> <p>It allows administrators to create and manage tournaments, teams, matches, videos, and news articles.</p><p>The application also features a postseason management system, displaying knockout brackets for qualified teams and highlighting the champion of each division.</p>",
    tools: [
      { name: "HTML", icon: FaHtml5 },
      { name: "CSS", icon: FaCss3 },
      { name: "Tailwind", icon: RiTailwindCssFill },
      { name: "Typescript", icon: SiTypescript },
      { name: "NextJs", icon: RiNextjsFill },
      { name: "Prisma", icon: SiPrisma },
      { name: "Postgres", icon: BiLogoPostgresql },
    ],
  },
  {
    id: "e9bd8940-e123-4d1e-85af-fd1a8688bfb6",
    company: "Dish Vibes",
    year: "2026",
    title: "Restaurant App",
    url: "https://dish-vibes.vercel.app",
    image: dish_vibes,
    description: "<p>This website showcases a restaurant app featuring a menu where customers can browse dishes, add items to their order, and manage their selections.</p><p>Customers can also make reservations by completing a booking form.</p><p>On the Orders page, they can update item quantities, remove dishes, and continue adding more items before finalizing their order.</p>",
    tools: [
      { name: "HTML", icon: FaHtml5 },
      { name: "CSS", icon: FaCss3 },
      { name: "Tailwind", icon: RiTailwindCssFill },
      { name: "Typescript", icon: SiTypescript },
      { name: "NextJs", icon: RiNextjsFill },
    ],
  },
  {
    id: "4a9d26c4-49eb-466e-8793-6d6e23d21e11",
    company: "Via Prima",
    year: "2026",
    title: "Package Delivery",
    url: "https://www.viaprima.com.mx/",
    image: viaprima,
    description: "<p>This is a website for a parcel delivery company that explains its package receiving and shipping processes.</p><p>It showcases the company's services, provides a frequently asked questions section, and includes a contact form and essential contact information to help customers get in touch.</p>",
    tools: [
      { name: "HTML", icon: FaHtml5 },
      { name: "CSS", icon: FaCss3 },
      { name: "Tailwind", icon: RiTailwindCssFill },
      { name: "Typescript", icon: SiTypescript },
      { name: "NextJs", icon: RiNextjsFill },
    ],
  },
] as const;

export default portfolioProjects;
