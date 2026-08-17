import { SITE } from "@/lib/site"
import { useStrings } from "@/lib/i18n"

export function Footer() {
  const t = useStrings()
  return (
    <footer className="site-footer">
      <div>
        <h5>{SITE.name}</h5>
        <p>{SITE.address}</p>
        <p>{SITE.email}</p>
        <p>{SITE.phone}</p>
      </div>
      <iframe
        title="Google Maps"
        src={SITE.mapEmbed}
        width="600"
        height="450"
        allowFullScreen
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
      />
      <div className="contact-info">
        <section>
          <h5>{t.footer.follow}</h5>
          <li>
            <a href={SITE.socials.tiktok} target="_blank" rel="noreferrer">
              TIKTOK
            </a>
          </li>
          <li>
            <a href={SITE.socials.instagram} target="_blank" rel="noreferrer">
              INSTAGRAM
            </a>
          </li>
          <li>
            <a href={SITE.socials.facebook} target="_blank" rel="noreferrer">
              FACEBOOK
            </a>
          </li>
        </section>
      </div>
    </footer>
  )
}
