import styles from "./Adult.module.scss";
import Image from "next/image";
import adultImg from "../../../../../public/images/adult.jpg";

interface IAdult {
  title: string;
  description1: string;
  description2: string;
  description3: string;
}

const Adultt: IAdult[] = [
  {
    title: "Взрослый",
    description1:
      "Менее тяжелые формы СМА могут возникать и диагностироваться в зрелом возрасте.",
    description2:
      "По сравнению с СМА у детей, СМА у взрослых может иметь более легкие симптомы, но без патогенетической терапии пациенты со СМА 2-3 типа неуклонно теряют двигательные навыки.",
    description3:
      "По сравнению с СМА в детстве, течение СМА у взрослых может быть более коварным и трудным для распознавания.",
  },
];

const Adult = () => {
  return (
    <div className={styles.adultWrapper}>
      {Adultt.map((item) => (
        <>
          <h3>{item.title}</h3>
          <Image
            src={adultImg}
            alt="Взрослый человек"
            width={300}
            height={300}
          />
          <div className={styles.descriptions}>
            <div>
              <p>{item.description1}</p>
            </div>
            <div>
              <p>{item.description2}</p>
            </div>
            <div>
              <p>{item.description3}</p>
            </div>
          </div>
        </>
      ))}
    </div>
  );
};

export default Adult;
