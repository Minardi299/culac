import type { Lang } from "@/lib/i18n"

export type MenuItem = {
  name: string
  ingredients: string
  price?: string
  image?: string
}

export type MenuCategory = "banhmi" | "ricebowls" | "appetizers" | "groceries"

// Names and ingredients come from the site's CMS. Prices and photos come
// from the Uber Eats store page.
export const MENU: Record<Lang, Record<MenuCategory, MenuItem[]>> = {
  fr: {
    banhmi: [
      {
        name: "BÁNH MÌ PLEUROTES AUX ÉPICES JERK (VÉGANE)",
        ingredients:
          "Pleurotes rôtis aux épices jerk, chutney de mangue et coriandre, maïs frais, mayo végane, concombre, daikon et carottes marinés, coriandre",
        price: "13 $",
      },
      {
        name: "BÁNH MÌ AU POULET LAPSANG (HALAL)",
        ingredients:
          "Poulet infusé au thé lapsang, mayo chipotle maison, réduction de soja-gingembre, concombre, daikon et carottes marinés, coriandre",
        price: "13 $",
        image: "/images/menu-lapsang-banh-mi.jpg",
      },
      {
        name: "CHAMPIGNONS ET SEITANS RÔTIS (VÉGANE)",
        ingredients:
          "Champignons et seitan rôtis aux feuilles de lime, mayo végane, daïkon et carottes mariné, concombre, coriandre",
        price: "13 $",
        image: "/images/menu-mushroom-banh-mi.jpg",
      },
      {
        name: "POULET MISO (HALAL)",
        ingredients:
          "Poulet effiloché au miso, mayo maison, daïkon et carottes mariné, concombre, coriandre",
        price: "13 $",
        image: "/images/menu-miso-banh-mi.jpg",
      },
      {
        name: "BÁNH MÌ CU LẮC CLASSIQUE",
        ingredients:
          "Flanc de porc rôti lentement dans une marinade maison, chả lụa, pâté, mayo maison, cucumber, coriandre, daïkon et carottes marinés",
        price: "13 $",
      },
    ],
    ricebowls: [
      {
        name: "BOL DE RIZ PLEUROTES RÔTIS FAÇON JERK (VÉGANE)",
        ingredients:
          "Pleurotes rôties aux épices jerk, chutney à la mangue et coriandre, maïs frais, daikon et carottes mariné, concombre, coriandre",
        price: "13 $",
      },
      {
        name: "BOL DE RIZ POULET LAPSANG FUMÉ (HALAL)",
        ingredients:
          "Riz, poulet infusé au thé lapsang, vinaigrette soja-gingembre, mayo au chipotle maison, daikon et carottes marinés, concombre, coriandre",
        price: "13 $",
      },
      {
        name: "BOL DE RIZ CHAMPIGNONS RÔTIS (VÉGANE)",
        ingredients:
          "Riz, champignons et seitan rôtis aux feuilles de lime, concombre, daikon et carottes marinés, mayo végane, coriandre",
        price: "13 $",
      },
      {
        name: "BOL DE RIZ POULET MISO (HALAL)",
        ingredients:
          "Riz, poulet effiloché, huile d’oignon vert, daikon et carottes marinés, concombre, coriandre, échalottes frites",
        price: "13 $",
        image: "/images/menu-miso-rice-bowl.jpg",
      },
      {
        name: "BOL DE RIZ PORC CLASSIQUE CU LẮC",
        ingredients:
          "Riz, flanc de porc grillé avec marinade maison, saucisse viet, pâté, mayo maison, daikon et carottes, concombre, coriandre",
        price: "13 $",
        image: "/images/menu-pork-rice-bowl.jpg",
      },
    ],
    appetizers: [
      {
        name: "DONUT",
        ingredients: "Donut",
      },
    ],
    groceries: [
      {
        name: "SA TẾ SẢ (CHILI CRISP MAISON)",
        ingredients:
          "Notre fameux chili crisp maison avec citronelle, galanghal, piment Thai, échalotte française et ail. Parfait pour un coup d'épice. Niveau 7/10.",
        price: "9 $",
        image: "/images/menu-sate.jpg",
      },
    ],
  },
  en: {
    banhmi: [
      {
        name: "BÁNH MÌ JERK OYSTER MUSHROOM (VEGAN)",
        ingredients:
          "Roasted oyster mushroom in jerk seasoning, mango and coriander chutney, fresh corn, vegan mayo, cucumber, marinated daikon and carrots, coriander",
        price: "$13",
      },
      {
        name: "BÁNH MÌ LAPSANG CHICKEN (HALAL)",
        ingredients:
          "Lapsang tea brined chicken thighs, homemade chipotle mayo, soy-ginger glaze, cucumber, marinated daikon and carrots, coriander",
        price: "$13",
        image: "/images/menu-lapsang-banh-mi.jpg",
      },
      {
        name: "ROASTED MUSHROOM AND SEITAN (VEGAN)",
        ingredients:
          "Roasted mushrooms and seitan with lime leaves, vegan mayo, marinated daikon and carrots, cucumber, coriander",
        price: "$13",
        image: "/images/menu-mushroom-banh-mi.jpg",
      },
      {
        name: "MISO CHICKEN (HALAL)",
        ingredients:
          "Shredded chicken breast, San-O miso sauce, house mayo, daikon and carrots, cucumber, coriander",
        price: "$13",
        image: "/images/menu-miso-banh-mi.jpg",
      },
      {
        name: "BÁNH MÌ CU LẮC CLASSIC",
        ingredients:
          "Slow roasted pork belly in house marinade, chả lụa, house mayo, pâté, cucumber, coriander, marinated carrots and daikon",
        price: "$13",
      },
    ],
    ricebowls: [
      {
        name: "JERK OYSTER MUSHROOM RICE BOWL (VEGAN)",
        ingredients:
          "Rice, roasted oyster mushrooms in jerk spices, mango and coriander chutney, fresh corn, marinated daikon and carrots, cucumber, coriander",
        price: "$13",
      },
      {
        name: "LAPSANG SMOKED CHICKEN RICE BOWL (HALAL)",
        ingredients:
          "Rice, lapsang tea infused chicken, soy-ginger dressing, homemade chipotle mayo, marinated daikon and carrots, cucumber, coriander",
        price: "$13",
      },
      {
        name: "ROASTED MUSHROOM RICE BOWL (VEGAN)",
        ingredients:
          "Rice, roasted mushrooms and seitan with lime leaves, cucumber, marinated daikon and carrots, vegan mayo, coriander",
        price: "$13",
      },
      {
        name: "MISO CHICKEN RICE BOWL (HALAL)",
        ingredients:
          "Rice, shredded miso chicken, green onion oil, marinated daikon and carrots, cucumber, coriander, fried shallots",
        price: "$13",
        image: "/images/menu-miso-rice-bowl.jpg",
      },
      {
        name: "CU LẮC CLASSIC PORK RICE BOWL",
        ingredients:
          "Rice, grilled pork belly in house marinade, Viet sausage, pâté, house mayo, daikon and carrots, cucumber, coriander",
        price: "$13",
        image: "/images/menu-pork-rice-bowl.jpg",
      },
    ],
    appetizers: [
      {
        name: "DONUT",
        ingredients: "Donut",
      },
    ],
    groceries: [
      {
        name: "SA TẾ SẢ (HOUSE CHILI CRISP)",
        ingredients:
          "Our famous house chili crisp with lemongrass, galangal, Thai chili, French shallots and garlic. Perfect for a kick of spice. Heat level 7/10.",
        price: "$9",
        image: "/images/menu-sate.jpg",
      },
    ],
  },
}
