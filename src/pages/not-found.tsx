import { Link } from "react-router"
import { useLang, useStrings } from "@/lib/i18n"

export default function NotFoundPage() {
  const lang = useLang()
  const t = useStrings()
  return (
    <div
      style={{
        minHeight: "50vh",
        display: "grid",
        placeItems: "center",
        padding: "6rem 2rem",
        textAlign: "center",
      }}
    >
      <div>
        <h1
          style={{
            color: "var(--orange)",
            fontSize: "clamp(2rem, 3vw, 3.5rem)",
            fontWeight: 600,
            marginBottom: "1rem",
          }}
        >
          {t.notFound.title}
        </h1>
        <p style={{ marginBottom: "2rem" }}>{t.notFound.body}</p>
        <Link
          to={`/${lang}`}
          style={{
            fontFamily: "Phudu, sans-serif",
            textTransform: "uppercase",
            color: "var(--orange)",
            fontWeight: 500,
          }}
        >
          {t.notFound.home}
        </Link>
      </div>
    </div>
  )
}
