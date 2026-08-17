import { Outlet, useParams } from "react-router"
import { Footer } from "@/components/footer"
import { Navbar } from "@/components/navbar"
import { LangProvider } from "@/lib/i18n"
import NotFoundPage from "@/pages/not-found"

export default function SiteLayout() {
  const { lang } = useParams()
  const known = lang === undefined || lang === "fr" || lang === "en"
  return (
    <LangProvider lang={lang === "en" ? "en" : "fr"}>
      <Navbar />
      {known ? <Outlet /> : <NotFoundPage />}
      <Footer />
    </LangProvider>
  )
}
