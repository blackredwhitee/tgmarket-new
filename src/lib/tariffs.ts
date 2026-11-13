/** Комиссия TG Market и партнёрская программа — единый источник цифр для калькуляторов. */
export const TIERS = [
  { max: 149_999, rate: 10, range: "до 150 тыс. ₽" },
  { max: 350_000, rate: 8, range: "150–350 тыс. ₽" },
  { max: 650_000, rate: 7, range: "350–650 тыс. ₽" },
  { max: Infinity, rate: 5, range: "свыше 650 тыс. ₽" },
] as const;
export const FIRST_RATE = 3;
export const TURNOVER = { min: 10_000, max: 2_000_000, step: 10_000, initial: 300_000 } as const;

export const tierRate = (turnover: number) => TIERS.find((t) => turnover <= t.max)!.rate;

/** Комиссия: первые 2 месяца — 3% на весь оборот, иначе ставка ступени. */
export function calcFee(turnover: number, first: boolean) {
  const rate = first ? FIRST_RATE : tierRate(turnover);
  const fee = (turnover * rate) / 100;
  return { rate, fee, net: turnover - fee };
}

/** Партнёр получает десятую часть комиссии селлера: 1% / 0,8% / 0,7% / 0,5%. */
export const PARTNER_SHARE = 0.1;
export const partnerRate = (avgTurnover: number) => tierRate(avgTurnover) * PARTNER_SHARE;
export function calcPartner(sellers: number, avgTurnover: number) {
  const rate = partnerRate(avgTurnover);
  const month = (sellers * avgTurnover * rate) / 100;
  return { rate, month, year: month * 12 };
}

/** Тариф ПРО: срок → цена. */
export const PRO_PLANS = [
  { id: "1", label: "1 месяц", price: 990, per: "в месяц", note: "Оплата помесячно" },
  { id: "6", label: "6 месяцев", price: 4800, per: "за 6 месяцев", note: "800 ₽ в месяц" },
  { id: "12", label: "12 месяцев", price: 7200, per: "за 12 месяцев", note: "600 ₽ в месяц" },
] as const;

export const rub = (n: number) => Math.round(n).toLocaleString("ru-RU").replace(/[\u00a0\u202f]/g, " ") + " ₽";
export const pct = (n: number) => String(Math.round(n * 10) / 10).replace(".", ",") + "%";
