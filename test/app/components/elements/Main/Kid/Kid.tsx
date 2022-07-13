import styles from './Kid.module.scss';
import Image from "next/image";
import kidImg from "../../../../../public/images/kid.jpg";

interface IKid {
  title: string;
  description1: string;
  description2: string;
}

const Kidd: IKid[] = [
  {
    title: "Ребенок",
    description1:
      "Ребенок, плохо удерживающий голову, когда ему придают сидячее положение, с вялыми движениями нижних конечностей или с трудом тянущийся к предметам, но при этом сосмысленным и ярким взглядом, улыбающийся и социально активный, вызывает настороженность в отношении наличия СМА.",
    description2:
      "Младенцам со СМА необходимо экстренное направление к специалисту, ранняя диагностика и обеспечение терапией, спасающей жизнь, поскольку эти мотонейроны очень быстро подвергаются дегенерации при прогрессировании заболевания",
  },
];

const Kid = () => {
  return (
    <div className={styles.kidWrapper}>
      {Kidd.map((item) => (
        <>
          <h3>{item.title}</h3>
          <Image
            src={kidImg}
            alt="Ребенок"
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
          </div>
        </>
      ))}
    </div>
  );
};

export default Kid;
