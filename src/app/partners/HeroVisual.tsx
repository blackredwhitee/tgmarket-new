"use client";
import { useEffect, useState } from "react";
import { rub } from "@/lib/tariffs";
import avaPsy from "@/assets/photos/ava_psy.jpg";
import avaArt from "@/assets/photos/ava_art.jpg";
import avaBlog from "@/assets/photos/ava_blog.jpg";
import avaCareer from "@/assets/photos/ava_career.jpg";
import budget from "@/assets/photos/pexels-5900092.jpg";
import s from "./page.module.css";

/** Пример дохода в счётчике (из макета), меняется каждые 1,5 с. Первое значение = 10 селлеров × 150 000 ₽. */
const INCOMES = [12000, 14800, 17300, 19900, 23400, 26100];

/** Позиции аватаров в макете на поле 520×490: x, y, размер. */
const W = 520, H = 490;
const AVATARS = [
  { img: avaPsy, x: 28, y: 28, size: 92 },
  { img: avaArt, x: 404, y: 22, size: 88 },
  { img: avaBlog, x: 22, y: 352, size: 96 },
  { img: avaCareer, x: 412, y: 366, size: 82 },
  { img: budget, x: 224, y: 392, size: 70 },
];

export default function HeroVisual() {
  const [tick, setTick] = useState(0);
  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    const t = setInterval(() => setTick((v) => (v + 1) % INCOMES.length), 1500);
    return () => clearInterval(t);
  }, []);

  return (
    <div className={s.heroVis}>
      {AVATARS.map((a, i) => (
        <img
          key={i}
          src={a.img.src}
          alt=""
          className={s.av}
          style={{ left: `${(a.x / W) * 100}%`, top: `${(a.y / H) * 100}%`, width: `${(a.size / W) * 100}%` }}
        />
      ))}
      <div className={s.counter}>
        <span className={s.counterLabel}>ВАШ ДОХОД · ПРИМЕР</span>
        <b className={s.counterNum}>{rub(INCOMES[tick])}</b>
        <span className={s.counterSub}>за месяц</span>
      </div>
    </div>
  );
}
