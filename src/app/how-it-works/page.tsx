import type { Metadata } from "next";
import Link from "next/link";
import Footer from "@/components/Footer";
import { BOT_URL } from "@/lib/links";
import hall from "@/assets/photos/pexels-1708936.jpg";
import Steps from "./Steps";
import s from "./how.module.css";

export const metadata: Metadata = {
  title: "Как начать продавать в Telegram — TG Market",
  description: "6 шагов от регистрации до первой оплаты: запустите бота, создайте карточку, опубликуйте её в канале и принимайте оплату по СБП.",
};

export default function HowItWorksPage() {
  return (
    <>
      <section className={s.hero}>
        <div className={s.heroBox}>
          <span className={s.tag}>6 шагов · один бот</span>
          <h1 className={s.h1}>Как начать продавать в Telegram</h1>
          <p className={s.lead}>От регистрации до первой оплаты — всё в одном боте.</p>
          <a href={BOT_URL} className={s.btn}>Открыть бота →</a>
        </div>
      </section>

      <section className={s.gray}>
        <div className={s.inner}>
          <Steps />
        </div>
      </section>

      <section>
        <div className={s.inner}>
          <div className={s.headGroup}>
            <h2 className={s.h2}>Что видит ваш покупатель</h2>
            <p className={s.lead}>Покупатель платит в официальном боте TG Market Pay — по СБП через приложение своего банка.</p>
          </div>
          <div className={s.g3}>
            <div className={s.cardGray}>
              <div className={s.mock} aria-hidden="true">
                <div className={s.post}>
                  <img src={hall.src} alt="" />
                  <div className={s.postText}><b>Лекция в субботу</b> · 1 900 ₽</div>
                  <div className={s.payLink}>Оплатить</div>
                </div>
              </div>
              <span className={s.num}>1</span>
              <span className={s.body}>Видит пост с карточкой в канале и нажимает «Оплатить».</span>
            </div>
            <div className={s.cardGray}>
              <div className={s.mock} aria-hidden="true">
                <div className={s.payHead}><b>TG Market Pay</b><span>1 900 ₽</span></div>
                <span className={s.bank}>Сбербанк</span>
                <span className={s.bank}>Т-Банк</span>
                <span className={s.bank}>Альфа-Банк</span>
              </div>
              <span className={s.num}>2</span>
              <span className={s.body}>Выбирает банк и подтверждает оплату по СБП.</span>
            </div>
            <div className={s.cardGray}>
              <div className={s.mock} aria-hidden="true">
                <div className={s.done}>
                  <div className={s.ticketQr} />
                  <div className={s.doneText}><b>Оплата прошла</b><span>Ваш билет · QR-код</span><span className={s.muted}>Чек отправлен</span></div>
                </div>
              </div>
              <span className={s.num}>3</span>
              <span className={s.body}>Получает подтверждение и покупку: цифровой товар — ссылкой, билет — QR-кодом.</span>
            </div>
          </div>
        </div>
      </section>

      <div className={s.blueWrap}>
        <section className={s.blue}>
          <h2 className={s.h2}>Деньги и документы</h2>
          <div className={s.g3}>
            <div className={s.card}>
              <h3 className={s.h3}>Когда приходят деньги</h3>
              <span className={s.body}>До 3 рабочих дней по СБП на подтверждённый номер телефона, а после подключения компании — на её реквизиты. Минимальная сумма вывода — 1 000 ₽.</span>
            </div>
            <div className={s.card}>
              <h3 className={s.h3}>Комиссия</h3>
              <span className={s.body}>Удерживается с оборота по тарифу.</span>
              <Link href="/pricing/" className={s.more}>Подробнее о тарифах →</Link>
            </div>
            <div className={s.card}>
              <h3 className={s.h3}>Чеки и налоги</h3>
              <span className={s.body}>Касса наша: для ИП и юрлиц чеки формируются автоматически и уходят в ОФД. Самозанятые выдают чеки в «Мой налог» сами.</span>
            </div>
          </div>
        </section>
      </div>

      <div className={s.spacer} />
      <Footer
        title="Готовы попробовать?"
        sub="Откройте бота, создайте первую карточку и опубликуйте её в канале."
        btn="Создать первую карточку"
      />
    </>
  );
}
