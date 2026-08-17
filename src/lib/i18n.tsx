import { createContext, useContext, type ReactNode } from "react"

export type Lang = "fr" | "en"

export const STRINGS = {
  fr: {
    nav: {
      menu: "Menu",
      catering: "Service de traiteur",
      faq: "FAQ",
      mobileMenu: "Notre menu",
      mobileCatering: "Service de traiteur",
      mobileFaq: "FAQ",
      order: "Commander en ligne",
      langButton: "EN",
    },
    home: {
      tagline:
        "Nous sommes une cuisine virtuelle spécialisée en bánh mì expérimentaux et créatifs.",
      slider: "nous sommes situé dans kaizen manga café",
      explore: "Êtes-vous prêts à explorer?",
      seeMenu: "voir notre menu",
    },
    menu: {
      title: "Notre menu",
      tabs: {
        banhmi: "BÁNH MÌ",
        ricebowls: "BOL DE RIZ",
        appetizers: "Entrées",
        groceries: "Épicerie",
      },
    },
    catering: {
      who: "Pour qui?",
      included: "Qu’est-ce qui est compris?",
      price: "Le prix?",
      email: "Écrivez-nous !",
    },
    faq: { title: "Questions fréquentes" },
    footer: { follow: "SUIVEZ-NOUS!" },
    notFound: {
      title: "Page introuvable",
      body: "Cette page n’existe pas.",
      home: "retour à l’accueil",
    },
  },
  en: {
    nav: {
      menu: "Menu",
      catering: "Catering",
      faq: "FAQ",
      mobileMenu: "Our menu",
      mobileCatering: "Catering",
      mobileFaq: "FAQ",
      order: "Order online",
      langButton: "FR",
    },
    home: {
      tagline:
        "WE ARE A VIRTUAL KITCHEN CONCEPT SPECIALIZING IN EXPERIMENTAL BANH MI",
      slider: "WE ARE LOCATED INSIDE KAIZEN MANGA CAFE",
      explore: "Are you ready to explore?",
      seeMenu: "see our menu",
    },
    menu: {
      title: "Our menu",
      tabs: {
        banhmi: "BÁNH MÌ",
        ricebowls: "RICE BOWLS",
        appetizers: "APPETIZERS",
        groceries: "GROCERIES",
      },
    },
    catering: {
      who: "Who is this for?",
      included: "What's included?",
      price: "Price?",
      email: "Send us a message!",
    },
    faq: { title: "FAQ" },
    footer: { follow: "SUIVEZ-NOUS!" },
    notFound: {
      title: "Page not found",
      body: "This page does not exist.",
      home: "back to home",
    },
  },
} as const

const LangContext = createContext<Lang>("fr")

export function LangProvider({
  lang,
  children,
}: {
  lang: Lang
  children: ReactNode
}) {
  return <LangContext.Provider value={lang}>{children}</LangContext.Provider>
}

export function useLang(): Lang {
  return useContext(LangContext)
}

export function useStrings() {
  return STRINGS[useLang()]
}
