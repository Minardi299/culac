import { useEffect } from "react"
import { SITE } from "@/lib/site"

declare global {
  interface Window {
    instgrm?: { Embeds: { process: () => void } }
  }
}

export function InstagramCarousel() {
  useEffect(() => {
    if (window.instgrm) {
      window.instgrm.Embeds.process()
      return
    }
    const script = document.createElement("script")
    script.src = "https://www.instagram.com/embed.js"
    script.async = true
    script.onload = () => window.instgrm?.Embeds.process()
    document.body.appendChild(script)
  }, [])

  return (
    <div className="instagram-carousel">
      {SITE.instagramPosts.map((url) => (
        <div className="carousel-item" key={url}>
          <blockquote
            className="instagram-media"
            data-instgrm-captioned
            data-instgrm-permalink={`${url}?utm_source=ig_embed&utm_campaign=loading`}
            data-instgrm-version="14"
          >
            <a href={url} target="_blank" rel="noreferrer">
              {url}
            </a>
          </blockquote>
        </div>
      ))}
    </div>
  )
}
