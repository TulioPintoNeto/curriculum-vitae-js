import { DurationComponent } from "../../sections/DurationComponent";
import { ReactNode } from "react";
import styles from "./styles.module.scss";

type Props = {
  company: ReactNode;
  content?: ReactNode;
  endDate: Date | null;
  includeDuration?: boolean;
  initialDate: Date;
  title: ReactNode;
  type?: ReactNode;
};

export const MainContent = ({
  company,
  content,
  endDate,
  includeDuration = false,
  initialDate,
  title,
  type,
}: Props) => (
  <div className="dark-blue content ps-0">
    <div className="d-flex justify-content-between">
      <div>
        <p className="mb-0 activity fw-bold text-align-left">{title}</p>
        <p className="mb-0 fst-italic text-align-left d-flex">
          {company} {type && `(${type})`}
        </p>
      </div>
      <DurationComponent
        endDate={endDate}
        initialDate={initialDate}
        includeDuration={includeDuration}
      />
    </div>
    {content}
  </div>
);
