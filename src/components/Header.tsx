"use client";
import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import logo from "@/assets/brand/tgmarket-logo.svg";
import { BOT_URL, NICHES, SUPPORT_NICK, SUPPORT_URL } from "@/lib/links";
import s from "./Header.module.css";

/** Шапка: на десктопе меню с выпадающими «Решениями», на мобайле — бургер с полноэкранным списком. */
export default function Header() {
  const [sol, setSol] = useState(false);
  const [menu, setMenu] = useState(false);
  const solRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!sol) return;
    const close = (e: MouseEvent) => { if (!solRef.current?.contains(e.target as Node)) setSol(false); };
    const esc = (e: KeyboardEvent) => { if (e.key === "Escape") setSol(false); };
    document.addEventListener("click", close);
    document.addEventListener("keydown", esc);
    return () => { document.removeEventListener("click", close); document.removeEventListener("keydown", esc); };
  }, [sol]);

  useEffect(() => {
    document.documentElement.style.overflow = menu ? "hidden" : "";
    return () => { document.documentElement.style.overflow = ""; };
  }, [menu]);

  return (
    <header className={s.header}>
      <nav className={s.bar} aria-label="Основное меню">
        <Link href="/" className={s.logo} onClick={() => setMenu(false)}>
          <img src={logo.src} alt="TG Market" width={180} height={30} />
        </Link>
        <div className={s.links}>
          <Link href="/how-it-works/">Как это работает</Link>
          <div className={s.solWrap} ref={solRef} onMouseEnter={() => setSol(true)} onMouseLeave={() => setSol(false)}>
            <button type="button" className={s.solBtn} aria-expanded={sol} onClick={() => setSol(!sol)}>
              Решения <span aria-hidden="true">▾</span>
            </button>
            {sol && (
              <div className={s.drop}>
                {NICHES.map((n) => (
                  <Link key={n.slug} href={`/solutions/${n.slug}/`} onClick={() => setSol(false)}>{n.title}</Link>
                ))}
                <Link href="/solutions/" className={s.dropAll} onClick={() => setSol(false)}>Все решения →</Link>
              </div>
            )}
          </div>
          <Link href="/pricing/">Тарифы</Link>
          <Link href="/partners/">Партнёрам</Link>
          <Link href="/faq/">FAQ</Link>
          <a href={BOT_URL} className={s.cta}>Начать продавать</a>
        </div>
        <button type="button" className={s.burger} aria-label={menu ? "Закрыть меню" : "Меню"} aria-expanded={menu} onClick={() => setMenu(!menu)}>
          <span className={menu ? s.x1 : ""} /><span className={menu ? s.x2 : ""} />
        </button>
      </nav>
      {menu && (
        <div className={s.mob}>
          <Link href="/how-it-works/" onClick={() => setMenu(false)}>Как это работает</Link>
          <Link href="/solutions/" onClick={() => setMenu(false)}>Решения</Link>
          <Link href="/pricing/" onClick={() => setMenu(false)}>Тарифы</Link>
          <Link href="/partners/" onClick={() => setMenu(false)}>Партнёрам</Link>
          <Link href="/faq/" onClick={() => setMenu(false)}>FAQ</Link>
          <a href={BOT_URL} className={s.mobCta}>Начать продавать</a>
          <a href={SUPPORT_URL} className={s.mobSup}>Поддержка {SUPPORT_NICK}</a>
        </div>
      )}
    </header>
  );
}
