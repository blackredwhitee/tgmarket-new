"use client";
import Link from "next/link";
import { useEffect, useState } from "react";
import s from "./CookieBanner.module.css";

const KEY = "tgm-cookie";

/** Баннер согласия на cookie: «Принять» / «Настроить» → переключатели и «Сохранить». Метрика — только после согласия. */
export default function CookieBanner() {
  const [open, setOpen] = useState(false);
  const [tune, setTune] = useState(false);
  const [analytics, setAnalytics] = useState(true);

  useEffect(() => {
    try { if (!localStorage.getItem(KEY)) setOpen(true); } catch { setOpen(true); }
  }, []);

  const save = (a: boolean) => {
    try { localStorage.setItem(KEY, JSON.stringify({ analytics: a, at: Date.now() })); } catch {}
    setOpen(false);
  };

  if (!open) return null;
  return (
    <div className={s.box} role="dialog" aria-label="Согласие на cookie">
      {!tune ? (
        <>
          <p>Мы используем cookie и Яндекс Метрику, чтобы сайт работал лучше. Подробнее — в <Link href="/legal/cookies/">политике cookie</Link>.</p>
          <div className={s.row}>
            <button type="button" className={s.accept} onClick={() => save(true)}>Принять</button>
            <button type="button" className={s.ghost} onClick={() => setTune(true)}>Настроить</button>
          </div>
        </>
      ) : (
        <>
          <label className={s.opt}><input type="checkbox" checked disabled /> Необходимые</label>
          <label className={s.opt}><input type="checkbox" checked={analytics} onChange={(e) => setAnalytics(e.target.checked)} /> Аналитика (Яндекс Метрика)</label>
          <div className={s.row}><button type="button" className={s.accept} onClick={() => save(analytics)}>Сохранить</button></div>
        </>
      )}
    </div>
  );
}
