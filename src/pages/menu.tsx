import { useState } from "react"
import { MENU, type MenuCategory, type MenuItem } from "@/lib/menu"
import { useLang, useStrings } from "@/lib/i18n"
import "./menu.css"

const TABS: MenuCategory[] = ["banhmi", "ricebowls", "appetizers", "groceries"]

function MenuList({ items }: { items: MenuItem[] }) {
  return (
    <div className="container">
      {items.map((item) => (
        <div className="menu-container" key={item.name}>
          {item.image && (
            <img className="menu-item-pic" src={item.image} alt={item.name} />
          )}
          <h2 className="title">{item.name}</h2>
          {item.price && <p className="price">{item.price}</p>}
          <p>{item.ingredients}</p>
        </div>
      ))}
    </div>
  )
}

export default function MenuPage() {
  const lang = useLang()
  const t = useStrings()
  const [tab, setTab] = useState<MenuCategory>("banhmi")

  return (
    <div className="page-menu">
      <div className="page-body">
        <h1>{t.menu.title}</h1>
        <img className="mascot" src="/images/mascot.svg" alt="" />
        <section className="menu-buttons">
          {TABS.map((key) => (
            <button
              key={key}
              className={tab === key ? "active" : undefined}
              onClick={() => setTab(key)}
            >
              {t.menu.tabs[key]}
            </button>
          ))}
        </section>
        <section className="menu-section">
          <MenuList items={MENU[lang][tab]} />
        </section>
      </div>
    </div>
  )
}
