import { FAQ } from "@/lib/home"
import { useLang, useStrings } from "@/lib/i18n"
import "./faq.css"

export default function FaqPage() {
  const lang = useLang()
  const t = useStrings()

  return (
    <div className="page-faq">
      <div className="wordpress">
        <h1>{t.faq.title}</h1>
        <div className="wp-content">
          {FAQ[lang].map((item) => (
            <p key={item.q}>
              <strong>{item.q}</strong>
              <br />
              {item.a}
            </p>
          ))}
        </div>
      </div>
    </div>
  )
}
