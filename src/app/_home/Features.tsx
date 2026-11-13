import { FEATURES } from "./data";
import s from "./home.module.css";

const ICONS: Record<string, string> = {
  chart: "M4 20V10M10 20V4M16 20v-7M22 20H2",
  cashback: "M21 12a9 9 0 1 1-3-6.7M21 4v5h-5M9 9h4.5a2 2 0 0 1 0 4H9v-4zm0 4v4m-1.5-2h5",
  mail: "M3 6h18v12H3zM3 7l9 6 9-6",
  store: "M3 9l2-5h14l2 5M4 9v11h16V9M3 9h18M9 20v-6h6v6",
  gavel: "M14 4l6 6M11 7l6 6M8.5 9.5l6-6M12.5 13.5l6-6M10 12L3 19l2 2 7-7M14 21h7",
  pos: "M7 2h10v20H7zM10 18h4M9 6h6v6H9z",
  tag: "M3 12V3h9l9 9-9 9-9-9zM7.5 7.5h.01",
  split: "M12 3a9 9 0 1 0 9 9h-9V3zM15 2.5A7 7 0 0 1 21.5 9H15V2.5z",
  sheet: "M4 3h16v18H4zM4 9h16M4 15h16M10 3v18",
};

/** «Дополнительно»: сетка возможностей бота с иконками. */
export default function Features() {
  return (
    <div className={s.featGrid}>
      {FEATURES.map((f) => (
        <div key={f.t} className={s.featCard}>
          <span className={s.featIcon} aria-hidden="true">
            <svg viewBox="0 0 24 24" width="24" height="24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><path d={ICONS[f.icon]} /></svg>
          </span>
          <b>{f.t}</b>
          <span className={s.featText}>{f.d}</span>
        </div>
      ))}
    </div>
  );
}
