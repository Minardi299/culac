import type { Config } from "@react-router/dev/config"

export default {
  appDirectory: "src",
  ssr: false,
  prerender: [
    "/",
    "/fr",
    "/fr/menu",
    "/fr/catering",
    "/fr/faq",
    "/en",
    "/en/menu",
    "/en/catering",
    "/en/faq",
  ],
} satisfies Config
