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
  <>
    <div
      className={CN("row dark-blue content", { "reduced-pb": continuousLine })}
    >
      <DurationComponent
        continuousLine={continuousLine}
        endDate={endDate}
        initialDate={initialDate}
        includeDuration
      />
      <div className="ps-0 pe-2 col-9">
        <p className="mb-0 activity fw-bold">
          ({type}) {title}
        </p>
        <p className="mb-0 local">{company}</p>
        {responsabilities.map((responsability) => (
          <p className="mb-0 description" key={responsability}>
            🞄 {responsability}
          </p>
        ))}
      </div>
    </div>
  </>
);
