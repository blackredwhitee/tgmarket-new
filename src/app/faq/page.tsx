import type { Metadata } from "next";
import Footer from "@/components/Footer";
import { SUPPORT_URL } from "@/lib/links";
import FaqBrowser from "./FaqBrowser";
import s from "./page.module.css";

export const metadata: Metadata = {
  title: "Вопросы и ответы — TG Market",
  description: "Ответы на частые вопросы о TG Market: регистрация, приём оплаты по СБП, вывод денег, комиссия, чеки и партнёрская программа.",
};

export default function FaqPage() {
  return (
    <>
      <section className={`container ${s.hero}`}>
        <span className={s.tag}>FAQ</span>
        <h1 className={s.h1}>Вопросы и ответы</h1>
      </section>
      <section className={`container ${s.bodySec}`}>
        <div className={s.body}>
          <FaqBrowser />
          <div className={s.support}>
            <div className={s.supportText}>
              <b className={s.h3}>Не нашли ответ?</b>
              <span>Напишите в поддержку — ответим в Telegram: @tgmarket_support</span>
            </div>
            <a href={SUPPORT_URL} className={s.btnDark}>Написать в поддержку</a>
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
}
