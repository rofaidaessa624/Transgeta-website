import { useMemo, useState } from "react";

type BlogCardProps = {
  blogDate: string;
  blogName: string;
  blogDesc: string;
  blogImage?: string | null;
};

export default function BlogCrad({
  blogDate,
  blogName,
  blogDesc,
  blogImage,
}: BlogCardProps) {
  const [expanded, setExpanded] = useState(false);

  const imageSrc = blogImage
    ? `http://127.0.0.1:8000/files/articles/${blogImage}`
    : "/images/blogImage.jpg";

  const shouldShowReadMore = useMemo(() => {
    return (blogDesc?.trim().length ?? 0) > 220;
  }, [blogDesc]);

  return (
    <div className="card p-3 border-0 shadow rounded-0 h-100">
      <img
        src={imageSrc}
        alt={blogName}
        className="w-100"
        onError={(e) => (e.currentTarget.src = "/images/blogImage.jpg")}
      />

      <div className="card-body text-start d-flex flex-column">
        <h5 className="card-title">{blogName}</h5>

        <div className="d-flex text-secondary align-items-center my-3">
          <p className="mb-0">{blogDate}</p>
        </div>

        <p
          className="mb-2"
          style={
            expanded
              ? undefined
              : {
                  display: "-webkit-box",
                  WebkitLineClamp: 4,
                  WebkitBoxOrient: "vertical" as any,
                  overflow: "hidden",
                }
          }
        >
          {blogDesc}
        </p>

        {shouldShowReadMore && (
          <button
            type="button"
            className="btn btn-link p-0 align-self-start"
            onClick={() => setExpanded((v) => !v)}
          >
            {expanded ? "Read less" : "Read more"}
          </button>
        )}
      </div>
    </div>
  );
}
