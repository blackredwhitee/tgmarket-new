"use client";
import { useState } from "react";
import { PRICING_FAQ } from "@/data/faq";
import Accordion from "../faq/Accordion";
import s from "./page.module.css";

const ITEMS = PRICING_FAQ.map((q, i) => ({ ...q, id: `p${i}` }));

export default function PricingFaq() {
  const [open, setOpen] = useState("p0");
  return <div className={s.faqList}><Accordion items={ITEMS} open={open} onToggle={setOpen} /></div>;
}
