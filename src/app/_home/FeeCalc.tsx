"use client";
import { useState } from "react";
import { TIERS, TURNOVER, calcFee, rub } from "@/lib/tariffs";
import s from "./home.module.css";

/** Подписи ступеней как в макете главной (последняя — «от 650 тыс. ₽»). */
const TIER_LABELS = ["до 150 тыс. ₽", "150–350 тыс. ₽", "350–650 тыс. ₽", "от 650 тыс. ₽"];
const MODES = [{ label: "Первые 2 месяца (3%)", v: true }, { label: "Обычный тариф", v: false }];

export default function FeeCalc() {
  const [turn, setTurn] = useState<number>(TURNOVER.initial);
  const [first, setFirst] = useState(false);
  const { rate, fee, net } = calcFee(turn, first);
  return (
    <div className={s.calc}>
      <b className={s.calcTitle}>Посчитайте свою комиссию</b>
      <div className={s.modes}>
        {MODES.map((m) => (
          <button key={m.label} type="button" aria-pressed={first === m.v}
            className={`${s.mode} ${first === m.v ? s.modeOn : ""}`} onClick={() => setFirst(m.v)}>{m.label}</button>
        ))}
      </div>
      <label htmlFor="turn" className={s.calcLabel}>Оборот в месяц</label>
      <span className={`${s.calcValue} tnum`}>{rub(turn)}</span>
      <input id="turn" type="range" className={s.range} min={TURNOVER.min} max={TURNOVER.max} step={TURNOVER.step}
        value={turn} onChange={(e) => setTurn(Number(e.target.value))} />
      <div className={s.tiers}>
        {TIERS.map((t, i) => (
          <div key={t.rate} className={`${s.tier} ${!first && t.rate === rate ? s.tierOn : ""} ${first ? s.tierOff : ""}`}>
            <b>{t.rate}%</b><span>{TIER_LABELS[i]}</span>
          </div>
        ))}
      </div>
      <div className={`${s.calcRes} tnum`}>
        <div><span>Ставка</span><b>{rate}%</b></div>
        <div><span>Комиссия</span><b>{rub(fee)}</b></div>
        <div><span>Вы получите</span><b>{rub(net)}</b></div>
      </div>
      <span className={s.calcNote}>Расчёт приблизительный. Точные условия — в оферте.</span>
    </div>
  );
}
