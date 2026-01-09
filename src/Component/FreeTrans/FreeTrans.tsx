import { useState } from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import { useTranslation } from "react-i18next";
import logo from "../../assets/images/abfc1ea0-56f6-47a8-b323-afbc9719c964/tr-removebg-preview (1).png";

import toast from "react-hot-toast";

/* ✅ Types */
type FormDataType = {
  name: string;
  email: string;
  mobile: string;
  source_language: string;
  target_language: string;
  file: File | null;
};

type ErrorsType = {
  name?: string;
  email?: string;
  mobile?: string;
  source_language?: string;
  target_language?: string;
  file?: string;
};

export default function FreeTrans() {
  const { t, i18n } = useTranslation();
  const isEnglish = i18n.language === "en";

  const [show, setShow] = useState(false);
  const [loading, setLoading] = useState(false);

  const [formData, setFormData] = useState<FormDataType>({
    name: "",
    email: "",
    mobile: "",
    source_language: "",
    target_language: "",
    file: null,
  });

  const [errors, setErrors] = useState<ErrorsType>({});

  // ✅ API base URL from env
  const API_URL = import.meta.env.VITE_API_URL || "https://api.transgateacd.com/api";

  const handleClose = () => {
    setShow(false);
    setErrors({});
  };

  const handleShow = () => setShow(true);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;

    if (name === "file") {
      const target = e.target as HTMLInputElement;
      const file = target.files?.[0];

      if (file) {
        // ✅ Limit file size to 10MB (بما إننا هنرفع للسيرفر)
        if (file.size > 10 * 1024 * 1024) {
          setErrors((prev) => ({
            ...prev,
            file: t("freeTrans.form.errors.fileSize") || "File must be less than 10MB",
          }));
          return;
        }

        setErrors((prev) => ({ ...prev, file: "" }));
        setFormData((prev) => ({
          ...prev,
          file,
        }));
      }
    } else {
      setFormData((prev) => ({
        ...prev,
        [name]: value,
      }));
    }
  };

  const validate = () => {
    const newErrors: ErrorsType = {};

    if (!formData.name.trim()) newErrors.name = t("freeTrans.form.errors.name");
    if (!formData.email.trim()) newErrors.email = t("freeTrans.form.errors.email");
    if (!formData.mobile.trim()) newErrors.mobile = t("freeTrans.form.errors.mobile");

    if (!formData.source_language.trim())
      newErrors.source_language =
        t("freeTrans.form.errors.source_language") || "Source language is required";

    if (!formData.target_language.trim())
      newErrors.target_language =
        t("freeTrans.form.errors.target_language") || "Target language is required";

    if (!formData.file) newErrors.file = t("freeTrans.form.errors.file");

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    // ✅ امسحي Errors قبل submit
    setErrors({});

    if (!validate()) return;

    try {
      setLoading(true);

      // ✅ Loading Toast
      const toastId = toast.loading(t("freeTrans.form.sending") || "Sending...");

      const form = new FormData();
      form.append("name", formData.name);
      form.append("email", formData.email);
      form.append("mobile", formData.mobile);
      form.append("source_language", formData.source_language);
      form.append("target_language", formData.target_language);
      form.append("file", formData.file!);

      const res = await fetch(`${API_URL}/free-translation`, {
        method: "POST",
        body: form,
        headers: {
          Accept: "application/json",
        },
      });

      const text = await res.text();
      let data: any = {};
      try {
        data = JSON.parse(text);
      } catch {
        data = { message: text };
      }

      // ✅ Backend Validation Errors (Laravel style)
      if (res.status === 422 && data?.errors) {
        setErrors(data.errors);
        toast.error(t("freeTrans.form.fixErrors") || "Please fix errors and try again", {
          id: toastId,
        });
        return;
      }

      if (!res.ok) {
        toast.error(data?.message || (t("freeTrans.form.error") || "Failed to send"), {
          id: toastId,
        });
        return;
      }

      // ✅ Success
      toast.success(t("freeTrans.form.success") || "✅ Sent successfully!", {
        id: toastId,
      });

      setFormData({
        name: "",
        email: "",
        mobile: "",
        source_language: "",
        target_language: "",
        file: null,
      });

      setErrors({});
      setShow(false);
    } catch (err: any) {
      console.log(err);
      toast.error(t("freeTrans.form.error") || "❌ Failed to send. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="freeTransContainer">
      <Button className="rounded-pill shadow" variant="primary" onClick={handleShow}>
        {t("freeTrans.btn")}
      </Button>

      <Modal show={show} centered onHide={handleClose}>
        <Modal.Header closeButton />

        <Modal.Body className={`text-center ${isEnglish ? "" : "text-end"}`}>
          <img src={logo} width={140} height={140} alt="logo" />

          <h2 className="fw-bold mt-3">{t("freeTrans.title")}</h2>
          <p className="text-muted fs-6 fw-light px-3">{t("freeTrans.subtitle")}</p>

          <form
            onSubmit={handleSubmit}
            dir={isEnglish ? "ltr" : "rtl"}
            className="mt-4 text-start"
          >
            {/* Name */}
            <div className="mb-3">
              <label className="form-label">{t("freeTrans.form.name")}</label>
              <input
                type="text"
                className={`form-control ${errors.name ? "is-invalid" : ""}`}
                name="name"
                value={formData.name}
                onChange={handleChange}
                placeholder={t("freeTrans.form.namePlaceholder")}
              />
              {errors.name && <div className="invalid-feedback">{errors.name}</div>}
            </div>

            {/* Email */}
            <div className="mb-3">
              <label className="form-label">{t("freeTrans.form.email")}</label>
              <input
                type="email"
                className={`form-control ${errors.email ? "is-invalid" : ""}`}
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder={t("freeTrans.form.emailPlaceholder")}
              />
              {errors.email && <div className="invalid-feedback">{errors.email}</div>}
            </div>

            {/* Mobile */}
            <div className="mb-3">
              <label className="form-label">{t("freeTrans.form.mobile")}</label>
              <input
                type="tel"
                className={`form-control ${errors.mobile ? "is-invalid" : ""}`}
                name="mobile"
                value={formData.mobile}
                onChange={handleChange}
                placeholder={t("freeTrans.form.mobilePlaceholder")}
              />
              {errors.mobile && <div className="invalid-feedback">{errors.mobile}</div>}
            </div>

            {/* Source Language */}
            <div className="mb-3">
              <label className="form-label">
                {t("freeTrans.form.source_language") || "Source Language"}
              </label>
              <input
                type="text"
                className={`form-control ${errors.source_language ? "is-invalid" : ""}`}
                name="source_language"
                value={formData.source_language}
                onChange={handleChange}
                placeholder={t("freeTrans.form.source_languagePlaceholder") || "مثلاً Arabic"}
              />
              {errors.source_language && (
                <div className="invalid-feedback">{errors.source_language}</div>
              )}
            </div>

            {/* Target Language */}
            <div className="mb-3">
              <label className="form-label">
                {t("freeTrans.form.target_language") || "Target Language"}
              </label>
              <input
                type="text"
                className={`form-control ${errors.target_language ? "is-invalid" : ""}`}
                name="target_language"
                value={formData.target_language}
                onChange={handleChange}
                placeholder={t("freeTrans.form.target_languagePlaceholder") || "مثلاً English"}
              />
              {errors.target_language && (
                <div className="invalid-feedback">{errors.target_language}</div>
              )}
            </div>

            {/* File */}
            <div className="mb-3">
              <label className="form-label">{t("freeTrans.form.file")}</label>
              <input
                type="file"
                name="file"
                className={`form-control ${errors.file ? "is-invalid" : ""}`}
                onChange={handleChange}
              />
              {errors.file && <div className="invalid-feedback">{errors.file}</div>}
            </div>

            <div className="d-flex justify-content-center gap-2 mt-3">
              <Button type="submit" disabled={loading}>
                {loading
                  ? t("freeTrans.form.sending") || "Sending..."
                  : t("freeTrans.form.submit")}
              </Button>

              <Button variant="secondary" onClick={handleClose}>
                {t("freeTrans.form.close")}
              </Button>
            </div>
          </form>
        </Modal.Body>
      </Modal>
    </div>
  );
}
