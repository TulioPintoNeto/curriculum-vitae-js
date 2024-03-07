import CN from "classnames";
import styles from "./styles.module.scss";

type Props = {
  level: number;
  text: string;
};

const array5 = Array.from(Array(5).keys());

export const LanguageComponent = ({ level, text }: Props) => {
  const circles = array5.map((position) => (level > position ? "fas" : "far"));

  return (
    <div className="d-flex align-items-center gap-3">
      <p className="mb-0">{text}</p>
      <div className="mb-1">
        {circles.map((circle, i) => (
          <i key={i} className={CN(circle, styles.icon, "fa-circle")}></i>
        ))}
      </div>
    </div>
  );
};
