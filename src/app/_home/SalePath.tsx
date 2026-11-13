"use client";
import { useState } from "react";
import mark from "@/assets/brand/tgmarket-mark.png";
import { CHART, ORDER_MENU, PROMO_MENU, TASKS } from "./data";
import s from "./home.module.css";

/** «Весь путь продажи»: 5 вкладок, слева экран бота, справа описание. */
export default function SalePath() {
  const [task, setTask] = useState(0);
  const t = TASKS[task];
  return (
    <>
      <div className={s.tabsScroll}>
        <div className={`${s.tabs} ${s.pathTabs}`} role="tablist" aria-label="Шаги продажи">
          {TASKS.map((x, i) => (
            <button key={x.label} type="button" role="tab" aria-selected={i === task}
              className={`${s.pathTab} ${i === task ? s.pathTabOn : ""}`} onClick={() => setTask(i)}>
              <span className={s.pathNum}>{i + 1}</span>{x.label}
            </button>
          ))}
        </div>
      </div>
      <div className={s.pathGrid}>
        <div className={s.botPanel}>
          <div className={s.botHead}>
            <img src={mark.src} alt="" />
            <div className={s.col}><b>TG Market Seller</b><span>бот</span></div>
          </div>
          {task === 0 && (
            <div key="t0" className={`${s.botBody} ${s.gap10}`}>
              <b className={s.botTitle}>Продвижение</b>
              {PROMO_MENU.map((m) => <span key={m} className={s.botItem}>{m}<span className={s.ink3}>›</span></span>)}
            </div>
          )}
          {task === 1 && (
            <div key="t1" className={`${s.botBody} ${s.gap12}`}>
              <div className={s.saleRow}><span className={s.dot10} /><div className={`${s.col} ${s.grow}`}><b>Новая продажа</b><span>Сессия 50 мин · СБП · чек отправлен</span></div><b className={s.saleSum}>+4 500 ₽</b></div>
              <div className={s.saleRow}><span className={s.dot10} /><div className={`${s.col} ${s.grow}`}><b>Новая продажа</b><span>Мини-курс · частями через «Плайт»</span></div><b className={s.saleSum}>+12 000 ₽</b></div>
              <div className={s.withdraw}>
                <div className={s.col}><span>Доступно к выводу · пример</span><b>18 400 ₽</b></div>
                <span className={s.withdrawBtn}>Вывести</span>
              </div>
            </div>
          )}
          {task === 2 && (
            <div key="t2" className={`${s.botBody} ${s.gap8}`}>
              <b className={s.botTitle}>Заказы</b>
              {ORDER_MENU.map((m) => <span key={m.t} className={`${s.botItem} ${s.botItemSm}`}>{m.t}<b>{m.n}</b></span>)}
            </div>
          )}
          {task === 3 && (
            <div key="t3" className={`${s.botBody} ${s.gap14}`}>
              <div className={s.repHead}><b className={s.botTitle}>Сводка за неделю · пример</b><span>АВТООТЧЁТ</span></div>
              <div className={s.repStats}>
                <div><span>Выручка</span><b>64 300 ₽</b></div>
                <div><span>Заказы</span><b>31</b></div>
                <div><span>Средний чек</span><b>2 074 ₽</b></div>
              </div>
              <div className={s.chart}>
                {CHART.map((b, i) => (
                  <div key={b.d} className={s.chartCol}>
                    <span className={`${s.chartBar} ${i === 5 ? s.chartBarHi : ""}`} style={{ height: b.h, animationDelay: `${i * 0.06}s` }} />
                    <span className={s.chartDay}>{b.d}</span>
                  </div>
                ))}
              </div>
            </div>
          )}
          {task === 4 && (
            <div key="t4" className={`${s.botBody} ${s.gap12}`}>
              <div className={s.mailing}>
                <b>Рассылка по покупателям</b>
                <span>«Открыла запись на декабрь. Для тех, кто уже был на сессии, — скидка 10% по промокоду»</span>
                <span className={s.mailingMeta}>ПОЛУЧАТЕЛИ: ВСЕ ПОКУПАТЕЛИ · ПРИМЕР</span>
              </div>
              <div className={s.promo}><span>Промокод</span><b>ДЕКАБРЬ10</b></div>
            </div>
          )}
        </div>
        <div className={s.pathText}>
          <b className={s.pathTitle}>{t.title}</b>
          <span className={s.pathLead}>{t.lead}</span>
          {t.items.map((it) => <div key={task + it} className={s.pathItem}><span className={s.pathDot} />{it}</div>)}
        </div>
        {task === 2 && (
          <div className={s.ordersMob}>
            <b>Заказы · TG Market Seller</b>
            {ORDER_MENU.map((m) => <span key={m.t}>{m.t}<b>{m.n}</b></span>)}
          </div>
        )}
      </div>
    </>
  );
}
