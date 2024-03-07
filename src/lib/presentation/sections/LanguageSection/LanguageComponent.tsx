import { useLanguage } from "../../context/language";

type Props = {
  level: number;
  text: string;
};

const array5 = Array.from(Array(5).keys());

export const LanguageComponent = ({ level, text }: Props) => {
  const circles = array5.map((position) => (level > position ? "fas" : "far"));

  return (
    <div className="col-6">
      <p className="mb-0">{text}</p>
      {circles.map((circle, i) => (
        <i key={i} className={`${circle} fa-circle`}></i>
      ))}
    </div>
  );
};
