import { Link } from "react-router"
import { InstagramCarousel } from "@/components/instagram"
import { STORIES } from "@/lib/home"
import { useLang, useStrings } from "@/lib/i18n"
import "./home.css"

export default function HomePage() {
  const lang = useLang()
  const t = useStrings()
  const stories = STORIES[lang]

  return (
    <div className="page-home">
      <section className="intro">
        <div className="intro-content">
          <img
            className="main-logo"
            src="/images/main-logo.svg"
            alt="Cu Lắc Bánh Mì + Cà Phê"
          />
          <h1>{t.home.tagline}</h1>
        </div>
        <div className="intro-pic-container">
          <img className="intro-pic" src="/images/intro-pic.png" alt="" />
        </div>
      </section>
      <div className="text-slider">
        <div className="text-slider-content">
          {Array.from({ length: 11 }, (_, i) => (
            <span key={i}>{t.home.slider}</span>
          ))}
        </div>
      </div>
      <div className="page-body">
        <div className="star">⋆</div>
        {stories.map((story) => (
          <div
            key={story.heading}
            className={story.flip ? "story story-flip" : "story"}
          >
            {story.title && <h1>{story.title}</h1>}
            <div className="wp-content">
              <figure>
                <img src={story.image} alt="" />
              </figure>
              <div>
                <h2>{story.heading}</h2>
                <p>{story.body}</p>
              </div>
            </div>
          </div>
        ))}
        <section id="explore">
          <svg viewBox="0 0 1000 320" aria-hidden="true">
            <path id="curve" d="M 0 320C 200 20 800 20 1000 320"></path>
            <text>
              <textPath href="#curve" startOffset="50%" textAnchor="middle">
                {" " + t.home.explore + " "}
              </textPath>
            </text>
          </svg>
          <div className="banhmi-div">
            <img className="banhmi" src="/images/banhmi.svg" alt="" />
          </div>
          <button>
            <Link to={`/${lang}/menu`} className="see-menu">
              {t.home.seeMenu}
            </Link>
          </button>
        </section>
        <InstagramCarousel />
        <div className="star">⋆</div>
      </div>
    </div>
  )
}
