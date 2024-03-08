import CN from "classnames";
import { DurationComponent } from "../../sections/DurationComponent";
import { ReactNode } from "react";

type Props = {
  company: ReactNode;
  content?: ReactNode;
  endDate: Date | null;
  includeDuration?: boolean;
  initialDate: Date;
  title: ReactNode;
  continuousLine?: boolean;
};

export const MainContent = ({
  company,
  content,
  continuousLine = false,
  endDate,
  includeDuration = false,
  initialDate,
  title,
}: Props) => (
  <>
    <div
      className={CN("row dark-blue content", { "reduced-pb": continuousLine })}
    >
      <DurationComponent
        continuousLine={continuousLine}
        endDate={endDate}
        initialDate={initialDate}
        includeDuration={includeDuration}
      />
      <div className="ps-0 pe-2 col-9">
        <p className="mb-0 activity fw-bold">{title}</p>
        <p className="mb-0 local">{company}</p>
        {content}
      </div>
    </div>
  </>
);
