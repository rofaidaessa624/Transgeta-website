import styles from "./ConvertLang.module.css";
import { useTranslation } from "react-i18next";

type Props = {
  fromKey: string;
  toKey: string;
  fromCountry: string;
  toCountry: string;
  descKey: string; // ✅ prop الصحيح
};

export default function ConvertLang({
  fromKey,
  toKey,
  fromCountry,
  toCountry,
  descKey, // ✅ استقبليه بنفس الاسم
}: Props) {
  const { t } = useTranslation();

  // ✅ أسماء اللغات من lang object داخل json
  const fromLang = t(`lang.${fromKey}`, { defaultValue: fromKey });
  const toLang = t(`lang.${toKey}`, { defaultValue: toKey });

  // ✅ ترجمة وصف الخدمة
  const desc = t(descKey, { defaultValue: descKey });

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

      <p className={styles.desc}>{desc}</p>
    </div>
  );
}
