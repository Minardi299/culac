import type { ReactNode } from "react"
import {
  Links,
  Meta,
  Outlet,
  Scripts,
  ScrollRestoration,
  useLocation,
} from "react-router"
import "./index.css"

export function Layout({ children }: { children: ReactNode }) {
  const { pathname } = useLocation()
  const isEn = pathname === "/en" || pathname.startsWith("/en/")
  return (
    <html lang={isEn ? "en" : "fr"}>
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>Cu Lắc Bánh Mì + Cà Phê</title>
        <meta
          name="description"
          content={
            isEn
              ? "A virtual kitchen in downtown Montréal that makes experimental and creative bánh mì."
              : "Une cuisine virtuelle au centre-ville de Montréal, spécialisée en bánh mì expérimentaux et créatifs."
          }
        />
        <link rel="icon" type="image/svg+xml" href="/favicon.svg" />
        <Meta />
        <Links />
      </head>
      <body>
        {children}
        <ScrollRestoration />
        <Scripts />
      </body>
    </html>
  )
}

export default function Root() {
  return <Outlet />
}
