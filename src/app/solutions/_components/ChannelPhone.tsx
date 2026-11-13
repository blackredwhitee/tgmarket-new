"use client";
import { useEffect, useState } from "react";
import type { StaticImageData } from "next/image";
import s from "./ui.module.css";

type Props = { channel: string; posts: string[]; ava: StaticImageData; cover: StaticImageData; title: string; price: string; btn: string };

/** Телефон с постом в канале; уведомление «Новая продажа» появляется и скрывается каждые 2,6 с. */
export default function ChannelPhone({ channel, posts, ava, cover, title, price, btn }: Props) {
  const [notif, setNotif] = useState(true);

  useEffect(() => {
    const t = setInterval(() => setNotif((v) => !v), 2600);
    return () => clearInterval(t);
  }, []);

  return (
    <div className={s.phone} aria-hidden="true">
      <div className={s.screen}>
        <div className={s.head}>
          <img src={ava.src} alt="" />
          <div className={s.headName}><b>{channel}</b><span>канал</span></div>
        </div>
        <div className={s.feed}>
          {posts.map((m, i) => (
            <div key={i} className={s.msg}>{m}<span className={s.msgMeta}>{["1,2K", "860"][i]} · {["10:14", "18:30"][i]}</span></div>
          ))}
          <div className={s.post}>
            <img src={cover.src} alt="" />
            <div className={s.postText}><b className={s.postTitle}>{title}</b><b className={s.postPrice}>{price}</b></div>
            <div className={s.pay}>{btn}</div>
          </div>
        </div>
        {notif && (
          <div className={s.notif}>
            <span className={s.dot} />
            <div className={s.notifText}><b>Новая продажа</b><span>TG Market Seller</span></div>
            <b className={s.notifSum}>+{price}</b>
          </div>
        )}
      </div>
    </div>
  );
}
