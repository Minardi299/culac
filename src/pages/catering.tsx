import { CATERING } from "@/lib/catering"
import { SITE } from "@/lib/site"
import { useLang, useStrings } from "@/lib/i18n"
import "./catering.css"

export default function CateringPage() {
  const lang = useLang()
  const t = useStrings()
  const data = CATERING[lang]

  return (
    <div className="page-catering">
      <div className="page-body">
        <section id="header">
          <h1>{data.title}</h1>
          <p>{data.intro}</p>
        </section>
        <div className="star">⋆</div>
        <main>
          <div className="container">
            {data.packages.map((pkg) => (
              <div key={pkg.name}>
                <div className="container-grid">
                  <img className="cater-pic" src={pkg.image} alt={pkg.name} />
                  <div>
                    <h1 className="title">{pkg.name}</h1>
                    {pkg.description && <p>{pkg.description}</p>}
                    <section id="info">
                      <hr />
                      <details>
                        <summary>{t.catering.who}</summary>
                        {" " + pkg.who}
                      </details>
                      <hr />
                      <details>
                        <summary>{t.catering.included}</summary>
                        {" " + pkg.included}
                      </details>
                      <hr />
                      <details>
                        <summary>{t.catering.price}</summary>
                        {" " + pkg.price}
                      </details>
                      <button>
                        <a href={`mailto:${SITE.email}`}>{t.catering.email}</a>
                      </button>
                    </section>
                  </div>
                </div>
              </div>
            ))}
          </div>
          <div className="star">⋆</div>
          <section className="extra">
            <h1>{data.flavours.title}</h1>
            <p className="note">{data.flavours.note}</p>
            <ul>
              {data.flavours.items.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </section>
          <section className="extra">
            <h1>{data.addOns.title}</h1>
            <ul>
              {data.addOns.items.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </section>
          <section className="extra">
            <h1>{data.policies.title}</h1>
            <div className="policies-grid">
              {data.policies.items.map((item) => (
                <div key={item.title}>
                  <h2>{item.title}</h2>
                  <p>{item.body}</p>
                </div>
              ))}
            </div>
          </section>
        </main>
      </div>
    </div>
  )
}
