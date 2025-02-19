import styles from "./styles.module.scss";

type Props = {
  label: string;
  value: string;
};

const regex = /\*([^*]+)\*/g;

export const SkillsRow = ({ label, value }: Props) => {
  return (
    <tr className={styles.tableRow}>
      <td className="pe-0 text-start fw-bold">{label}:</td>
      <td
        className="text-start"
        dangerouslySetInnerHTML={{
          __html: value
            .split(", ")
            .map((v) => v.replaceAll(regex, "<b>$1</b>"))
            .join(", "),
        }}
      ></td>
    </tr>
  );
};
