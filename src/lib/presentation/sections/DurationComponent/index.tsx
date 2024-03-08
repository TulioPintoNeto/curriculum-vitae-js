import moment from "moment";
import { useLanguage } from "../../context/language";
import { locales } from "../../../locales";
import CN from "classnames";
import styles from "./styles.module.scss";

type Props = {
  endDate: Date | null;
  initialDate: Date;
  includeDuration?: boolean;
};

export const DurationComponent = ({
  endDate,
  initialDate,
  includeDuration = false,
}: Props) => {
  const language = useLanguage();
  const { year, month } = locales.duration;

  const endMoment = moment(endDate);
  const initialMoment = moment(initialDate);
  const months = endMoment.diff(initialMoment, "months") + 1;
  const years = endMoment.diff(initialMoment, "years", true) + 1 / 12;
  const roundedYears = Math.round(years * 2) / 2;

  const yearStr =
    roundedYears === 1 ? year.singular[language] : year.plural[language];
  const monthStr =
    months === 1 ? month.singular[language] : month.plural[language];
  const duration =
    roundedYears >= 1 ? `${roundedYears} ${yearStr}` : `${months} ${monthStr}`;

  const end = endMoment.isSame(moment(), "date") ? "Present" : endMoment.year();
  const yearsDuration = `${initialMoment.year()} - ${end}`;

  return (
    <div className="d-flex flex-column align-items-end">
      <span className="fw-bold mb-0"> {yearsDuration}</span>
      <span className={CN("mb-0", styles.duration)}>
        {includeDuration && `(${duration})`}
      </span>
    </div>
  );
};
