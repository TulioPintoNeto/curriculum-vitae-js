import { MainContent } from "../../components/MainContent";
import { DurationComponent } from "../DurationComponent";
import CN from "classnames";

type Props = {
  company: string;
  endDate: Date | null;
  initialDate: Date;
  responsabilities: string[];
  title: string;
  type: string;
  continuousLine?: boolean;
};

export const Experience = ({
  company,
  continuousLine = false,
  endDate,
  initialDate,
  responsabilities,
  title,
  type,
}: Props) => (
  <MainContent
    company={company}
    content={responsabilities.map((responsability) => (
      <p className="mb-0 description text-justify" key={responsability}>
        🞄 {responsability}
      </p>
    ))}
    endDate={endDate}
    includeDuration
    initialDate={initialDate}
    title={<>{title}</>}
    type={type}
  />
);
