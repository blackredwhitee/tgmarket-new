/** Ссылки и общие данные сайта. */
export const BOT_URL = "https://t.me/TGMarketSellerBot?start=ref_efdc6ada3070b5c3c449961a665b3eff";
export const SUPPORT_URL = "https://t.me/tgmarket_support";
export const SUPPORT_NICK = "@tgmarket_support";
export const NEWS_URL = "https://t.me/tg_market_seller";
export const SITE_URL = "https://tgmarket.ai";

/** Ниши: slug роута, ключ данных в макете Niche (psy/exp/info/ev/don), подписи для меню. */
export const NICHES = [
  { slug: "psychologists", key: "psy", title: "Психологам и коучам" },
  { slug: "experts", key: "exp", title: "Экспертам и наставникам" },
  { slug: "infoproducts", key: "info", title: "Авторам инфопродуктов" },
  { slug: "events", key: "ev", title: "Организаторам мероприятий" },
  { slug: "donations", key: "don", title: "Авторам и блогерам (донаты)" },
  { slug: "offline", key: "off", title: "Офлайн-магазинам и мастерам" },
] as const;
export type NicheSlug = (typeof NICHES)[number]["slug"];

export const LEGAL_LINKS = [
  { href: "/legal/offer/", label: "Оферта для продавцов" },
  { href: "/legal/offer-buyers/", label: "Оферта для покупателей" },
  { href: "/legal/privacy/", label: "Политика обработки персональных данных" },
  { href: "/legal/cookies/", label: "Политика cookie" },
];
