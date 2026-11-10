import Card from "@/modules/home/components/Card";
import Image from "next/image";
import Icon from '@/modules/home/components/Icon';
import styles from "./About.module.css";
import { cn } from "cn";
import { LocationDotIcon } from "@/modules/home/components/icons/location-dot";
import MapImage from "@/assets/images/about/map.png";

const AboutMap = () => {
  return (
    <Card className={cn(styles.cardClasses, styles.mapCard)}>
      <Image src={MapImage} alt="Map" className={styles.mapImage} />
      <div className={cn(styles.mapIconContainer)}>
        <div className={styles.mapIconBackground}></div>
        <div className={styles.mapIconAnimation}></div>
        <Icon
          component={LocationDotIcon}
          className={styles.mapIcon}
          fromColor="hsl(155, 100%, 95%)"
          toColor="hsla(155, 100%, 95%, 0.4)"
        />
      </div>
    </Card>
  );
};

export default AboutMap;