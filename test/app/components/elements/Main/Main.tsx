import { FC } from "react";
import Adult from "./Adult/Adult";
import Kid from "./Kid/Kid";
import styles from "./Main.module.scss";

const Main: FC = () => {
  return (
    <div className={styles.main}>
      <div className={styles.mainWrapper}>
        <Adult />
        <Kid />
      </div>
      <div className={styles.description}>
        <p>
          Сообщает ли один из ваших пациентов о следующих симптомах?{" "}
          <span>(нажмите на любую иконку и узнайте больше)</span>
        </p>
      </div>
    </div>
  );
};

export default Main;
