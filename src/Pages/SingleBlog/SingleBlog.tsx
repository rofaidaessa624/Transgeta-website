import { useEffect, useMemo, useState } from "react";
import { Link, useParams } from "react-router-dom";
import Breadcrumb from "../../Component/Breadcrumb/Breadcrumb";
import { useTranslation } from "react-i18next";
import styles from "./SingleBlog.module.css";

import {
  FaFacebookF,
  FaInstagram,
  FaWhatsapp,
  FaTelegramPlane,
} from "react-icons/fa";

type Article = {
  id: number;
  title_ar: string;
  title_en: string;
  summary_ar: string;
  summary_en: string;
  body_ar: string;
  body_en: string;
  image_url: string | null;
  published_at: string;
};

type RelatedArticle = {
  id: number;
  title_ar: string;
  title_en: string;
  summary_ar: string;
  summary_en: string;
  image_url: string | null;
  published_at: string;
};

const BASE_URL = "http://127.0.0.1:8000";
const FALLBACK_IMG = "/images/blogImage.jpg";
const RELATED_LIMIT = 3;

/* ✅ Helpers */
function normalizeText(text: string) {
  return text.replace(/\r\n/g, "\n").replace(/\r/g, "\n").trim();
}

function renderRichBody(body: string) {
  const lines = normalizeText(body).split("\n");

  const nodes: JSX.Element[] = [];
  let paragraph: string[] = [];
  let listItems: string[] = [];

  const flushParagraph = () => {
    const txt = paragraph.join(" ").trim();
    if (txt) nodes.push(<p key={`p-${nodes.length}`}>{txt}</p>);
    paragraph = [];
  };

  const flushList = () => {
    if (listItems.length) {
      nodes.push(
        <ul key={`ul-${nodes.length}`}>
          {listItems.map((li, idx) => (
            <li key={idx}>{li}</li>
          ))}
        </ul>
      );
      listItems = [];
    }
  };

  const isH2 = (line: string) =>
    /^\d+\.\s+/.test(line) ||
    /^Conclusion\s*:/.test(line) ||
    /^Conclusion\b/.test(line) ||
    /^الخلاصة\s*:/.test(line);

  const isBullet = (line: string) => /^[-•]\s+/.test(line);

  const isH3 = (line: string) =>
    /:\s*$/.test(line) &&
    !isH2(line) &&
    !isBullet(line) &&
    line.length < 120;

  for (const rawLine of lines) {
    const line = rawLine.trim();

    // empty => break blocks
    if (!line) {
      flushList();
      flushParagraph();
      continue;
    }

    // H2
    if (isH2(line)) {
      flushList();
      flushParagraph();
      nodes.push(<h2 key={`h2-${nodes.length}`}>{line}</h2>);
      continue;
    }

    // H3
    if (isH3(line)) {
      flushList();
      flushParagraph();
      nodes.push(<h3 key={`h3-${nodes.length}`}>{line}</h3>);
      continue;
    }

    // bullets
    if (isBullet(line)) {
      flushParagraph();
      listItems.push(line.replace(/^[-•]\s+/, "").trim());
      continue;
    }

    // normal text
    flushList();
    paragraph.push(line);
  }

  flushList();
  flushParagraph();

  return nodes;
}

