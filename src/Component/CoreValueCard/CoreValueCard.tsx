import { motion } from "framer-motion";
import { useState } from "react";
import type { ReactNode } from "react";
import styles from "./CoreValues.module.css";
import { useTranslation } from "react-i18next";

import {
  FaBullseye,
  FaUserShield,
  FaClock,
  FaGraduationCap,
  FaLightbulb,
  FaChartLine,
  FaHandsHelping,
  FaComments,
  FaRegSmileBeam
} from "react-icons/fa";

type Props = {
  title: string;
  desc: string;
  iconKey: string;
};

const iconsMap: Record<string, ReactNode> = {
 accuracy: <FaBullseye size={24} color="#fff" />,
academic: <FaGraduationCap size={24} color="#fff" />,
integrity: <FaUserShield size={24} color="#fff" />,
professional: <FaClock size={24} color="#fff" />,
growth: <FaChartLine size={24} color="#fff" />,
clarity: <FaLightbulb size={24} color="#fff" />,
collaboration: <FaHandsHelping size={24} color="#fff" />,
communication: <FaComments size={24} color="#fff" />,
inspiration: <FaRegSmileBeam size={24} color="#fff" />,

};

export default function CoreValueCard({ title, desc, iconKey }: Props) {
  const [flipped, setFlipped] = useState(false);
  const { t } = useTranslation();

  return (
    <div className={styles.flipWrapper} style={{ perspective: "1200px" }}>
      <motion.div
        className={styles.flipCard}
        initial={false}
        animate={{ rotateY: flipped ? 180 : 0 }}
        transition={{ duration: 0.65, ease: "easeInOut" }}
        style={{ transformStyle: "preserve-3d" }}
        onClick={() => setFlipped(!flipped)}
      >
        {/* Front */}
<div className={styles.front} style={{ backfaceVisibility: "hidden" }}>
<div className={styles.iconBox}>
  {iconsMap[iconKey] ?? (
    <span style={{ fontSize: "30px", color: "#fff" }}>{iconKey}</span>
  )}
</div>

          <h5 className={styles.cardTitle}>{title}</h5>

   {/* <p className={styles.frontSubtitle}>
  {t("about-us.coreValuesSection.hints.preview")}
</p> */}


          <p className={styles.hint}>
            {t("about-us.coreValuesSection.hints.flip")}
          </p>
        </div>

        {/* Back */}
        <div
          className={styles.back}
          style={{
            transform: "rotateY(180deg)",
            backfaceVisibility: "hidden"
          }}
        >
          <h6 className={styles.backTitle}>{title}</h6>
          <p className={styles.desc}>{desc}</p>
          <span className={styles.backHint}>
            {t("about-us.coreValuesSection.hints.back")}
          </span>
        </div>
      </motion.div>
    </div>
  );
}
