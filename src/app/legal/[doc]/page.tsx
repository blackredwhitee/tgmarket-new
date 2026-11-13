import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import type { ReactNode } from "react";
import Footer from "@/components/Footer";
import { LEGAL, getLegal, type LegalSection } from "@/data/legal";
import s from "./page.module.css";

export const dynamicParams = false;

export function generateStaticParams() {
  return LEGAL.map((d) => ({ doc: d.slug }));
}

type Props = { params: Promise<{ doc: string }> };

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const doc = getLegal((await params).doc);
  if (!doc) return {};
  return { title: doc.seoTitle, description: doc.description };
}

const MONTHS = ["января", "февраля", "марта", "апреля", "мая", "июня", "июля", "августа", "сентября", "октября", "ноября", "декабря"];
const formatDate = (iso: string) => {
  const [y, m, d] = iso.split("-").map(Number);
  return `${d} ${MONTHS[m - 1]} ${y}`;
};

/** Определение вида «Термин — описание»: термин выделяем жирным (только в разделе терминов). */
const TERM = /^([A-Za-zА-Яа-яЁё][^—–]{0,50}?) — ([\s\S]+)$/;

/** Абзацы раздела: подряд идущие строки «- …» и определения терминов собираем в списки (текст не меняется). */
function renderParas(sec: LegalSection) {
  const out: ReactNode[] = [];
  let group: { kind: "dash" | "term"; items: string[] } | null = null;
  const flush = () => {
    if (!group) return;
    const g = group;
    out.push(
      <ul key={`g${out.length}`} className={g.kind === "term" ? s.terms : s.dashes}>
        {g.items.map((t, i) => {
          const m = g.kind === "term" ? TERM.exec(t) : null;
          return <li key={i}>{m ? <><b>{m[1]}</b> — {m[2]}</> : t}</li>;
        })}
      </ul>,
    );
    group = null;
  };
  sec.paras.forEach((p, i) => {
    const kind = p.startsWith("- ") ? "dash" : sec.id === "terms" && TERM.test(p) ? "term" : null;
    if (kind) {
      if (group?.kind !== kind) flush();
      if (!group) group = { kind, items: [] };
      group.items.push(p);
    } else {
      flush();
      out.push(<p key={`p${i}`} className={s.p}>{p}</p>);
    }
  });
  flush();
  return out;
}

const heading = (sec: LegalSection) => (sec.num ? `${sec.num}. ${sec.title}` : sec.title);

export default async function LegalPage({ params }: Props) {
  const doc = getLegal((await params).doc);
  if (!doc) notFound();

  return (
    <>
      <section className={`container ${s.wrap}`}>
        <nav className={s.aside} aria-label="Документы">
          <span className={s.mono}>ДОКУМЕНТЫ</span>
          {LEGAL.map((d) => (
            <Link
              key={d.slug}
              href={`/legal/${d.slug}/`}
              className={d.slug === doc.slug ? `${s.docLink} ${s.docActive}` : s.docLink}
              aria-current={d.slug === doc.slug ? "page" : undefined}
            >
              {d.title}
            </Link>
          ))}
        </nav>

        <article className={s.article}>
          <span className={s.meta}>{doc.updated ? `Редакция от ${formatDate(doc.updated)} · ООО «ОИС»` : "ООО «ОИС»"}</span>
          <h1 className={s.h1}>{doc.title}</h1>
          <p className={s.subtitle}>{doc.subtitle}</p>

          <nav className={s.toc} aria-label="Содержание">
            <b>Содержание</b>
            {doc.sections.map((sec) => <a key={sec.id} href={`#${sec.id}`}>{heading(sec)}</a>)}
          </nav>

          {doc.intro.map((p, i) => <p key={i} className={s.p}>{p}</p>)}

          {doc.sections.map((sec) => (
            <section key={sec.id} id={sec.id} className={s.section}>
              <h2 className={s.h2}>{heading(sec)}</h2>
              {renderParas(sec)}
            </section>
          ))}
        </article>
      </section>
      <Footer />
    </>
  );
}
