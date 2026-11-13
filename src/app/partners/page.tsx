import type { Metadata } from "next";
import Footer from "@/components/Footer";
import { BOT_URL, SUPPORT_NICK, SUPPORT_URL } from "@/lib/links";
import HeroVisual from "./HeroVisual";
import PartnerCalc from "./PartnerCalc";
import s from "./page.module.css";

export const metadata: Metadata = {
  title: "Партнёрская программа — TG Market",
  description: "Приводите селлеров в TG Market и получайте от 0,5% до 1% с их оборота в течение первого года. Вывод в любой момент — от 1 000 ₽.",
};

const STEPS = [
  { n: "1", t: "Получите ссылку", d: "Персональная ссылка в боте: «Вывод средств» → «О реферальной программе»." },
  { n: "2", t: "Рекомендуйте TG Market", d: "Клиентам, подписчикам, коллегам, которые продают в Telegram." },
  { n: "3", t: "Получайте до 1%", d: "От 0,5% до 1% с оборота каждого приведённого селлера в течение первого года. Вывод в любой момент — от 1 000 ₽." },
];

const AUDIENCE = [
  "Агентствам и продюсерам экспертов",
  "SMM-специалистам и администраторам каналов",
  "Блогерам с аудиторией предпринимателей",
  "Селлерам TG Market, которые рекомендуют сервис коллегам",
];

export default function PartnersPage() {
  return (
    <>
      <section className={`container ${s.hero}`}>
        <div className={s.heroText}>
          <span className={s.tag}>Партнёрская программа</span>
          <h1 className={s.h1}>Приводите селлеров — получайте до 1% с их оборота</h1>
          <p className={s.lead}>От 0,5% до 1% с оборота каждого приведённого селлера в течение первого года. Ставка зависит от тарифа селлера.</p>
          <a href={BOT_URL} className={s.btn}>Стать партнёром →</a>
        </div>
        <HeroVisual />
      </section>

      <section className={s.gray}>
        <div className={`container ${s.stack}`}>
          <h2 className={s.h2}>Как это работает</h2>
          <div className={s.g3}>
            {STEPS.map((st) => (
              <div key={st.n} className={s.card}>
                <span className={s.num}>{st.n}</span>
                <b className={s.h3}>{st.t}</b>
                <span className={s.body}>{st.d}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className={`container ${s.sec}`}>
        <div className={s.split}>
          <div className={s.calcIntro}>
            <h2 className={s.h2}>Сколько можно заработать</h2>
            <p className={s.lead}>Партнёр получает десятую часть комиссии TG Market: селлер на ставке 10% — вам 1% его оборота, 8% — 0,8%, 7% — 0,7%, 5% — 0,5%.</p>
          </div>
          <PartnerCalc />
        </div>
      </section>

      <section className={s.blue}>
        <h2 className={s.h2}>Кому подходит программа</h2>
        <div className={s.g4}>
          {AUDIENCE.map((t, i) => (
            <div key={t} className={s.card}>
              <span className={s.badge}>{i + 1}</span>
              <b className={s.h3}>{t}</b>
            </div>
          ))}
        </div>
        <div className={s.ask}>
          <span>Есть вопросы? Напишите нам</span>
          <a href={SUPPORT_URL} className={s.btnDark}>{SUPPORT_NICK}</a>
        </div>
      </section>

      <div className={s.spacer} />
      <Footer title="Рекомендуйте TG Market и зарабатывайте" sub="До 1% с оборота каждого приведённого селлера — весь первый год." btn="Стать партнёром" />
    </>
  );
}
