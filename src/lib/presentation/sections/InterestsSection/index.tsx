import { PropsWithChildren } from "react";
import { locales } from "../../../locales";
import { useLanguage } from "../../context/language";
import CN from "classnames";
import { Title } from "../../components/Title";

type InterestProps = PropsWithChildren & {
  icon: string;
};

const Interest = ({ children, icon }: InterestProps) => (
  <div className="d-flex align-items-center gap-3">
    <i className={CN(icon, "fas mb-1")} aria-hidden="true"></i>
    <p className="mb-0">{children}</p>
  </div>
);

export const InterestsSection = () => {
  const language = useLanguage();
  const { title, chess, physicalActivity, music } =
    locales.skills.interestsSection;

  return (
    <div>
      <Title>{title[language]}</Title>
      <div className="mt-4 d-flex gap-5">
        <Interest icon="fa-chess">{chess[language]}</Interest>
        <Interest icon="fa-biking">{physicalActivity[language]}</Interest>
        <Interest icon="fa-music">{music[language]}</Interest>
      </div>
    </div>
  );
};
