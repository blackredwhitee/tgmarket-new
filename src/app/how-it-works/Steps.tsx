"use client";
import { useEffect, useState } from "react";
import mark from "@/assets/brand/tgmarket-mark.png";
import s from "./how.module.css";

const STEPS = [
  { t: "Запустите бота", d: "Откройте @TGMarketSellerBot и нажмите «Старт».", msg: "Добро пожаловать в TG Market! Здесь вы создаёте карточки, публикуете их в канале и принимаете оплату по СБП.", btns: ["Старт"] },
  { t: "Выберите статус", d: "Самозанятый или физлицо, либо ИП или юрлицо. Начать можно сразу: первые шаги у всех одинаковые.", msg: "Выберите ваш статус:", btns: ["Самозанятый / физлицо", "ИП / юрлицо"] },
  { t: "Подтвердите телефон и выберите банк", d: "Укажите номер и подтвердите его кодом, затем выберите банк: выплаты придут по СБП на этот номер. Для ИП и юрлиц выплаты на реквизиты компании подключаются около недели.", msg: "Код подтверждён. Выберите банк для выплат по СБП:", btns: ["Сбербанк", "Т-Банк", "Альфа-Банк", "Другой банк"] },
  { t: "Создайте карточку", d: "Выберите тип — товар или услуга, подписка, билет, аукцион или донат, — добавьте название, описание, цену и обложку.", msg: "Что будем продавать?", btns: ["Товар или услуга", "Подписка", "Билет", "Аукцион", "Донат"] },
  { t: "Опубликуйте в канале", d: "Карточку с кнопкой оплаты можно опубликовать в канале, в группе или отправить покупателю в личные сообщения.", msg: "Карточка «Сессия 50 мин · 4 500 ₽» готова. Где опубликовать?", btns: ["В канал «Спокойная голова»", "В группу", "Скопировать ссылку на оплату"] },
  { t: "Принимайте оплату", d: "Подписчики оплачивают по СБП, а бот сообщает о каждой продаже.", msg: "Новая продажа: «Сессия 50 мин» — 4 500 ₽. Покупатель @anna_k. Чек отправлен.", btns: ["Открыть заказ", "Все заказы"] },
];

/** 6 шагов: автопереключение каждые 3 с до первого клика; выбранный шаг меняет экран бота в телефоне. */
export default function Steps() {
  const [step, setStep] = useState(0);
  const [auto, setAuto] = useState(true);

  useEffect(() => {
    if (!auto) return;
    const t = setInterval(() => setStep((v) => (v + 1) % STEPS.length), 3000);
    return () => clearInterval(t);
  }, [auto]);

  const cur = STEPS[step];
  return (
    <div className={s.split}>
      <div className={s.steps}>
        {STEPS.map((x, i) => (
          <button
            key={x.t}
            type="button"
            className={`${s.step} ${step === i ? s.stepOn : ""}`}
            aria-pressed={step === i}
            onClick={() => { setStep(i); setAuto(false); }}
          >
            <span className={s.stepNum}>{i + 1}</span>
            <span className={s.stepText}>
              <b className={s.stepTitle}>{x.t}</b>
              {step === i && <span className={s.stepDesc}>{x.d}</span>}
            </span>
          </button>
        ))}
      </div>
      <div className={s.phone} aria-hidden="true">
        <div className={s.screen}>
          <div className={s.botHead}>
            <img src={mark.src} alt="" />
            <div className={s.botName}><b>TG Market Seller</b><span>бот</span></div>
          </div>
          <div className={s.chat}>
            <div key={step} className={s.msgGroup}>
              <div className={s.bubble}>{cur.msg}</div>
              {cur.btns.map((b, j) => (
                <span key={b} className={`${s.botBtn} ${j === 0 ? s.botBtnMain : ""}`}>{b}</span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
