import type { Lang } from "@/lib/i18n"

export type Story = {
  title?: string
  heading: string
  body: string
  image: string
  flip?: boolean
}

export const STORIES: Record<Lang, Story[]> = {
  fr: [
    {
      title: "À PROPOS",
      heading:
        "Cu Lắc a ses débuts comme une série de pop-up ou on explore les frontières culinaires du bánh mì.",
      body: "Cu Lắc est une lettre d’amour à la culture de street food vietnamienne qui tient l’évolution et l’innovation à son cœur. On cherche à infuser non seulement des nouvelles saveurs et textures à nos bánh mì, mais aussi la culture et histoire des gens qui nous inspirent.",
      image: "/images/story-about.jpg",
    },
    {
      heading: "UN NOUVEAU CHAPITRE",
      body: "Voyant la demande pour nos banh mi créatifs, nous nous sommes demandés… et après ? Notre espace dans une cuisine commerciale partagée devenait rapidement trop petit, et c’est là qu’une opportunité d’ouvrir une cuisine virtuelle s’est présentée. Nous nous associons au Kaizen Manga Café, un espace de coworking au cœur du centre-ville de Montréal, pour mieux vous servir nos créations.",
      image: "/images/story-new-chapter.jpg",
      flip: true,
    },
    {
      heading: "Le Futur",
      body: "Cu Lắc ne cherche pas de réinventer le bánh mì classique. On sait qu’il faut laisser les classiques tranquilles – ils ont mérité leur statut pour une bonne raison! En infusant un peu de créativité dans la philosophie de bánh mì, on peut élargir notre définition de ce qu’il peut être. On pense à un bánh mì paneer masala avec une sauce crémeuse et pico de gallo. Ou un bánh mì bún bò Huế avec une aïoli à la lime et miettes de tempura. Cu Lắc ne reconnais pas les frontières, on reconnaît seulement de la bouffe délicieuses. Êtes-vous prêts à explorer avec nous?",
      image: "/images/story-future.jpg",
    },
  ],
  en: [
    {
      title: "ABOUT US",
      heading:
        "Cu Lắc started as a series of pop-ups where we explored the boundaries of what a bánh mì could be.",
      body: "Cu Lắc is a love letter to the bustling streets of Saigon and the constantly evolving food culture that I grew up in. Through the endless search for new flavours and a love of putting a spin on the classics, Cu Lắc introduces a new way to remix the food I love most: bánh mì.",
      image: "/images/story-about.jpg",
    },
    {
      heading: "NEW BEGINNING",
      body: "Seeing a demand for our creative bánh mì, we wondered… what’s next? We were quickly outgrowing our space at a shared commercial kitschen, and that’s when an opportunity to open a virtual kitchen appeared. We’re partnering with Kaizen Manga Café, a coworking space in the heart of downtown Montréal, to better serve you our creative bánh mì.",
      image: "/images/story-new-chapter.jpg",
      flip: true,
    },
    {
      heading: "The Future",
      body: "Cu Lắc isn’t seeking to reinvent the classic bánh mì. We all know that classics don’t need meddling – that’s sacrilegious! By simply sprinkling in some creativity to the bánh mì philosophy, we can expand the possibilities of what a bánh mì can be. Maybe it’s a paneer masala bánh mì with a creamy sauce and pico de gallo. Or a bún bò Huế brisket bánh mì with lime aioli and tempura bits. Cu Lắc knows no borders, just pure delicious food.",
      image: "/images/story-future.jpg",
    },
  ],
}

export const FAQ: Record<Lang, { q: string; a: string }[]> = {
  fr: [
    {
      q: "Combien de temps à l’avance dois-je commander?",
      a: "On adore les événements de dernière minute, mais pour vous garantir la meilleure expérience, on recommande de réserver au moins 5 jours ouvrables à l’avance. Pour les mariages ou gros événements, plus tôt c’est encore mieux!",
    },
    {
      q: "Est-ce que vous livrez?",
      a: "Oui, on livre partout à Montréal, des frais peuvent s’appliquer selon la distance. On offre également le ramassage à notre local au 1433B Rue Bishop.",
    },
    {
      q: "Est-ce qu’il y a un montant minimum de commande?",
      a: "Pour le ramassage, un plateau minimum. Pour la livraison, deux plateaux minimum. Pour notre bar à bánh mì, un minimum de 50 invités s’applique.",
    },
    {
      q: "Comment je confirme ma commande?",
      a: "Une fois votre soumission approuvée, on demande un dépôt de 50% pour bloquer la date. Le solde est payable 24h avant la livraison.",
    },
    {
      q: "Combien de temps avant d’avoir une réponse à ma demande?",
      a: "On vous répond généralement dans les 24 heures.",
    },
  ],
  en: [
    {
      q: "How far in advance should I order?",
      a: "We love last-minute events, but for the best experience, we recommend booking at least 5 business days ahead. For weddings or larger events, the earlier the better!",
    },
    {
      q: "Do you deliver?",
      a: "Yes, we deliver across Montreal (additional fees may apply). We also offer pickup at our shop, located at 1433B Rue Bishop.",
    },
    {
      q: "Is there a minimum order?",
      a: "One tray minimum for pickup, two trays minimum for delivery. For our Bánh Mì Bar, a minimum of 50 guests applies.",
    },
    {
      q: "How do I confirm my order?",
      a: "Once your quote is approved, we ask for a 50% deposit to hold your date. The remaining balance is due 24hrs before the event.",
    },
    {
      q: "How long until I hear back?",
      a: "We typically respond within 24 hours.",
    },
  ],
}
