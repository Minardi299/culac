import { useState } from "react"
import { Link } from "react-router"
import { useLang, useStrings } from "@/lib/i18n"
import { SITE } from "@/lib/site"

export function Navbar() {
  const lang = useLang()
  const t = useStrings()
  const base = `/${lang}`
  const otherBase = lang === "fr" ? "/en" : "/fr"
  const [open, setOpen] = useState(false)
  const close = () => setOpen(false)

  return (
    <header className="site-header">
      <nav className="nav-mobile">
        <Link to={base}>
          <img className="nav-logo" src="/images/nav-logo.svg" alt="Cu Lắc" />
        </Link>
        <Link to={otherBase}>
          <button id="en-btn">{t.nav.langButton}</button>
        </Link>
        <button
          className="hamburger"
          aria-label={t.nav.menu}
          onClick={() => setOpen(true)}
        >
          <i className="menuIcon material-icons">menu</i>
        </button>
      </nav>
      {open && (
        <aside className="mobile-nav-page">
          <button className="close-btn" onClick={close}>
            ✕
          </button>
          <nav>
            <Link to={`${base}/menu`} onClick={close}>
              {t.nav.mobileMenu}
            </Link>
            <Link to={`${base}/catering`} onClick={close}>
              {t.nav.mobileCatering}
            </Link>
            <Link to={`${base}/faq`} onClick={close}>
              {t.nav.mobileFaq}
            </Link>
            <a href={SITE.orderUrl} target="_blank" rel="noreferrer">
              {t.nav.order}
            </a>
          </nav>
        </aside>
      )}
      <nav className="nav-desktop">
        <ul className="nav-links-left">
          <Link to={base}>
            <img className="nav-logo" src="/images/nav-logo.svg" alt="Cu Lắc" />
          </Link>
          <li>
            <Link to={`${base}/menu`}>{t.nav.menu}</Link>
          </li>
          <li>
            <Link to={`${base}/catering`}>{t.nav.catering}</Link>
          </li>
          <li>
            <Link to={`${base}/faq`}>{t.nav.faq}</Link>
          </li>
        </ul>
        <ul className="nav-links-right">
          <li id="order-btn">
            <a href={SITE.orderUrl} target="_blank" rel="noreferrer">
              {t.nav.order}
            </a>
          </li>
          <li>
            <Link to={otherBase}>
              <button id="en-btn">{t.nav.langButton}</button>
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  )
}
