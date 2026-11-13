import type { Metadata } from "next";
import Link from "next/link";
import Footer from "@/components/Footer";
import { LEGAL_LINKS, SUPPORT_NICK, SUPPORT_URL } from "@/lib/links";
import s from "./page.module.css";

export const metadata: Metadata = {
  title: "Контакты — TG Market",
  description: "Поддержка селлеров, партнёрство и вопросы прессы. Реквизиты оператора сервиса — ООО «Открытые интеграционные сервисы».",
};

const REQ = [
  { k: "Оператор сервиса", v: "ООО «Открытые интеграционные сервисы» (ООО «ОИС»)" },
  { k: "ИНН", v: "9709074908" },
  { k: "ОГРН", v: "1217700471086" },
  { k: "Адрес", v: "109028, г. Москва, Серебряническая наб., д. 29, этаж 8, пом. II, ком. 68" },
  { k: "Телефон", v: "+7 985 368-03-25" },
  { k: "E-mail", v: "finance@talkbank.io" },
];

export default function ContactsPage() {
  return (
    <>
      <section className={`container ${s.hero}`}>
        <div className={s.heroBox}>
          <span className={s.tag}>Контакты</span>
          <h1 className={s.h1}>Связаться с TG Market</h1>
          <p className={s.lead}>Поддержка селлеров, партнёрство и вопросы прессы — выберите, куда написать.</p>
        </div>
      </section>

      <section className={`container ${s.sec}`}>
        <div className={s.grid}>
          <div className={`${s.card} ${s.coral}`}>
            <b className={s.h3}>Поддержка селлеров</b>
            <span className={s.body}>Помощь с регистрацией в боте, карточками, оплатами и выплатами. Ответим в Telegram.</span>
            <div className={s.cardActions}>
              <a href={SUPPORT_URL} className={s.btnDark}>{SUPPORT_NICK}</a>
              <Link href="/faq/" className={s.faqLink}>Сначала загляните в FAQ</Link>
            </div>
          </div>
          <div className={`${s.card} ${s.blue}`}>
            <b className={s.h3}>Партнёрство и сотрудничество</b>
            <span className={s.body}>Партнёрская программа, интеграции и совместные проекты: напишите в Telegram, передадим команде.</span>
            <Link href="/partners/" className={s.cardLink}>Партнёрская программа →</Link>
          </div>
          <div className={`${s.card} ${s.gray}`}>
            <b className={s.h3}>Пресса</b>
            <span className={s.body}>Запросы СМИ, комментарии и материалы о сервисе: напишите в Telegram, передадим команде.</span>
            <a href={SUPPORT_URL} className={s.cardLink}>Написать в Telegram →</a>
          </div>
        </div>
      </section>

      <section className={s.secGray}>
        <div className={`container ${s.secGrayIn}`}>
          <h2 className={s.h2}>Реквизиты</h2>
          <dl className={s.req}>
            {REQ.map((r) => (
              <div key={r.k} className={s.row}>
                <dt>{r.k}</dt>
                <dd className="tnum">{r.v}</dd>
              </div>
            ))}
          </dl>
          <div className={s.docs}>
            {LEGAL_LINKS.map((l) => <Link key={l.href} href={l.href}>{l.label}</Link>)}
          </div>
        </div>
      </section>

      <div className={s.spacer} />
      <Footer />
    </>
  );
}
