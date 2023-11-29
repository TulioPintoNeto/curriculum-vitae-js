import { DurationComponent } from "../DurationComponent";

type Props = {
  company: string;
  endDate: Date;
  initialDate: Date;
  title: string;
};

export const Education = ({ company, endDate, initialDate, title }: Props) => {
  return (
    <div className="row dark-blue content">
      <DurationComponent endDate={endDate} initialDate={initialDate} />
      <div className="ps-0 pe-2 col-9">
        <p className="mb-0 activity fw-bold">{title}</p>
        <p className="mb-0 local">{company}</p>
      </div>
    </div>
  );
};
