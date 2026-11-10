import type { FC } from "react";
import {
  Header,
  Hero,
  Projects,
  Tape,
  Testimonials,
  About,
  Contact,
  Footer,
} from "@/modules/home";

const HomePage: FC = () => {
  return (
    <main>
      <Header />
      <Hero />
      <Projects />
      <Tape />
      <Testimonials />
      <About />
      <Contact />
      <Footer />
    </main>
  );
};

export default HomePage;
