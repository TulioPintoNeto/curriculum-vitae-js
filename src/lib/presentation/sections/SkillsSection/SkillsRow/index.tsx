import styles from "./styles.module.scss";
import CN from 'classnames';

type Props = {
  label: string;
  value: string;
};

export const SkillsRow = ({ label, value }: Props) => {
  return (
    <tr className={styles.tableRow}>
      <td className="pe-0 text-start fw-bold">{label}:</td>
      <td className="text-start">{value}</td>
    </tr>
  );
};
