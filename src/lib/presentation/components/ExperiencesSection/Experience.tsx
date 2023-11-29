import { DurationComponent } from "../DurationComponent";

type Props = {
  company: string;
  endDate: Date | null;
  initialDate: Date;
  responsabilities: string[];
  title: string;
  type: string;
};

export const Experience = ({
  company,
  endDate,
  initialDate,
  responsabilities,
  title,
  type,
}: Props) => (
  <>
    <div className="row dark-blue content">
      <DurationComponent
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
