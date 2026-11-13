"use client";
import type { FaqItem } from "@/data/faq";
import s from "./Accordion.module.css";

type Item = FaqItem & { id: string };

/** Список вопросов: открыт максимум один (состояние держит родитель). */
export default function Accordion({ items, open, onToggle, wide = false }: { items: Item[]; open: string; onToggle: (id: string) => void; wide?: boolean }) {
  return (
    <div className={s.list}>
      {items.map((it) => {
        const isOpen = open === it.id;
        return (
          <div key={it.id} className={s.item}>
            <button type="button" className={s.q} aria-expanded={isOpen} aria-controls={`faq-a-${it.id}`} onClick={() => onToggle(isOpen ? "" : it.id)}>
              {it.q}
              <span className={`${s.sign} ${isOpen ? s.signOpen : ""}`} aria-hidden="true">+</span>
            </button>
            {isOpen && <p id={`faq-a-${it.id}`} className={`${s.a} ${wide ? s.aWide : ""}`}>{it.a}</p>}
          </div>
        );
      })}
    </div>
  );
}
