type Props = {
  company: string;
  endDate: Date;
  initialDate: Date;
  title: string;
};

export const Education = ({ company, endDate, initialDate, title }: Props) => {
  const endDateYear = endDate.getFullYear();
  const initialDateYear = initialDate.getFullYear();
  const years =
    endDate.toString() === initialDate.toString()
      ? initialDateYear
      : `${initialDateYear} - ${endDateYear}`;
      
  return (
    <div className="row dark-blue content">
      <div className="ps-2 pe-0 col-3">
        <p className="mb-0 year fw-bold">{years}</p>
      </div>
      <div className="ps-0 pe-2 col-9">
        <p className="mb-0 activity fw-bold">{title}</p>
        <p className="mb-0 local">{company}</p>
      </div>
    </div>
  );
};
