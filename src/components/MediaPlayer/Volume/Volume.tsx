import styles from "./style.module.css";
import commonStyles from "../style.module.css";

function Volume() {
  return (
    <div className={commonStyles.playerPart} id={styles.volume}>
      Todo : volume control
    </div>
  );
}

export default Volume;
