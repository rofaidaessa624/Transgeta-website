import styles from "./ServiceCard.module.css";

type Props = {
  img: string;
  title: string;
  bullets: string[];
  rating?: number;
  buttonText: string;
  onButtonClick?: () => void; // ✅ new
};

export default function ServiceCard({
  img,
  title,
  bullets,
  rating = 4.8,
  buttonText,
  onButtonClick,
}: Props) {
  const safeRating = Number.isFinite(rating) ? rating : 4.8;

  return (
    <div className={styles.card}>
      <div className={styles.imageWrapper}>
        <img
          src={img}
          alt={title}
          className="w-100"
          onError={(e) => (e.currentTarget.src = "/images/blogImage.jpg")}
        />
      </div>

      <div className={styles.body}>
        <h5 className={styles.title}>{title}</h5>

        <ul className={styles.list}>
          {bullets.map((item, index) => (
            <li key={index} className={styles.listItem}>
              {item}
            </li>
          ))}
        </ul>

        <div className={styles.divider} />

        <div className={styles.footer}>
          <div className={styles.ratingBox}>
            <span className={styles.ratingNumber}>{safeRating.toFixed(1)}</span>
            <span className={styles.stars}>★★★★★</span>
          </div>

          <button className={styles.button} onClick={onButtonClick}>
            {buttonText}
          </button>
        </div>
      </div>
    </div>
  );
}
