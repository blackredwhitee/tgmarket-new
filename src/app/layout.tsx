import type { Metadata, Viewport } from "next";
import Header from "@/components/Header";
import CookieBanner from "@/components/CookieBanner";
import StickyCta from "@/components/StickyCta";
import { SITE_URL } from "@/lib/links";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: "TG Market — продажи и приём оплаты по СБП прямо в Telegram",
  description: "Создайте карточку товара в боте, опубликуйте её в своём канале и принимайте оплату по СБП. Без сайта и кассы. Комиссия от 3%.",
  icons: { icon: "/favicon.png" },
  robots: { index: false, follow: false },
};
export const viewport: Viewport = { width: "device-width", initialScale: 1, themeColor: "#ffffff" };

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="ru">
      <body>
        <Header />
        <main>{children}</main>
        <CookieBanner />
        <StickyCta />
      </body>
    </html>
  );
}
