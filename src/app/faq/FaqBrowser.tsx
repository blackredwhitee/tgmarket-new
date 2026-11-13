"use client";
import { useState } from "react";
import { FAQ_GROUPS } from "@/data/faq";
import Accordion from "./Accordion";
import s from "./page.module.css";

const ALL = "Все";
const FILTERS = [ALL, ...FAQ_GROUPS.map((g) => g.name)];
const GROUPS = FAQ_GROUPS.map((g, gi) => ({ name: g.name, items: g.items.map((q, qi) => ({ ...q, id: `${gi}-${qi}` })) }));

/** Фильтры по разделам + аккордеон (открыт один вопрос на всю страницу). */
export default function FaqBrowser() {
  const [filter, setFilter] = useState(ALL);
  const [open, setOpen] = useState("0-0");
  const shown = GROUPS.filter((g) => filter === ALL || filter === g.name);

  return (
    <>
      <div className={s.filtWrap}>
        <div className={s.filters} role="group" aria-label="Разделы">
          {FILTERS.map((f) => (
            <button key={f} type="button" aria-pressed={filter === f} className={`${s.chip} ${filter === f ? s.chipOn : ""}`} onClick={() => setFilter(f)}>{f}</button>
          ))}
        </div>
      </div>
      <div className={s.groups}>
        {shown.map((g) => (
          <div key={g.name} className={s.group}>
            <h2 className={s.groupName}>{g.name}</h2>
            <Accordion items={g.items} open={open} onToggle={setOpen} wide />
          </div>
        ))}
      </div>
    </>
  );
}
