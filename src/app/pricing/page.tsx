import type { Metadata } from "next";
import Footer from "@/components/Footer";
import { BOT_URL } from "@/lib/links";
import { TIERS } from "@/lib/tariffs";
import avaPsy from "@/assets/photos/ava_psy.jpg";
import avaArt from "@/assets/photos/ava_art.jpg";
import avaBlog from "@/assets/photos/ava_blog.jpg";
import avaCareer from "@/assets/photos/ava_career.jpg";
import FeeCalc from "./FeeCalc";
import ProCard from "./ProCard";
import PricingFaq from "./PricingFaq";
import s from "./page.module.css";

export const metadata: Metadata = {
  title: "Тарифы и комиссия — TG Market",
  description: "Подключение и тариф СТАРТ — бесплатно, комиссия только с продаж: от 10% до 5% по ступенчатой шкале. Первым селлерам — 3% на 2 месяца. Тариф ПРО — от 600 ₽ в месяц.",
};

const AVATARS = [avaPsy, avaArt, avaBlog, avaCareer];

export default function PricingPage() {
  return (
    <>
      <section className={`container ${s.hero}`}>
        <div className={s.heroText}>
          <span className={s.tag}>Тарифы</span>
          <h1 className={s.h1}>Платите, только когда продаёте</h1>
          <p className={s.lead}>Подключение и тариф СТАРТ — бесплатно, вы платите комиссию только с продаж. Первым селлерам — 3% на 2 месяца.</p>
          <a href={BOT_URL} className={s.btn}>Начать с 3% →</a>
        </div>
        <div className={s.heroCard}>
          <span className={s.heroMono}>ПЕРВЫЕ 2 МЕСЯЦА</span>
          <span className={s.big}>3%</span>
          <span className={s.heroCardSub}>на весь оборот</span>
          <div className={s.sellers}>
            <div className={s.avatars}>
              {AVATARS.map((a, i) => <img key={i} src={a.src} alt="" width={36} height={36} />)}
            </div>
            <span><b>3 000+ продавцов</b><br />уже с TG Market</span>
          </div>
        </div>
      </section>

      <section className={s.gray}>
        <div className={`container ${s.stack}`}>
          <div className={s.head}>
            <h2 className={s.h2}>Ступенчатая комиссия</h2>
            <p className={s.lead}>Ставка меняется автоматически при переходе границы оборота.</p>
          </div>
          <div className={s.note}><span className={s.dot} />Первые 2 месяца для первых селлеров — 3% на весь оборот</div>
          <div className={s.g4}>
            {TIERS.map((t) => (
              <div key={t.range} className={s.tierCard}>
                <span className={s.tierRange}>{t.range}</span>
                <b className={`${s.tier} tnum`}>{t.rate}%</b>
              </div>
            ))}
          </div>
          <div className={s.g2}>
            <div className={s.info}>
              <b>В комиссию входит</b>
              <span>Приём оплаты по СБП, карточки и публикация в Telegram, уведомления о продажах, чеки для ИП и юрлиц, выплаты.</span>
            </div>
            <div className={s.info}>
              <b>Как списывается</b>
              <span>Автоматически с каждой оплаты: к выводу поступает сумма за вычетом комиссии. Один платёж — от 10 ₽ до 1 000 000 ₽.</span>
            </div>
          </div>
        </div>
      </section>

      <section className={`container ${s.sec}`}>
        <div className={s.calcWrap}>
          <div className={s.calcIntro}>
            <h2 className={s.h2}>Посчитайте свою комиссию</h2>
            <p className={s.lead}>Передвиньте ползунок — покажем ставку и сумму, которую вы получите.</p>
          </div>
          <FeeCalc />
        </div>
      </section>

      <section className={s.blue}>
        <div className={s.head}>
          <h2 className={s.h2}>Тарифы бота</h2>
          <p className={s.lead}>Начните бесплатно на СТАРТ, подключите ПРО, когда товаров станет больше. Комиссия с продаж — по шкале на любом тарифе.</p>
        </div>
        <div className={s.g2}>
          <div className={s.plan}>
            <span className={s.planName}>СТАРТ</span>
            <span className={s.planDesc}>Базовый функционал для старта продаж</span>
            <div className={s.priceRow}><b className={`${s.price} tnum`}>0 ₽</b><span>бесплатно навсегда</span></div>
            <div className={s.termSpacer} aria-hidden="true" />
            <ul className={s.features}>
              <li>✓ до 5 товаров в каталоге</li>
              <li>✓ 1 фото для каждого товара</li>
              <li>✓ базовые уведомления о продажах</li>
              <li>✓ 3 бесплатные генерации описаний товаров</li>
            </ul>
            <a href={BOT_URL} className={s.planBtnGhost}>Начать бесплатно</a>
          </div>
          <ProCard />
        </div>
      </section>

      <section className={`container ${s.sec}`}>
        <div className={s.faqWrap}>
          <h2 className={s.h2}>Вопросы об оплате</h2>
          <PricingFaq />
        </div>
      </section>

      <Footer title="Начните продавать с 3%" sub="Первые 2 месяца — сниженная комиссия на весь оборот." btn="Начать с 3%" />
    </>
  );
}
