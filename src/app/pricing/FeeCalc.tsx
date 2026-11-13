"use client";
import { useState } from "react";
import { TURNOVER, calcFee, pct, rub } from "@/lib/tariffs";
import s from "./page.module.css";

const MODES = [
  { first: true, label: "Первые 2 месяца (3%)", short: "Первые 2 мес. (3%)" },
  { first: false, label: "Обычный тариф", short: "Обычный тариф" },
];

export default function FeeCalc() {
  const [turn, setTurn] = useState<number>(TURNOVER.initial);
  const [first, setFirst] = useState(true);
  const { rate, fee, net } = calcFee(turn, first);

  return (
    <div className={s.calc}>
      <div className={s.seg} role="group" aria-label="Режим расчёта">
        {MODES.map((m) => (
          <button key={m.label} type="button" aria-pressed={first === m.first} className={`${s.segBtn} ${first === m.first ? s.segOn : ""}`} onClick={() => setFirst(m.first)}>
            <span className={s.long}>{m.label}</span><span className={s.short}>{m.short}</span>
          </button>
        ))}
      </div>
      <label htmlFor="fee-turnover" className={s.calcLabel}>Оборот в месяц, ₽</label>
      <span className={`${s.calcNum} tnum`} aria-live="polite">{rub(turn)}</span>
      <input id="fee-turnover" type="range" className={s.range} min={TURNOVER.min} max={TURNOVER.max} step={TURNOVER.step} value={turn} onChange={(e) => setTurn(Number(e.target.value))} aria-valuetext={rub(turn)} />
      <div className={s.results3}>
        <div className={s.result}><span>Ставка</span><b className="tnum">{pct(rate)}</b></div>
        <div className={s.result}><span>Комиссия</span><b className="tnum">{rub(fee)}</b></div>
        <div className={s.result}><span>Вы получите</span><b className="tnum">{rub(net)}</b></div>
      </div>
      <span className={s.calcNote}>Расчёт приблизительный. Точные условия — в оферте.</span>
    </div>
  );
}
