import type { Metadata } from "next";
import Link from "next/link";
import Footer from "@/components/Footer";
import { NICHE_LIST } from "@/data/niches";
import b from "./_components/base.module.css";
import s from "./solutions.module.css";

export const metadata: Metadata = {
  title: "Решения для вашей ниши — TG Market",
  description: "Психологам, экспертам, авторам инфопродуктов, организаторам мероприятий и блогерам: как продавать в Telegram-канале с оплатой по СБП.",
};

export default function SolutionsPage() {
  return (
    <>
      <section className={s.hero}>
        <div className={s.heroBox}>
          <span className={b.tag}>Решения</span>
          <h1 className={b.h1}>Решения для вашей ниши</h1>
          <p className={b.lead}>Выберите, что вы продаёте, — покажем, как это выглядит в канале и как подписчик платит по СБП.</p>
        </div>
      </section>

      <section className={s.list}>
        {NICHE_LIST.map((n, i) => (
          <Link key={n.slug} href={`/solutions/${n.slug}/`} className={s.item} style={{ background: n.listBg }}>
            <img src={n.photo.src} alt="" className={s.img} />
            <div className={s.text}>
              <span className={b.mono}>0{i + 1} · {n.listKind}</span>
              <h2 className={s.title}>{n.label}</h2>
              <span className={b.body}>{n.sub}</span>
              <span className={s.more}>Смотреть решение →</span>
            </div>
          </Link>
        ))}
      </section>

      <Footer />
    </>
  );
}
