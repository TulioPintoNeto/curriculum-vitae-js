import { ContactRow } from "./ContactRow";

export const ContactSection = () => {
  return (
    <div>
      <ContactRow iconClassName="fas fa-map-marker-alt" text="Cambridge - UK" />
      <ContactRow iconClassName="fab fa-github" text="/TulioPintoNeto" />
      <ContactRow iconClassName="fab fa-linkedin" text="/tulio-pinto-neto" />
      <ContactRow iconClassName="fas fa-mobile-alt" text="+44 07423 380429" />
      <ContactRow
        iconClassName="fas fa-envelope"
        text="tulio.pinto.neto@gmail.com"
      />
    </div>
  );
};
