"use client";
import { useEffect, useState } from "react";
import { HOW_STEPS } from "./data";
import { P } from "./photos";
import s from "./home.module.css";

/** «Как это работает»: 3 шага подсвечиваются по очереди каждые 2,8 с. */
export default function HowSteps() {
  const [how, setHow] = useState(0);
  useEffect(() => {
    const t = setInterval(() => setHow((h) => (h + 1) % 3), 2800);
    return () => clearInterval(t);
  }, []);
  return (
    <>
      <div className={s.howTrack}><div className={s.howBar} style={{ width: `${((how + 1) / 3) * 100}%` }} /></div>
      <div className={s.howGrid}>
        {HOW_STEPS.map((h, i) => (
          <div key={h.n} className={`${s.howCard} ${i === how ? s.howCardOn : ""}`}>
            <div className={s.howHead}><span className={s.howNum}>{h.n}</span><b>{h.title}</b></div>
            <span className={s.howText}>{h.text}</span>
            <div className={s.howMock}>
              {i === 0 && (
                <div className={s.mBot}>
                  <b>Новая карточка · Услуга</b>
                  <img src={P.session} alt="" />
                  <span>Сессия 50 мин</span>
                  <span className={s.mBotPrice}>4 500 ₽</span>
                </div>
              )}
              {i === 1 && (
                <div className={s.mPost}>
                  <div className={s.mPostHead}><img src={P.aPsy} alt="" /><b>Спокойная голова</b></div>
                  <img className={s.mPostImg} src={P.session} alt="" />
                  <div className={s.mPostBody}><b>Сессия 50 мин</b><div>4 500 ₽</div></div>
                  <div className={s.mPostBtn}>Оплатить</div>
                </div>
              )}
              {i === 2 && (
                <div className={s.mPay}>
                  <div className={s.mPayCard}>
                    <span className={s.mPayLabel}>TG Market Pay · СБП</span>
                    <span className={s.mPaySum}>4 500 ₽</span>
                    <span className={s.mPayBtn}>Выбрать банк и оплатить</span>
                  </div>
                  <div className={s.mSale}><span className={s.dot9} /><b className={s.grow}>Новая продажа</b><b className={s.mSaleSum}>+4 500 ₽</b></div>
                </div>
              )}
            </div>
          </div>
        ))}
      </div>
    </>
  );
}
