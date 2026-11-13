"use client";
import { useEffect, useState } from "react";
import { BOT_URL } from "@/lib/links";
import s from "./StickyCta.module.css";

/** Мобайл: закреплённая снизу кнопка «Начать продавать» после первого экрана. */
export default function StickyCta() {
  const [on, setOn] = useState(false);
  useEffect(() => {
    const f = () => setOn(scrollY > innerHeight * 0.6);
    f();
    addEventListener("scroll", f, { passive: true });
    return () => removeEventListener("scroll", f);
  }, []);
  return (
    <div className={`${s.bar} ${on ? s.on : ""}`} aria-hidden={!on}>
      <a href={BOT_URL} className={s.btn} tabIndex={on ? 0 : -1}>Начать продавать</a>
      <span>Комиссия от 3% · оплата по СБП</span>
    </div>
  );
}
