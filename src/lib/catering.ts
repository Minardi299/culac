import type { Lang } from "@/lib/i18n"

export type CateringPackage = {
  name: string
  image: string
  description?: string
  who: string
  included: string
  price: string
}

// Package details come from the site's CMS, with pricing updated to the
// Spring-Summer 2026 catering deck where the two disagree.
export const CATERING: Record<
  Lang,
  {
    title: string
    intro: string
    packages: CateringPackage[]
    addOns: { title: string; items: string[] }
    flavours: { title: string; note: string; items: string[] }
    policies: { title: string; items: { title: string; body: string }[] }
  }
> = {
  fr: {
    title: "Culac à votre événement? Mais oui!",
    intro:
      "Notre plus grande passion est de partager notre passion et créations à nos ami.e.s! Laissez-nous comment on pourrait vous aider à votre prochain événement.",
    packages: [
      {
        name: "Bar à bánh mì personalisé",
        image: "/images/catering-bar.jpg",
        description:
          "Vous êtes en train de planifier votre prochain événement? Rehaussez vos événements avec notre bar à bánh mì - un ajout unique, frais et délicieux qui ne manquera pas d'impressionner vos invités !",
        who: "Mariages, événements corporatifs, plateaux de tournage de film, photos ou vidéos, porte ouverte immobilier, conventions, salon de métier,… n’importe ou que vous souhaitez!",
        included:
          "La transportation. Thés glacés et entrées disponibles comme ajouts. Nous sommes ravis aussi de travailler avec vous pour le developpement d’une saveur personalisé à votre événement!",
        price: "Contactez-nous pour une soumission!",
      },
      {
        name: "Plateau 15 mini bánh mì",
        image: "/images/catering-15-mini.jpg",
        who: "5-7 personnes (repas) ou 15 personnes (collation), anniversaires, ateliers d’entreprises, événements de résautage, événements d’associations d’étudiants",
        included:
          "15 mini bánh mì avec l’option de mélanger jusqu’à 3 saveurs",
        price: "$110+tx",
      },
      {
        name: "Plateau 20-mcx",
        image: "/images/catering-20-piece.jpg",
        who: "7-10 personnes, célébrations pour personnels, anniversaires, événements team building, conférences et conventions.",
        included:
          "20 morceaux de bánh mì (10 bánh mì coupés en deux, style buffet) avec l’option d’avoir jusqu’à deux saveurs différentes.",
        price: "$130+tx par plateau",
      },
      {
        name: "Boîtes à lunch",
        image: "/images/catering-lunchbox.png",
        description:
          "Ajoutez de l'énergie à votre journée grâce à notre service de boîtes à lunch fraîches, délicieuses et pratiques - parfaitement emballées juste pour vous!",
        who: "Dîner d’équipe, rencontres de personnels, rencontres d’associations étudiantes",
        included:
          "Un bánh mì, une salade d’entrée et un dessert de votre choix. Les pichets de thé glacé sont disponibles comme un ajout.",
        price:
          "1-10 unités: $25 par boîte ; 10-20 unités: $23 par boîte ; 20+ unités: $20 par boîte",
      },
    ],
    addOns: {
      title: "Les ajouts",
      items: [
        "Salade de mangue (v) / salade de papaye (v) — +5 $ par personne, commande minimum de 10 personnes",
        "Thé glacé maison — pêche, fruit de la passion, pandan, litchi — +3 $ par personne, commande minimum de 10 personnes",
        "Desserts — demandez-nous notre rotation actuelle",
      ],
    },
    flavours: {
      title: "Saveurs de bánh mì",
      note: "*chaque bánh mì peut devenir un bol de riz comme option sans gluten.",
      items: [
        "Flanc de porc classique",
        "Poulet miso (halal)",
        "Poulet fumé au thé lapsang (halal)",
        "Champignons rôtis aux feuilles de lime (végane)",
        "Seitan teriyaki (végane)",
        "Pleurotes aux épices jerk (végane)",
      ],
    },
    policies: {
      title: "Logistique et politiques",
      items: [
        {
          title: "Commande minimum",
          body: "Nos forfaits traiteur commencent à seulement 10 invités — accessible pour un événement de toute taille.",
        },
        {
          title: "Frais de livraison",
          body: "Les frais de livraison varient selon la distance et la taille de la commande. On vise à garder les coûts aussi bas que possible.",
        },
        {
          title: "Dépôt",
          body: "Pour les commandes de 500 $ ou moins, le paiement complet est demandé avant la livraison. Pour les commandes de plus de 500 $, on demande un dépôt de 50 %.",
        },
        {
          title: "Rabais de volume",
          body: "Nos clients économisent sur les grosses commandes : 10 % de rabais pour les commandes de plus de 70 invités.",
        },
        {
          title: "Délai de commande",
          body: "Pour les commandes de 30 personnes ou moins, on accepte un délai aussi court que 72 heures.",
        },
        {
          title: "Zone de livraison",
          body: "On livre partout dans un rayon de 10 km de notre local au centre-ville de Montréal.",
        },
        {
          title: "Facturation",
          body: "On accepte le virement bancaire, le virement Interac ou la carte de crédit à la livraison. Comme petite entreprise, on n’offre pas de termes de paiement.",
        },
        {
          title: "Commandes récurrentes",
          body: "Contactez-nous pour un rabais spécial sur les commandes récurrentes!",
        },
        {
          title: "Chef sur place",
          body: "On adore vous aider au-delà du lunch and learn traditionnel. BBQ d’été, cérémonies de reconnaissance — comptez sur nous comme votre prochain traiteur.",
        },
      ],
    },
  },
  en: {
    title: "WANT US TO CATER YOUR NEXT EVENT?",
    intro:
      "Our biggest passion is to share our passion and creations to our friends and colleagues! Let us know how we can help you at your next event.",
    packages: [
      {
        name: "Custom bánh mì bar",
        image: "/images/catering-bar.jpg",
        description:
          "Have a big event in mind? Elevate your events with our live bánh mì bar—a unique, fresh, and delicious addition that will surely impress your guests!",
        who: "Weddings, special corporate parties and events, film sets, photoshoots, videoshoots, real estate open houses, conventions, trade shows… if you need a bánh mì bar, we’ve got you.",
        included:
          "Transport to-and-from venue, all the bánh mì you need. Iced teas and appetizers are available as add-ons. We’re more than happy to develop custom flavours for your event!",
        price: "Contact us for a quote!",
      },
      {
        name: "15 mini bánh mì platter",
        image: "/images/catering-15-mini.jpg",
        who: "5-7 people, staff parties, birthday parties, team building events, conferences, networking events, student organization events",
        included:
          "15 mini bánh mì with the option to mix-and-match up to 3 flavours",
        price: "$110+tx",
      },
      {
        name: "20-piece platter",
        image: "/images/catering-20-piece.jpg",
        who: "7-10 people, staff parties, birthday parties, team building events, conferences",
        included:
          "20 pieces of bánh mì (10 bánh mì cut in half, buffet-style) with the option of mix-and-match up to 2 flavours of your choice",
        price: "$130+tx per platter",
      },
      {
        name: "Lunchbox",
        image: "/images/catering-lunchbox.png",
        description:
          "Fuel your day with our fresh, delicious, and hassle-free lunchbox service—perfectly packed just for you!",
        who: "Team lunches, staff meetings, student organization meetings",
        included:
          "One bánh mì, one appetizer salad and one dessert of your choice. Iced teas are available as an add-on",
        price:
          "1-10 units: $25 per box ; 10-20 units: $23 per box ; 20+ units: $20 per box",
      },
    ],
    addOns: {
      title: "Add-ons",
      items: [
        "Mango salad (v) / Papaya salad (v) — +$5 per person, minimum order 10 people",
        "Homemade iced tea — peach, passion fruit, pandan, lychee — +$3 per person, minimum order 10 people",
        "Desserts — ask us about our current rotation",
      ],
    },
    flavours: {
      title: "Bánh mì flavours",
      note: "*any bánh mì can be converted into a rice bowl as a gluten-free option.",
      items: [
        "Classic pork belly",
        "Miso Chicken (Halal)",
        "Lapsang Smoked Tea Chicken (Halal)",
        "Roasted Mushrooms with Lime Leaves (Vegan)",
        "Seitan Teriyaki (Vegan)",
        "Oyster Mushrooms with Jerk Spices (Vegan)",
      ],
    },
    policies: {
      title: "Logistics & policies",
      items: [
        {
          title: "Minimum order",
          body: "Our minimum order for catering packages starts at just 10 guests, making it accessible for any event size.",
        },
        {
          title: "Delivery fees",
          body: "Delivery fees vary based on distance and package size; we aim to keep costs as low as possible.",
        },
        {
          title: "Deposit",
          body: "For orders of $500 or less, we require upfront payment prior to delivery. We take a 50% deposit for orders over $500.",
        },
        {
          title: "Volume savings",
          body: "Our clients save significantly on large orders: 10% savings on orders over 70 guests.",
        },
        {
          title: "Lead time",
          body: "For orders of 30 people or less, we accept a lead time as tight as 72 hours.",
        },
        {
          title: "Delivery zone",
          body: "We deliver anywhere within a 10km radius from our store in downtown Montreal.",
        },
        {
          title: "Invoicing",
          body: "We accept wire transfer, e-transfer, or credit card upon delivery. As a small business we don’t offer payment terms.",
        },
        {
          title: "Recurring order discount",
          body: "Contact us for a special discount for recurring orders!",
        },
        {
          title: "Chef on site",
          body: "We’re delighted to help you at events beyond the traditional Lunch and Learn. Summer BBQs, staff ceremony awards — count us in as your next caterer.",
        },
      ],
    },
  },
}
