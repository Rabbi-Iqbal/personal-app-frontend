import { Typography } from "@mui/material";
import styles from "../styles/BlogCard.module.scss";
import PersonIcon from "@mui/icons-material/Person";

const BlogCard = (props) => {
  const { author, title, summary, imgSrc, date, readTime, onClick } = props;
  return (
    <div>
      <div className={styles.container} onClick={onClick}>
        <div>
          <div className={styles.author}>
            <PersonIcon sx={{ fontSize: "15px", marginRight: "5px" }} />
            <div className={styles.metaData}>{author}</div>
          </div>

          <span className={styles.title}>{title}</span>
          <div className={styles.text}>{summary}</div>
          <div className={styles.metaData}>
            <span>{date}</span>
            <span> • </span>
            <span>{readTime} min read</span>
          </div>
        </div>

        <div className={styles.imageContainer}>
          <img className={styles.image} src={imgSrc}></img>
        </div>
      </div>
    </div>
  );
};
export default BlogCard;
