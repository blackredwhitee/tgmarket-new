import Link from "next/link";
import logo from "@/assets/brand/tgmarket-logo.svg";
import Qr from "./Qr";
import { BOT_URL, LEGAL_LINKS, NEWS_URL, NICHES } from "@/lib/links";
import s from "./Footer.module.css";

type Props = { title?: string; sub?: string; btn?: string };

/** Финальный CTA-блок (тёмная плашка с QR на десктопе) + футер. Заголовок меняется под страницу. */
export default function Footer({
  title = "Откройте продажи в своём канале сегодня",
  sub = "Регистрация в боте, первая карточка — и можно публиковать.",
  btn = "Начать продавать",
}: Props) {
  return (
    <>
      <section className={s.cta}>
        <div className={s.ctaText}>
          <h2 className={s.ctaH}>{title}</h2>
          <p className={s.ctaSub}>{sub}</p>
          <div className={s.checks}><span>✓ Оплата по СБП</span><span>✓ Без сайта и кассы</span><span>✓ Самозанятые, ИП, юрлица</span></div>
          <a href={BOT_URL} className={s.ctaBtn}>{btn} →</a>
        </div>
        <div className={s.qr}>
          <Qr size={168} pad={14} radius={20} />
          <span>Откройте бота с телефона</span>
        </div>
      </section>
      <footer className={s.foot}>
        <div className={s.top}>
          <div className={s.brand}>
            <img src={logo.src} alt="TG Market" width={160} height={26} />
            <span>Продажи и приём оплаты по СБП прямо в Telegram</span>
            <a href={BOT_URL} className={s.botBtn}>Открыть бота</a>
          </div>
          <div className={s.cols}>
            <div><b>Продукт</b><Link href="/how-it-works/">Как это работает</Link><Link href="/pricing/">Тарифы</Link><Link href="/faq/">FAQ</Link></div>
            <div><b>Решения</b>{NICHES.map((n) => <Link key={n.slug} href={`/solutions/${n.slug}/`}>{n.title.replace(" (донаты)", "")}</Link>)}</div>
            <div><b>Партнёрам</b><Link href="/partners/">Партнёрская программа</Link></div>
            <div><b>Компания</b><Link href="/contacts/">Контакты</Link><Link href="/legal/offer/">Документы</Link><a href={NEWS_URL}>Новости в Telegram</a></div>
          </div>
        </div>
        <div className={s.bottom}>
          <span>© ООО «ОИС»</span>
          <span className={s.legal}>{LEGAL_LINKS.map((l) => <Link key={l.href} href={l.href}>{l.label}</Link>)}</span>
        </div>
      </footer>
    </>
  );
}
