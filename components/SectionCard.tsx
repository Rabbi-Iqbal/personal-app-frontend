import { Typography } from "@material-ui/core";
import styles from "../styles/SectionCard.module.scss";

const SectionCard = (props) => {
  const { title } = props;
  return (
    <div className={styles.container}>
      <Typography variant="h4">{title}</Typography>
    </div>
  );
};
export default SectionCard;
