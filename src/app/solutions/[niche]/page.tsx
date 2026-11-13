import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Footer from "@/components/Footer";
import { BOT_URL, NICHES, type NicheSlug } from "@/lib/links";
import { NICHE_DATA, NICHE_FAQ } from "@/data/niches";
import ChannelPhone from "../_components/ChannelPhone";
import Faq from "../_components/Faq";
import b from "../_components/base.module.css";
import s from "./niche.module.css";

type Params = { niche: string };

export const dynamicParams = false;

export function generateStaticParams(): Params[] {
  return NICHES.map((n) => ({ niche: n.slug }));
}

const getNiche = (slug: string) => (slug in NICHE_DATA ? NICHE_DATA[slug as NicheSlug] : null);

export async function generateMetadata({ params }: { params: Promise<Params> }): Promise<Metadata> {
  const n = getNiche((await params).niche);
  if (!n) return {};
  return { title: n.metaTitle, description: n.metaDescription };
}

const HOW = [
  { t: "Пост с карточкой", d: "Обложка, описание и цена в привычном формате поста." },
  { t: "Кнопка оплаты", d: "Подписчик нажимает «Оплатить» и платит по СБП." },
  { t: "Уведомление в боте", d: "Вы сразу видите оплату, без сверки скриншотов." },
];

const FACTS = [
  { big: "СБП", t: "Привычная оплата", d: "Через приложение банка, без ввода карты." },
  { big: "1 пост", t: "И вы уже продаёте", d: "Карточка с кнопкой оплаты прямо в вашем канале." },
  { big: "от 3%", t: "Комиссия", d: "3% первым селлерам на 2 месяца, дальше шкала от 10% до 5%." },
];

export default async function NichePage({ params }: { params: Promise<Params> }) {
  const n = getNiche((await params).niche);
  if (!n) notFound();
  const first = n.cards[0];

  return (
    <>
      <section className={s.hero}>
        <div className={s.heroText}>
          <span className={b.tag}>{n.label}</span>
          <h1 className={b.h1}>{n.h1}</h1>
          <p className={b.lead}>{n.sub}</p>
          <a href={BOT_URL} className={b.btn}>Начать продавать →</a>
          <span className={s.note}>Комиссия от 3% · Оплата по СБП</span>
        </div>
        <div className={s.heroVis} aria-hidden="true">
          <img src={n.photo.src} alt="" className={s.heroImg} />
          <div className={s.heroPhone}>
            <div className={s.heroScreen}>
              <div className={s.heroHead}><img src={n.ava.src} alt="" /><b>{n.channel}</b></div>
              <div className={s.heroFeed}>
                <div className={s.heroPost}>
                  <img src={first.img.src} alt="" />
                  <div className={s.heroPostText}><b>{first.t}</b><b>{first.p}</b></div>
                  <div className={s.heroPay}>{n.btn}</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className={b.gray}>
        <div className={b.inner}>
          <h2 className={b.h2}>Знакомо?</h2>
          <div className={b.g3}>
            {n.pains.map((p) => (
              <div key={p} className={b.card}>
                <span className={s.dash} aria-hidden="true">—</span>
                <span className={s.pain}>{p}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section>
        <div className={b.inner}>
          <div className={b.split}>
            <div className={s.howCol}>
              <h2 className={b.h2}>Как это выглядит в вашем канале</h2>
              <ol className={s.howList}>
                {HOW.map((x, i) => (
                  <li key={x.t} className={s.howItem}>
                    <span className={b.num}>{i + 1}</span>
                    <div className={s.howItemText}><h3 className={b.h3}>{x.t}</h3><span className={b.body}>{x.d}</span></div>
                  </li>
                ))}
              </ol>
            </div>
            <ChannelPhone channel={n.channel} ava={n.ava} cover={first.img} title={first.t} price={first.p.includes("·") ? "500 ₽" : first.p} btn={n.btn} />
          </div>
        </div>
      </section>

      <div className={b.blueWrap}>
        <section className={b.blue}>
          <h2 className={b.h2}>Что можно продавать</h2>
          <div className={s.cards}>
            {n.cards.map((c) => (
              <div key={c.t} className={s.prod}>
                <img src={c.img.src} alt="" />
                <div className={s.prodBody}>
                  <span className={b.mono}>{n.kind}</span>
                  <h3 className={s.prodTitle}>{c.t}</h3>
                  <span className={s.prodPrice}>{c.p}</span>
                </div>
                <div className={s.prodPay}>{n.btn}</div>
              </div>
            ))}
          </div>
          <span className={s.disclaimer}>Цены — для примера.</span>
        </section>
      </div>

      <section>
        <div className={b.inner}>
          <div className={b.g3}>
            {FACTS.map((f) => (
              <div key={f.big} className={b.cardGray}>
                <b className={b.big}>{f.big}</b>
                <h3 className={b.h3}>{f.t}</h3>
                <span className={b.body}>{f.d}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section>
        <div className={b.inner}>
          <div className={b.split}>
            <h2 className={`${b.h2} ${s.faqH}`}>Вопросы</h2>
            <Faq items={NICHE_FAQ} />
          </div>
        </div>
      </section>

      <Footer title={n.fin} sub="Регистрация в боте, первая карточка — и можно публиковать." btn="Начать продавать" />
    </>
  );
}
