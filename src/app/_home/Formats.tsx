"use client";
import { useEffect, useState } from "react";
import { FORMATS } from "./data";
import s from "./home.module.css";

/** «Форматы»: 7 вкладок, автопрокрутка каждые 2,8 с до первого клика. */
export default function Formats() {
  const [fmt, setFmt] = useState(0);
  const [auto, setAuto] = useState(true);
  useEffect(() => {
    if (!auto) return;
    const t = setInterval(() => setFmt((f) => (f + 1) % FORMATS.length), 2800);
    return () => clearInterval(t);
  }, [auto]);
  const f = FORMATS[fmt];
  return (
    <>
      <div className={s.tabsScroll}>
        <div className={s.tabs} role="tablist" aria-label="Форматы продаж">
          {FORMATS.map((x, i) => (
            <button key={x.label} type="button" role="tab" aria-selected={i === fmt}
              className={`${s.fmtTab} ${i === fmt ? s.fmtTabOn : ""}`}
              onClick={() => { setFmt(i); setAuto(false); }}>{x.label}</button>
          ))}
        </div>
      </div>
      <div className={s.fmtGrid}>
        <div className={s.fmtInfo}>
          {/* все варианты лежат в одной ячейке — высота = самому длинному, страница не прыгает */}
          <div className={s.fmtStack}>
            {FORMATS.map((x, i) => (
              <div key={x.label} className={`${s.fmtHead} ${i === fmt ? "" : s.fmtHidden}`} aria-hidden={i !== fmt}>
                <b className={s.fmtTitle}>{x.title}</b>
                <span className={s.fmtText}>{x.text}</span>
              </div>
            ))}
          </div>
          <div className={s.fmtStack}>
            {FORMATS.map((x, i) => (
              <div key={x.label} className={`${s.fmtWho} ${i === fmt ? "" : s.fmtHidden}`} aria-hidden={i !== fmt}>
                <span className={s.fmtWhoLabel}>КОМУ ПОДХОДИТ</span>
                <div className={s.chips}>{x.who.map((w) => <span key={w} className={s.chip}>{w}</span>)}</div>
              </div>
            ))}
          </div>
          <span className={s.fmtMore}>Ещё в боте: промокоды, импорт карточек из Excel и витрина продавца со всеми вашими товарами.</span>
        </div>
        <div className={s.phone}>
          <div className={s.phoneScreen}>
            <div className={s.phoneTop}>
              <img src={f.ava} alt="" />
              <div className={s.col}><b>{f.channel}</b><span>{f.subs}</span></div>
            </div>
            <div key={fmt} className={s.phoneFeed}>
              {f.posts.map((m, i) => (
                <div key={i} className={s.phoneMsg}>{m}<span className={s.phoneMeta}>{["1,2K", "860"][i]} · {["10:14", "18:30"][i]}</span></div>
              ))}
              <div className={s.phonePost}>
                <img src={f.img} alt="" />
                <div className={s.phonePostBody}><b>{f.card}</b><span>{f.price}</span></div>
                <div className={s.phonePostBtn}>{f.btn}</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
