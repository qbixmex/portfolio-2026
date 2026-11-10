import Image from "next/image";
import { Orbit } from "./components/Orbit";
import { Graphic } from "./components/Graphic";
import { FaArrowDown } from "react-icons/fa6";
import profileImage from "@/assets/images/daniel-80s-video-game-200-250.png";
import GrainImage from "@/assets/images/grain.jpg";
import { cn } from "cn";
import styles from "./Hero.module.css";

export const Hero = () => {
  return (
    <section id="home" className={styles.hero}>
      <div className={styles.backgroundWrapper}>
        {/* GRAIN */}
        <div
          className={styles.background}
          style={{ backgroundImage: `url(${GrainImage.src})` }}
        />

        {/* RINGS */}
        <div className={cn([styles.rings, styles.ring1])} />
        <div className={cn([styles.rings, styles.ring2])} />
        <div className={cn([styles.rings, styles.ring3])} />
        <div className={cn([styles.rings, styles.ring4])} />

        {/* STARS */}
        <Orbit
          size={750}
          rotation={180}
          shouldOrbit={true}
          orbitDuration="25s"
          shouldSpin={true}
          spinDuration="30s"
        >
          <Graphic
            size={80}
            color="green"
            type="star"
            duration={2}
            delay={1}
          />
        </Orbit>

        <Orbit
          size={550}
          rotation={130}
          shouldOrbit={true}
          orbitDuration="25s"
          shouldSpin={true}
          spinDuration="60s"
        >
          <Graphic
            size={60}
            color="green"
            type="star"
            duration={3}
            delay={1}
          />
        </Orbit>

        <Orbit
          size={880}
          rotation={50}
          shouldOrbit={true}
          orbitDuration="60s"
          shouldSpin={true}
          spinDuration="45s"
        >
          <Graphic
            size={100}
            color="green"
            type="star"
            duration={4}
            delay={2}
          />
        </Orbit>

        {/* SPARKLES */}
        <Orbit
          size={850}
          rotation={0}
          shouldOrbit={true}
          shouldSpin={true}
          orbitDuration="60s"
          spinDuration="30s"
        >
          <Graphic
            size={75}
            color="gray"
            type="sparkle"
            opacity={0.2}
            duration={3}
            delay={1}
          />
        </Orbit>

        <Orbit
          size={690}
          rotation={250}
          shouldOrbit={true}
          orbitDuration="30s"
          shouldSpin={true}
          spinDuration="25s"
        >
          <Graphic
            size={50}
            color="gray"
            type="sparkle"
            opacity={0.35}
            duration={2}
          />
        </Orbit>

        <Orbit
          size={760}
          rotation={190}
          shouldOrbit={true}
          orbitDuration="45s"
          shouldSpin={true}
          spinDuration="30s"
        >
          <Graphic
            size={50}
            color="gray"
            type="sparkle"
            opacity={0.3}
            duration={3}
            delay={2}
          />
        </Orbit>

        {/* CIRCLES */}
        <Orbit
          size={670}
          rotation={-20}
          shouldOrbit={true}
          orbitDuration="30s"
        >
          <Graphic
            size={30}
            color="gray"
            type="circle"
            opacity={0.2}
            duration={5}
            delay={1}
          />
        </Orbit>

        <Orbit
          size={800}
          rotation={120}
          shouldOrbit={true}
          orbitDuration="30s"
        >
          <Graphic
            size={20}
            color="gray"
            type="circle"
            opacity={0.2}
            duration={5}
            delay={1}
          />
        </Orbit>

        <Orbit
          size={510}
          rotation={140}
          shouldOrbit={true}
          orbitDuration="30s"
        >
          <Graphic
            size={20}
            color="gray"
            type="circle"
            opacity={0.25}
            duration={5}
            delay={2}
          />
        </Orbit>
      </div>

      <div className="container">
        <div className={styles.imageButtonsWrapper}>
          <Image
            className={styles.profileImage}
            src={profileImage}
            alt="Person emoji developing a website on a computer"
            width={200}
            height={250}
          />

          <div className={styles.status}>
            <div className={styles.statusDotContainer}>
              <div className={styles.statusDot} />
              <div className={cn('animate-ping', styles.statusDotAnimation)} />
            </div>
            <p className={styles.statusText}>Available for new projects</p>
          </div>

          <div className={styles.info}>
            <h1 className={styles.heading}>Building Exceptional User Experiences</h1>
            <p className={styles.description}>I specialized building great sites from UI Designs to fully functional high performance web applications. Let&apos;s build something amazing, Contact Me !</p>
          </div>
        </div>

        <div className={styles.buttons}>
          <a href="#projects" className={styles.explore}>
            <span>Explore My Work</span>
            <FaArrowDown className={styles.icon} />
          </a>

          <a href="#contact" className={styles.connect}>
            <span>👋</span>
            <span>Let&apos;s Connect</span>
          </a>
        </div>
      </div>
    </section>
  );
};
