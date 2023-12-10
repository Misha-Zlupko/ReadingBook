import Phone from "@/public/Phone.png";
import Image from "next/image";

import s from "./BoxPhoneComponent.module.scss";

export const BoxPhoneComponent = () => {
  return (
    <section className={s.box}>
      <Image src={Phone} alt="Phone" className={s.box__phone} />
    </section>
  );
};
