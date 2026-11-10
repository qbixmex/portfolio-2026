'use client';

import type { FC } from "react";
import { useRef } from "react";
import Card from "@/modules/home/components/Card";
import CardHeader from "@/modules/home/components/CardHeader";
import otherTools from "@/data/other-tools";
import { motion, useInView } from "framer-motion";
import { cn } from "cn";
import styles from "./About.module.css";

export const OtherTools: FC = () => {
  const ref = useRef<HTMLDivElement|null>(null);
  const isInView = useInView(ref, { once: true, margin: "20px 0px 100px 0px" });

  return (
    <Card className={cn(styles.cardClasses, styles.hobbiesCard)}>
      <CardHeader className={styles.hobbiesCardHeader}>
        <CardHeader.Title>Other Tools</CardHeader.Title>
        <CardHeader.Description>
          Software I use for Images, video and audio edition, and administrative work.
        </CardHeader.Description>
      </CardHeader>
      <div className={styles.otherTools} ref={ref}>
        {otherTools.map((tool, index) => {
          const ToolIcon = tool.icon;
          return (
            <motion.div
              key={tool.id}
              className={styles.tool}
              initial={{ opacity: 0 }}
              animate={isInView ? { opacity: 1 } : { opacity: 0 }}
              transition={{ delay: index * 0.1 }}
            >
              <div className={styles.toolIcon}>
                <ToolIcon className={styles.toolIconSvg} />
              </div>
              <span className={styles.toolTitle}>
                {tool.title}
              </span>
            </motion.div>
          );
        })}
      </div>
    </Card>
  );
};
