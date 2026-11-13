"use client";
import { useEffect } from "react";
import { usePathname } from "next/navigation";

/** Плавное появление заголовков и карточек при прокрутке (на всех страницах). */
const SEL = "main h2, main [class*='Card']:not([class*='Cards']), main [class*='card']:not([class*='cards']), main [class*='_item__'], main [class*='_prod__'], main [class*='_plan__'], main [class*='_case__']";

export default function ScrollReveal() {
  const path = usePathname();
  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    let pending = Array.from(document.querySelectorAll<HTMLElement>(SEL)).filter((el) => !el.closest("[aria-hidden='true']") && el.getBoundingClientRect().top > window.innerHeight * 0.9);
    pending.forEach((el) => {
      const sibs = el.parentElement ? Array.from(el.parentElement.children).filter((c) => c.matches(SEL)) : [];
      el.style.setProperty("--rv-d", `${Math.min(sibs.indexOf(el), 5) * 70}ms`);
      el.classList.add("rv");
    });
    let raf = 0;
    const check = () => {
      raf = 0;
      const edge = window.innerHeight * 0.92;
      pending = pending.filter((el) => {
        if (el.getBoundingClientRect().top < edge) { el.classList.add("rv-in"); return false; }
        return true;
      });
      if (!pending.length) window.removeEventListener("scroll", onScroll);
    };
    const onScroll = () => check();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);
    check();
    return () => { window.removeEventListener("scroll", onScroll); window.removeEventListener("resize", onScroll); cancelAnimationFrame(raf); };
  }, [path]);
  return null;
}
