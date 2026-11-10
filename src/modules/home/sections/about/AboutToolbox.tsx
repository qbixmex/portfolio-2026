import { cn } from "cn";
import Card from "@/modules/home/components/Card";
import CardHeader from "@/modules/home/components/CardHeader";
import ToolboxItems from "@/modules/home/components//ToolboxItems";
import languages from "@/data/programming-languages";
import frontend from "@/data/frontend";
import backend from "@/data/backend";
import styles from "./About.module.css";

export const AboutToolbox = () => {
  return (
    <Card className={cn(styles.cardClasses, styles.skillsCard)}>
      <CardHeader className={styles.skillsCardHeader}>
        <CardHeader.Title>My Toolbox</CardHeader.Title>
        <CardHeader.Description>
          Explore the languages, libraries and frameworks I use to create these amazing technologies.
        </CardHeader.Description>
      </CardHeader>
      <ToolboxItems
        items={languages}
        fromColor="rgb(110, 231, 183)"
        toColor="rgb(56, 189, 248)"
        itemsWrapperClassName={styles.scrollLeft}
      />
      <ToolboxItems
        items={frontend}
        className={styles.toolboxItems}
        fromColor="rgb(110, 231, 183)"
        toColor="rgb(56, 189, 248)"
        itemsWrapperClassName={styles.scrollRight}
      />
      <ToolboxItems
        items={backend}
        className={styles.toolboxItems}
        fromColor="rgb(110, 231, 183)"
        toColor="rgb(56, 189, 248)"
        itemsWrapperClassName={styles.scrollLeft}
      />
    </Card>
  );
};
