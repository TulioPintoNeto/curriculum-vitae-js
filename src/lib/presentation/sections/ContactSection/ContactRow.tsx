type Props = {
  iconClassName: string;
  text: string;
  paragraphClassName?: string;
}

export const ContactRow = ({iconClassName, text, paragraphClassName}: Props) => (
  <div className="row mx-0 mb-1">
    <div className="col-1 p-0 d-flex align-items-center justify-content-center">
      <i className={`${iconClassName} gray`}></i>
    </div>
    <div className="col-11 pe-0">
      <p className="gray mb-0">{text}</p>
    </div>
  </div>
);
