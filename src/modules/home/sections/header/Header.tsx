"use client";

import { useEffect, useState } from "react";
import { cn } from "cn";
import styles from "./Header.module.css";

export const Header = () => {
  const [ activeHash, setActiveHash ] = useState('');

  useEffect(() => {
    const handleHashChange = () => {
      setActiveHash(window.location.hash);
    };

    //* Listen for changes to the hash
    window.addEventListener('hashchange', handleHashChange);

    //* Set the initial hash
    handleHashChange();

    //* Clear the event listener when the component is unmounted.
    return () => window.removeEventListener('hashchange', handleHashChange);
  }, []);

  return (
    <section className={styles.navContainer}>
      <nav className={styles.nav}>
        <a
          href="#home"
          title="Go to Home"
          className={cn(styles.navItem, {
            [styles.navItemSelected]: activeHash === '#home',
          })}
        >
          Home
        </a>

        <a
          href="#projects"
          title="Go to Projects"
          className={cn(styles.navItem, {
            [styles.navItemSelected]: activeHash === '#projects',
          })}
        >
          Projects
        </a>

        <a
          href="#about"
          title="Go to About"
          className={cn(styles.navItem, {
            [styles.navItemSelected]: activeHash === '#about',
          })}
        >
          About
        </a>

        <a
          href="#contact"
          title="Go to Contact"
          className={cn(styles.navItem, {
            [styles.navItemSelected]: activeHash === '#contact',
          })}
        >
          Contact
        </a>
      </nav>
    </section>
  );
};
