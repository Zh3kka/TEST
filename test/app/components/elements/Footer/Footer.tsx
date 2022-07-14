import { FC } from "react";
import Image from "next/image";

import styles from "./Footer.module.scss";

import caruselImg from "../../../../public/images/carusel.png";
import image1 from "../../../../public/images/1.png";
import image2 from "../../../../public/images/2.png";
import image3 from "../../../../public/images/3.png";
import image4 from "../../../../public/images/4.png";
import image5 from "../../../../public/images/5.png";
import image6 from "../../../../public/images/6.png";
import image7 from "../../../../public/images/7.png";
import image8 from "../../../../public/images/8.png";
import plus from "../../../../public/images/plus.png";

const Footer: FC = () => {
  return (
    <div className={styles.footer}>
      <div className={styles.wrapper_1}>
        <div className={styles.plus}>
          <Image src={plus} height={61} width={61} />
        </div>
        <Image
          className={styles.image1}
          src={image4}
          alt="illness"
          width={110}
          height={110}
        />
      </div>
      <div className={styles.wrapper_2}>
        <div className={styles.plus}>
          <Image src={plus} height={61} width={61} />
        </div>
        <Image
          className={styles.image2}
          src={image2}
          alt="illness"
          width={110}
          height={110}
        />
      </div>
      <div className={styles.wrapper_3}>
        <div className={styles.plus}>
          <Image src={plus} height={61} width={61} />
        </div>
        <Image
          className={styles.image3}
          src={image3}
          alt="illness"
          width={110}
          height={110}
        />
      </div>
      <div className={styles.wrapper_4}>
        <div className={styles.plus}>
          <Image src={plus} height={61} width={61} />
        </div>
        <Image
          className={styles.image4}
          src={image1}
          alt="illness"
          width={110}
          height={110}
        />
      </div>
      <Image
        src={caruselImg}
        className={styles.caruselImg}
        width={315}
        height={315}
      />
      <div className={styles.wrapper_5}>
        <div className={styles.plus}>
          <Image src={plus} height={61} width={61} />
        </div>
        <Image
          className={styles.image5}
          src={image5}
          alt="illness"
          width={110}
          height={110}
        />
      </div>
      <div className={styles.wrapper_6}>
        <div className={styles.plus}>
          <Image src={plus} height={61} width={61} />
        </div>
        <Image
          className={styles.image6}
          src={image6}
          alt="illness"
          width={110}
          height={110}
        />
      </div>
      <div className={styles.wrapper_7}>
        <div className={styles.plus}>
          <Image src={plus} height={61} width={61} />
        </div>
        <Image
          className={styles.image7}
          src={image7}
          alt="illness"
          width={110}
          height={110}
        />
      </div>
      <div className={styles.wrapper_8}>
        <div className={styles.plus}>
          <Image src={plus} height={61} width={61} />
        </div>
        <Image
          className={styles.image8}
          src={image8}
          alt="illness"
          width={110}
          height={110}
        />
      </div>
    </div>
  );
};

export default Footer;
