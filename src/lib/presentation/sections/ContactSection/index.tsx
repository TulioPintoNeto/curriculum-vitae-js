import { ContactRow } from "./ContactRow";
import styles from "./styles.module.scss";

export const ContactSection = () => {
  return (
    <div className={styles.contactSection}>
      <ContactRow iconClassName="fas fa-map-marker-alt" text="Cambridge - UK" />
      <a href="https://github.com/TulioPintoNeto/">
        <ContactRow iconClassName="fab fa-github" text="/TulioPintoNeto" />
      </a>
      <a href="https://www.linkedin.com/in/tulio-pinto-neto/">
        <ContactRow iconClassName="fab fa-linkedin" text="/tulio-pinto-neto" />
      </a>
      <ContactRow iconClassName="fas fa-mobile-alt" text="+44 07423 380429" />
      <ContactRow
        iconClassName="fas fa-envelope"
        text="tulio.pinto.neto@gmail.com"
      />
    </div>
  );
};
