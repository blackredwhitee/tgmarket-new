"use client";
import { useId, useState } from "react";
import s from "./ui.module.css";

/** Аккордеон: открыт один вопрос; по умолчанию — первый (как в макете). */
export default function Faq({ items }: { items: { q: string; a: string }[] }) {
  const [open, setOpen] = useState(0);
  const id = useId();

  return (
    <div className={s.faq}>
      {items.map((x, i) => {
        const on = open === i;
        return (
          <div key={x.q} className={s.faqItem}>
            <button
              type="button"
              className={s.q}
              aria-expanded={on}
              aria-controls={`${id}-${i}`}
              onClick={() => setOpen(on ? -1 : i)}
            >
              {x.q}
              <span className={`${s.sign} ${on ? s.signOpen : ""}`} aria-hidden="true">+</span>
            </button>
            {on && <p id={`${id}-${i}`} className={s.a}>{x.a}</p>}
          </div>
        );
      })}
    </div>
  );
}
