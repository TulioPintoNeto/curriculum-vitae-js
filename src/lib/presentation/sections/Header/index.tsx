import { ContactSection } from "../ContactSection";
import styles from "./styles.module.scss";
import CN from "classnames";

export const Header = () => {
  return (
    <div className="my-5 d-flex justify-content-center">
      <div className={CN("me-3", "pe-5", styles.headerTitles)}>
        <h2>Tulio Pinto Neto</h2>
        <h3>Software Engineer</h3>
      </div>
      <ContactSection />
    </div>
  );
};
