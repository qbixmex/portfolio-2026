import { socialMedia } from "@/data/social-media";
import { SocialIcon } from "./SocialIcon";
import styles from "./Footer.module.css";

export const Footer = () => {
  const sm = socialMedia.filter((item) => item.enable === true);

  return (
    <footer className={styles.footer}>
      <div className={styles.footerBackground}></div>
      <div className="container">
        <div className={styles.footerWrapper}>
          <div className={styles.footerCopy}>&copy; 2026. All rights reserved.</div>
          <nav className={styles.footerLinks}>
            {sm.map((social) => (
              <p key={social.id}>
                <a
                  href={social.url}
                  className={styles.footerLink}
                  title={`Go to ${social.name}`}
                >
                  <SocialIcon icon={social.icon} />
                </a>
              </p>
            ))}
          </nav>
        </div>
      </div>
    </footer >
  );
};
