import { index, route, type RouteConfig } from "@react-router/dev/routes"

export default [
  route(":lang?", "layout.tsx", [
    index("pages/home.tsx"),
    route("menu", "pages/menu.tsx"),
    route("catering", "pages/catering.tsx"),
    route("faq", "pages/faq.tsx"),
    route("*", "pages/not-found.tsx"),
  ]),
] satisfies RouteConfig
