import type { Metadata } from "next";
import Link from "next/link";
import Footer from "@/components/Footer";
import Qr from "@/components/Qr";
import { BOT_URL, NICHES, SUPPORT_URL } from "@/lib/links";
import { BELT, CASES, NICHE_CARDS, TICKER } from "./_home/data";
import HowSteps from "./_home/HowSteps";
import Formats from "./_home/Formats";
import SalePath from "./_home/SalePath";
import FeeCalc from "./_home/FeeCalc";
import FaqList from "./_home/FaqList";
import s from "./_home/home.module.css";

export const metadata: Metadata = {
  title: "TG Market — продажи и приём оплаты по СБП прямо в Telegram",
  description: "Создайте карточку товара в боте, опубликуйте её в своём канале и принимайте оплату по СБП. Без сайта и кассы. Комиссия от 3%.",
};

const belt = BELT.concat(BELT);
const ticker = TICKER.concat(TICKER);

export default function Home() {
  return (
    <>
      {/* HERO */}
      <section className={s.hero}>
        <div className={s.heroText}>
          <span className={s.badge}>Комиссия от 3%</span>
          <h1 className={s.h1}>Продавайте прямо в Telegram —<br className={s.dOnly} /> без сайта и кассы</h1>
          <p className={s.heroSub}>
            <span className={s.dOnly}>Создайте карточку товара в боте, опубликуйте её в своём канале и принимайте оплату по СБП от подписчиков.</span>
            <span className={s.mOnly}>Создайте карточку в боте, опубликуйте в своём канале и принимайте оплату по СБП от подписчиков.</span>
          </p>
          <div className={s.heroBtns}>
            <a href={BOT_URL} className={s.btnCoral}>Начать продавать →</a>
            <a href="#how" className={s.btnOutline}>Как это работает</a>
          </div>
          <Link href="/how-it-works/" className={`${s.ulink} ${s.mOnly}`}>Как это работает</Link>
        </div>
        <div className={s.heroBand} />
        <div className={s.belt} aria-hidden>
          <div className={s.beltTrack}>
            {belt.map((c, i) => {
              const delay = `${((i * 1.7) % 6).toFixed(1)}s`;
              return (
                <div key={i} className={s.beltCard}>
                  <div className={s.beltImg}><img src={c.img} alt="" /><span>{c.kind}</span></div>
                  <div className={s.beltBody}><b>{c.title}</b><span>{c.price}</span></div>
                  <div className={s.beltFoot}>
                    <span className={s.beltPay} style={{ animationDelay: delay }}>{c.btn}</span>
                    <span className={s.beltPaid} style={{ animationDelay: delay }}><span className={s.beltDot} />{c.done}</span>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
        <div className={s.heroBottom}>
          <div className={s.heroFacts}><span><b>3 000+</b> селлеров</span><span>Оплата по СБП</span><span>Для самозанятых, ИП и юрлиц</span></div>
          <div className={s.heroQr}>
            <span>Откройте бота<br />с телефона</span>
            <div className={s.heroQrBox}><Qr size={53} pad={3} radius={7} /></div>
          </div>
        </div>
        <div className={s.heroCtaMob}>
          <a href={BOT_URL}>Начать продавать →</a>
          <span>Комиссия от 3% · оплата по СБП</span>
        </div>
      </section>

      {/* NICHE TICKER */}
      <div className={s.ticker} aria-hidden>
        <div className={s.tickerTrack}>
          {ticker.map((t, i) => (
            <span key={i} className={s.tickerItem}>{t}<span className={i % 2 ? s.dotSky : s.dotCoral}>●</span></span>
          ))}
        </div>
      </div>

      {/* SCALE */}
      <section className={`container ${s.scale}`}>
        <div className={s.scaleHead}>
          <h2 className={s.h2}>Уже 3 000+ продавцов принимают оплату в Telegram</h2>
          <p className={s.scaleSub}>
            <span className={s.dOnly}>Психологи и коучи, эксперты, авторы курсов, мастера, флористы, фотографы, блогеры и организаторы событий — продают своей аудитории прямо в каналах и чатах.</span>
            <span className={s.mOnly}>Психологи и коучи, эксперты, авторы курсов, мастера, флористы, фотографы, блогеры и организаторы событий.</span>
          </p>
        </div>
        <div className={s.stats}>
          <div><b>3 000+</b><span>продавцов в TG Market</span></div>
          <div><b>9</b><span>инструментов <span className={s.dOnly}>продаж </span>в одном боте</span></div>
          <div><b>от 3%</b><span>комиссия — только с продаж</span></div>
          <div><b>1–3 дня</b><span>до поступления выплаты</span></div>
        </div>
      </section>

      {/* HOW */}
      <section id="how" className={`${s.plate} ${s.how}`}>
        <div className={s.plateHead}>
          <div className={s.headCol}><span className={s.eyebrow}>КАК ЭТО РАБОТАЕТ</span><h2 className={s.h2}>Карточка, пост, оплата</h2></div>
          <Link href="/how-it-works/" className={`${s.ulink} ${s.dOnly}`}>Все 6 шагов — от регистрации до первой оплаты →</Link>
        </div>
        <HowSteps />
        <Link href="/how-it-works/" className={`${s.plainLink} ${s.mOnly}`}>Все 6 шагов →</Link>
      </section>

      {/* FORMATS */}
      <section id="formats" className={`container ${s.formats}`}>
        <div className={s.headCol}><span className={s.eyebrow}>ШАГ 1 · СОЗДАЙТЕ ПРЕДЛОЖЕНИЕ</span><h2 className={s.h2}>Продавайте то, что нужно вашей аудитории</h2></div>
        <Formats />
      </section>

      {/* PATH */}
      <section id="features" className={`${s.plate} ${s.path}`}>
        <div className={s.plateHead}>
          <div className={s.headCol}><span className={`${s.eyebrow} ${s.eyebrowDark}`}>ВЕСЬ ПУТЬ ПРОДАЖИ</span><h2 className={s.h2}>От первой карточки<br className={s.dOnly} /> до повторной покупки</h2></div>
          <p className={s.pathSub}>Всё, что происходит после публикации, — в одном боте. Выберите шаг, чтобы посмотреть, как это выглядит.</p>
        </div>
        <SalePath />
      </section>

      {/* NICHES */}
      <section id="niches" className={`container ${s.niches}`}>
        <div className={s.headCol}><span className={s.eyebrow}>РЕШЕНИЯ</span><h2 className={s.h2}>TG Market для вашей ниши</h2></div>
        <div className={s.hScroll}>
          <div className={s.nicheGrid}>
            {NICHE_CARDS.map((n, i) => (
              <Link key={n.t} href={`/solutions/${NICHES[i].slug}/`} className={s.nicheCard}>
                <img src={n.img} alt="" />
                <div className={s.nicheBody}><b>{n.t}</b><span className={s.nicheDesc}>{n.d}</span><span className={s.nicheMore}>Подробнее →</span></div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* PRICE */}
      <section id="price" className={s.priceWrap}>
        <div className={`container ${s.price}`}>
          <div className={s.priceInfo}>
            <span className={`${s.eyebrow} ${s.ordA}`}>ТАРИФЫ</span>
            <h2 className={`${s.h2} ${s.ordA}`}>Платите, только<br className={s.dOnly} /> когда продаёте</h2>
            <div className={`${s.bigRate} ${s.ordA}`}>
              <span className={s.bigRateNum}>3%</span>
              <span className={s.bigRateCap}>
                <span className={s.dOnly}>минимальная комиссия<br />первым селлерам на 2 месяца</span>
                <span className={s.mOnly}>первым селлерам<br />на 2 месяца</span>
              </span>
            </div>
            <p className={s.priceSub}>Дальше — ступенчатая шкала от 10% до 5%: чем больше оборот, тем ниже процент. Подключение бесплатное.</p>
            <div className={s.plans}>
              <div className={s.plan}><span className={s.planName}>СТАРТ</span><b>0 ₽</b><span>Бесплатно навсегда. До 5 товаров, базовые уведомления о продажах.</span></div>
              <div className={`${s.plan} ${s.planPro}`}><span className={s.planName}>ПРО</span><b>от 600 ₽ / мес</b><span>Без ограничений по товарам.</span></div>
            </div>
            <Link href="/pricing/" className={`${s.btnOutlineSm} ${s.ordC}`}>Посмотреть тарифы</Link>
          </div>
          <div className={s.ordB}><FeeCalc /></div>
        </div>
      </section>

      {/* CASES */}
      <section className={`container ${s.cases}`}>
        <div className={s.headCol}><span className={s.eyebrow}>КЕЙСЫ</span><h2 className={s.h2}>Кто уже продаёт через TG Market</h2></div>
        <div className={s.hScroll}>
          <div className={s.caseGrid}>
            {CASES.map((c) => (
              <div key={c.ch} className={s.caseCard}>
                <img src={c.img} alt="" />
                <div className={s.caseBody}>
                  <span className={s.caseNiche}>{c.niche}</span>
                  <span className={s.caseQ}>«{c.q}»</span>
                  <div className={s.caseAuthor}><img src={c.ava} alt="" /><b>{c.ch}</b></div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* PARTNERS */}
      <section id="partners" className={s.partnersWrap}>
        <div className={`container ${s.partners}`}>
          <div className={s.partnersText}>
            <span className={`${s.eyebrow} ${s.eyebrowInk}`}>ПАРТНЁРАМ</span>
            <h2 className={s.h2}>Знаете тех, кто продаёт в Telegram?</h2>
            <span className={s.partnersSub}>Приводите селлеров<span className={s.dOnly}> в TG Market</span> и получайте до 1% с их оборота весь первый год.</span>
          </div>
          <div className={s.partnersSide}>
            <div className={s.partnersBadge}><b>до 1%</b><span>с оборота каждого селлера</span></div>
            <Link href="/partners/" className={s.btnInk}>Стать партнёром</Link>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section id="faq" className={`container ${s.faq}`}>
        <div className={s.faqSide}>
          <span className={`${s.eyebrow} ${s.dOnly}`}>FAQ</span>
          <h2 className={`${s.h2} ${s.ordA}`}>Частые вопросы</h2>
          <Link href="/faq/" className={`${s.ulink} ${s.faqAll} ${s.ordC}`}>Все вопросы →</Link>
          <div className={`${s.support} ${s.ordD}`}>
            <b>Поддержка TG Market — на связи в Telegram</b>
            <span>Не нашли ответ? Напишите в поддержку — ответим в Telegram.</span>
            <a href={SUPPORT_URL}>Написать в поддержку</a>
          </div>
        </div>
        <div className={s.ordB}><FaqList /></div>
      </section>

      <Footer />
    </>
  );
}
