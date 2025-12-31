import styles from "./ConvertLang.module.css";
import { useTranslation } from "react-i18next";

type Props = {
  fromKey: string;
  toKey: string;
  fromCountry: string;
  toCountry: string;
  descKey: string;
};

export default function ConvertLang({
  fromKey,
  toKey,
  fromCountry,
  toCountry,
  descKey,
}: Props) {
  const { t } = useTranslation();
 console.warn("✅ ConvertLang Props:", { fromKey, toKey, fromCountry, toCountry, descKey });
console.warn("✅ Lang Test:", t("languages.english"));


const fromLang = t(`languages.${fromKey}`, { defaultValue: fromKey });
const toLang = t(`languages.${toKey}`, { defaultValue: toKey });


  // ✅ flags من النت
  const fromFlagUrl = `https://flagcdn.com/w40/${fromCountry}.png`;
  const toFlagUrl = `https://flagcdn.com/w40/${toCountry}.png`;

  return (
    <div className={styles.langCard}>
      <div className={styles.flagsPill}>
        <img src={fromFlagUrl} className={styles.flagImg} alt={fromLang} />
        <img src={toFlagUrl} className={styles.flagImg} alt={toLang} />
      </div>

      <h3 className={styles.langTitle}>
        {fromLang} <span className={styles.arrow}>↔</span> {toLang}
      </h3>

      <p className={styles.desc}>{t(descKey)}</p>
    </div>
  );
}
