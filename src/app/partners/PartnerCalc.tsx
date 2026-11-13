"use client";
import { useState } from "react";
import { calcPartner, pct, rub } from "@/lib/tariffs";
import s from "./page.module.css";

const SELLERS = { min: 1, max: 100, step: 1, initial: 10 };
const AVG = { min: 10_000, max: 1_000_000, step: 10_000, initial: 150_000 };

export default function PartnerCalc() {
  const [sellers, setSellers] = useState(SELLERS.initial);
  const [avg, setAvg] = useState(AVG.initial);
  const { rate, month, year } = calcPartner(sellers, avg);

  return (
    <div className={s.calc}>
      <label htmlFor="partner-sellers" className={s.calcLabel}>Сколько селлеров приведёте</label>
      <span className={`${s.calcNum} tnum`}>{sellers}</span>
      <input id="partner-sellers" type="range" className={s.range} min={SELLERS.min} max={SELLERS.max} step={SELLERS.step} value={sellers} onChange={(e) => setSellers(Number(e.target.value))} />
      <label htmlFor="partner-avg" className={s.calcLabel}>Средний оборот селлера в месяц</label>
      <span className={`${s.calcNum} tnum`}>{rub(avg)}</span>
      <input id="partner-avg" type="range" className={s.range} min={AVG.min} max={AVG.max} step={AVG.step} value={avg} onChange={(e) => setAvg(Number(e.target.value))} aria-valuetext={rub(avg)} />
      <div className={s.results2} aria-live="polite">
        <div className={s.result}><span>Ваш доход в месяц</span><b className="tnum">{rub(month)}</b></div>
        <div className={s.result}><span>За первый год</span><b className="tnum">{rub(year)}</b></div>
      </div>
      <span className={s.calcNote}>Ваша ставка при таком обороте — {pct(rate)}. Пример расчёта: фактический доход зависит от оборота селлеров.</span>
    </div>
  );
}
