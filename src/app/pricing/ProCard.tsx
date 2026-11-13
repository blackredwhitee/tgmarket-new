"use client";
import { useState } from "react";
import { BOT_URL } from "@/lib/links";
import { PRO_PLANS, rub } from "@/lib/tariffs";
import s from "./page.module.css";

export default function ProCard() {
  const [term, setTerm] = useState(0);
  const plan = PRO_PLANS[term];
  const months = Number(plan.id);
  const note = months === 1 ? plan.per : `${plan.per} · ${rub(plan.price / months)}/мес`;

  return (
    <div className={`${s.plan} ${s.planPro}`}>
      <span className={s.planName}>ПРО</span>
      <span className={s.planDesc}>Полный потенциал вашего бизнеса</span>
      <div className={`${s.priceRow} ${s.priceWrap}`}><b className={`${s.price} tnum`}>{rub(plan.price)}</b><span>{note}</span></div>
      <div className={s.terms} role="group" aria-label="Срок оплаты тарифа ПРО">
        {PRO_PLANS.map((p, i) => (
          <button key={p.id} type="button" aria-pressed={term === i} className={`${s.termBtn} ${term === i ? s.segOn : ""}`} onClick={() => setTerm(i)}>{p.label}</button>
        ))}
      </div>
      <ul className={s.features}>
        <li>✓ неограниченное количество товаров</li>
        <li>✓ расширенные уведомления в отдельном канале</li>
        <li>✓ реферальная система для отслеживания</li>
        <li>✓ неограниченная генерация описаний товаров</li>
        <li>✓ все возможности тарифа СТАРТ</li>
      </ul>
      <a href={BOT_URL} className={s.planBtn}>Подключить ПРО</a>
    </div>
  );
}
