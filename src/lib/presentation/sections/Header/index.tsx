import styles from "./styles.module.scss";
import CN from "classnames";

export const Header = () => {
  return (
    <div className="row justify-content-end align-items-center" id="header">
      <div className={CN("my-5", "me-5", "pe-5", styles.headerTitles)}>
        <h2>Tulio Pinto Neto</h2>
        <h3>Software Engineer</h3>
      </div>
    </div>
  );
};
