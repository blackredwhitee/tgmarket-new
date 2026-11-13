"use client";
import { useState } from "react";
import { FAQ } from "./data";
import s from "./home.module.css";

export default function FaqList() {
  const [open, setOpen] = useState(0);
  return (
    <div className={s.faqList}>
      {FAQ.map((q, i) => (
        <div key={q.q} className={s.faqItem}>
          <button type="button" className={s.faqQ} aria-expanded={i === open} onClick={() => setOpen(open === i ? -1 : i)}>
            {q.q}<span className={`${s.faqSign} ${i === open ? s.faqSignOn : ""}`} aria-hidden>+</span>
          </button>
          {i === open && <p className={s.faqA}>{q.a}</p>}
        </div>
      ))}
    </div>
  );
}
