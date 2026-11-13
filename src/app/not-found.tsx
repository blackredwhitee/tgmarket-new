import type { Metadata } from "next";
import Link from "next/link";
import mark from "@/assets/brand/tgmarket-mark.png";
import Footer from "@/components/Footer";
import { BOT_URL } from "@/lib/links";
import s from "./not-found.module.css";

export const metadata: Metadata = {
  title: "Страница не найдена — TG Market",
  description: "Возможно, ссылка устарела или в адресе опечатка.",
};

export default function NotFound() {
  return (
    <>
      <section className={`container ${s.wrap}`}>
        <div className={s.text}>
          <span className={s.mono}>ОШИБКА 404</span>
          <h1 className={s.h1}>Такой страницы нет</h1>
          <p className={s.lead}>Возможно, ссылка устарела или в адресе опечатка. Зато бот на месте.</p>
          <div className={s.btns}>
            <Link href="/" className={s.btnDark}>На главную</Link>
            <a href={BOT_URL} className={s.btn}>Открыть бота →</a>
          </div>
        </div>

        <div className={s.phone} aria-hidden="true">
          <div className={s.screen}>
            <div className={s.chatHead}>
              <img src={mark.src} alt="" width={36} height={36} />
              <div className={s.chatName}><b>TG Market</b><span>канал</span></div>
            </div>
            <div className={s.feed}>
              <div className={s.post}>
                <div className={s.cover}><span>404</span></div>
                <div className={s.postInfo}><b className={s.postTitle}>Страница не найдена</b><b className={s.price}>404 ₽</b></div>
                <div className={s.soldOut}>Нет в наличии</div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
}