export default function SingleBlog() {
  const { id } = useParams<{ id: string }>();
  const { t, i18n } = useTranslation();
  const isArabic = i18n.language === "ar";

  const [article, setArticle] = useState<Article | null>(null);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string>("");

  const [related, setRelated] = useState<RelatedArticle[]>([]);
  const [relatedLoading, setRelatedLoading] = useState(false);

  // ✅ Fetch article
  useEffect(() => {
    async function fetchArticle() {
      if (!id) return;

      try {
        setLoading(true);
        setError("");

        const res = await fetch(`${BASE_URL}/api/articles/${id}`, {
          headers: { Accept: "application/json" },
        });

        if (!res.ok) throw new Error("Failed to fetch article");

        const json = await res.json();

        if (!json.success || !json.data) {
          throw new Error("Invalid API response");
        }

        setArticle(json.data);
      } catch (e) {
        console.error("Fetch Article Error:", e);
        setError(t("article.single.error"));
      } finally {
        setLoading(false);
      }
    }

    fetchArticle();
  }, [id, t]);

  // ✅ Fetch related posts
  useEffect(() => {
    async function fetchRelated() {
      if (!id) return;

      try {
        setRelatedLoading(true);

        const res = await fetch(`${BASE_URL}/api/articles`, {
          headers: { Accept: "application/json" },
        });

        if (!res.ok) throw new Error("Failed to fetch related articles");

        const json = await res.json();
        if (!json.success || !json.data) return;

        const all: RelatedArticle[] = json.data;

        const filtered = all
          .filter((a) => String(a.id) !== String(id))
          .slice(0, RELATED_LIMIT);

        setRelated(filtered);
      } catch (err) {
        console.error("Related fetch error:", err);
      } finally {
        setRelatedLoading(false);
      }
    }

    fetchRelated();
  }, [id]);

  const title = isArabic ? article?.title_ar : article?.title_en;
  const summary = isArabic ? article?.summary_ar : article?.summary_en;
  const body = isArabic ? article?.body_ar : article?.body_en;

  const imageSrc = article?.image_url
    ? `${BASE_URL}/files/articles/${article.image_url}`
    : FALLBACK_IMG;

  const richBody = useMemo(() => {
    if (!body) return null;
    return renderRichBody(body);
  }, [body]);

  return (
    <>
      <Breadcrumb pageName={t("article.single.pageName")} />

      <section className={`${styles.section} py-5`}>
        <div className={`container ${isArabic ? styles.rtl : ""}`}>
          {/* ✅ Loading */}
          {loading && (
            <div className={styles.loadingBox}>
              <div className={styles.loader}></div>
              <p>{t("article.single.loading")}</p>
            </div>
          )}

          {/* ✅ Error */}
          {!loading && error && (
            <div className={styles.errorBox}>
              <h3>{t("article.single.somethingWrong")}</h3>
              <p>{error}</p>
            </div>
          )}

          {/* ✅ Article */}
          {!loading && !error && article && (
            <div className={styles.postWrapper}>
              {/* ✅ Cover */}
              <div className={styles.cover}>
                <img
                  src={imageSrc}
                  alt={title || "Article"}
                  onError={(e) => {
                    (e.currentTarget as HTMLImageElement).src = FALLBACK_IMG;
                  }}
                />
              </div>

              {/* ✅ Share Row */}
              <div className={styles.shareRow}>
                <span className={styles.shareText}>
                  {t("article.single.share")}
                </span>
                <div className={styles.shareIcons}>
                  <a className={styles.iconBtn} href="#" aria-label="Facebook">
                    <FaFacebookF />
                  </a>
                  <a className={styles.iconBtn} href="#" aria-label="Instagram">
                    <FaInstagram />
                  </a>
                  <a className={styles.iconBtn} href="#" aria-label="WhatsApp">
                    <FaWhatsapp />
                  </a>
                  <a className={styles.iconBtn} href="#" aria-label="Telegram">
                    <FaTelegramPlane />
                  </a>
                </div>
              </div>

              {/* ✅ Content Card */}
              <article className={styles.articleCard}>
                <p className={styles.date}>
                  {new Date(article.published_at).toLocaleDateString(
                    isArabic ? "ar-EG" : "en-US",
                    { year: "numeric", month: "long", day: "numeric" }
                  )}
                </p>

                <h1 className={styles.title}>{title}</h1>

                {summary && <p className={styles.summary}>{summary}</p>}

                <div className={`${styles.content} ${styles.contentLine}`}>
                  {richBody ? (
                    richBody
                  ) : (
                    <p className="text-muted">{t("article.single.noContent")}</p>
                  )}
                </div>
              </article>

              {/* ✅ Related Posts */}
              {/* <div className={`${styles.relatedSection} ${isArabic ? styles.rtl : ""}`}>
                <h2 className={styles.relatedTitle}>
                  {t("article.single.relatedTitle")}
                </h2>

                {relatedLoading ? (
                  <p className="text-muted text-center">
                    {t("article.single.relatedLoading")}
                  </p>
                ) : related.length === 0 ? (
                  <p className="text-muted text-center">
                    {t("article.single.noRelated")}
                  </p>
                ) : (
                  <div className="row g-4">
                    {related.map((post) => {
                      const relatedTitle = isArabic ? post.title_ar : post.title_en;
                      const relatedSummary = isArabic
                        ? post.summary_ar
                        : post.summary_en;

                      const relatedImg = post.image_url
                        ? `${BASE_URL}/files/articles/${post.image_url}`
                        : FALLBACK_IMG;

                      return (
                        <div className="col-lg-4 col-md-6 col-12" key={post.id}>
                          <Link to={`/blog/${post.id}`} className={styles.relatedCard}>
                            <div className={styles.relatedImg}>
                              <img
                                src={relatedImg}
                                alt={relatedTitle}
                                onError={(e) => {
                                  (e.currentTarget as HTMLImageElement).src = FALLBACK_IMG;
                                }}
                              />
                            </div>

                            <div className={styles.relatedContent}>
                              <h5 className={styles.relatedPostTitle}>
                                {relatedTitle}
                              </h5>

                              <p className={styles.relatedDate}>
                                {new Date(post.published_at).toLocaleDateString(
                                  isArabic ? "ar-EG" : "en-US",
                                  { year: "numeric", month: "long", day: "numeric" }
                                )}
                              </p>

                              <p className={styles.relatedSummary}>
                                {relatedSummary?.length > 95
                                  ? relatedSummary.slice(0, 95) + "..."
                                  : relatedSummary}
                              </p>
                            </div>
                          </Link>
                        </div>
                      );
                    })}
                  </div>
                )}
              </div> */}
            </div>
          )}
        </div>
      </section>
    </>
  );
}
