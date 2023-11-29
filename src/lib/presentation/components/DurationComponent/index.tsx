import moment from "moment";
import { useLanguage } from "../../context/language";
import { locales } from "../../../locales";

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
  const years = endMoment.diff(initialMoment, "years", true) + 1/12;
  const roundedYears = Math.round(years * 2) / 2;

  const yearStr =
    roundedYears === 1 ? year.singular[language] : year.plural[language];
  const monthStr =
    months === 1 ? month.singular[language] : month.plural[language];
  const duration =
    roundedYears >= 1 ? `${roundedYears} ${yearStr}` : `${months} ${monthStr}`;

  const end = endMoment.isSame(moment(), "date") ? "Actual" : endMoment.year();
  const yearsDuration = initialMoment.year() === end ? end : `${initialMoment.year()} - ${end}`

  console.table({initialDate, endDate, years, months, roundedYears});

  return (
    <div className="ps-2 pe-0 col-3">
      <p className="mb-0 year fw-bold">
        {yearsDuration}
      </p>
      <span>{includeDuration && duration}</span>
    </div>
  );
};
