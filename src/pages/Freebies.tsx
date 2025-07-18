import { useState } from "react";
import { useTranslation } from "react-i18next";

export default function Freebies() {
  const { t } = useTranslation();
  const [form, setForm] = useState({ name: "", email: "" });
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState("");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
    setError("");
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!form.name.trim() || !form.email.trim()) {
      setError(t("enterNameEmail"));
      return;
    }
    // Simple email validation
    if (!/^[^@\s]+@[^@\s]+\.[^@\s]+$/.test(form.email)) {
      setError(t("validEmail"));
      return;
    }
    setSubmitted(true);
  };

  return (
    <>
      <a
        href="#freebies-main"
        className="sr-only focus:not-sr-only absolute left-2 top-2 bg-blue-100 text-blue-900 px-2 py-1 rounded z-50"
      >
        {t("skipToFreebies")}
      </a>
      <div className="flex flex-col items-center justify-center min-h-[80vh] bg-gray-50 dark:bg-gray-900 p-2 sm:p-4">
        <div
          id="freebies-main"
          className="w-full max-w-md sm:max-w-lg md:max-w-xl bg-white dark:bg-gray-800 rounded-lg shadow-lg p-4 sm:p-6"
          role="region"
          aria-label={t("freebiesTitle")}
        >
          <h2 className="text-xl sm:text-2xl font-bold mb-2">
            🎁 {t("freebiesTitle")}
          </h2>
          <p className="mb-4 text-gray-600 dark:text-gray-300 text-sm sm:text-base">
            {t("freebiesDesc")}
          </p>
          {submitted ? (
            <div
              className="bg-green-100 text-green-800 p-3 sm:p-4 rounded mb-4 text-sm sm:text-base"
              role="status"
              aria-live="polite"
            >
              {t("freebiesThankYou")}
            </div>
          ) : (
            <form
              className="space-y-2 sm:space-y-3 mb-6"
              onSubmit={handleSubmit}
              aria-label={t("leadCaptureForm")}
            >
              <div>
                <label
                  htmlFor="name"
                  className="block text-xs sm:text-sm font-medium mb-1"
                >
                  {t("name")}
                </label>
                <input
                  id="name"
                  name="name"
                  type="text"
                  className="w-full rounded border px-2 sm:px-3 py-2 text-xs sm:text-sm focus:outline-none focus:ring focus:border-blue-400 dark:bg-gray-900 dark:text-gray-100"
                  value={form.name}
                  onChange={handleChange}
                  required
                  autoComplete="name"
                  aria-label={t("name")}
                />
              </div>
              <div>
                <label
                  htmlFor="email"
                  className="block text-xs sm:text-sm font-medium mb-1"
                >
                  {t("email")}
                </label>
                <input
                  id="email"
                  name="email"
                  type="email"
                  className="w-full rounded border px-2 sm:px-3 py-2 text-xs sm:text-sm focus:outline-none focus:ring focus:border-blue-400 dark:bg-gray-900 dark:text-gray-100"
                  value={form.email}
                  onChange={handleChange}
                  required
                  autoComplete="email"
                  aria-label={t("email")}
                />
              </div>
              {error && (
                <div className="text-red-600 text-xs sm:text-sm" role="alert">
                  {error}
                </div>
              )}
              <button
                type="submit"
                className="w-full bg-blue-500 hover:bg-blue-600 text-white px-3 sm:px-4 py-2 rounded disabled:opacity-50 text-xs sm:text-sm"
                disabled={!form.name.trim() || !form.email.trim()}
                aria-label={t("getFreebies")}
              >
                {t("getFreebies")}
              </button>
            </form>
          )}
          <div role="region" aria-label={t("availableDownloads")}>
            <h3 className="text-base sm:text-lg font-semibold mb-2">
              {t("availableDownloads")}
            </h3>
            <ul className="space-y-2">
              <li className="flex items-center gap-2">
                <span className="inline-block w-6 h-6 bg-blue-100 text-blue-600 rounded-full flex items-center justify-center text-xs sm:text-sm">
                  PDF
                </span>
                <span className="text-xs sm:text-sm">{t("sampleResume")}</span>
                <button
                  className="ml-auto text-blue-500 hover:underline"
                  disabled={!submitted}
                  aria-disabled={!submitted}
                  aria-label={t("download")}
                >
                  {t("download")}
                </button>
              </li>
              <li className="flex items-center gap-2">
                <span className="inline-block w-6 h-6 bg-green-100 text-green-600 rounded-full flex items-center justify-center text-xs sm:text-sm">
                  DOCX
                </span>
                <span className="text-xs sm:text-sm">{t("coverLetter")}</span>
                <button
                  className="ml-auto text-blue-500 hover:underline"
                  disabled={!submitted}
                  aria-disabled={!submitted}
                  aria-label={t("download")}
                >
                  {t("download")}
                </button>
              </li>
              {/* Add more resources as needed */}
            </ul>
            {!submitted && (
              <div className="text-xs text-gray-400 mt-2">
                {t("unlockDownloads")}
              </div>
            )}
          </div>
        </div>
      </div>
    </>
  );
}
