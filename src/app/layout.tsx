import type { Metadata } from "next";
import { cn } from "cn";
import { inter, orbitron } from "./fonts";
import "./globals.css";

export const metadata: Metadata = {
  title: "Daniel González Briseño Portfolio",
  description: "Welcome to my portfolio! I'm Daniel González Briseño, a passionate software developer specializing in web development. Explore my projects, skills, and experience as I showcase my work and share insights into my journey as a developer.",
};

const cssClasses = [
  inter.variable,
  orbitron.variable,
  'h-full',
  'antialiased',
];

export const RootLayout = ({ children }: LayoutProps<"/">) => {
  return (
    <html
      lang="en"
      className={cn(cssClasses)}
      suppressHydrationWarning
    >
      <body>
        {children}
      </body>
    </html>
  );
};

export default RootLayout;
