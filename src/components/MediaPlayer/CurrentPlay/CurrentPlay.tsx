import styles from "./style.module.css";
import commonStyles from "../style.module.css";
import { useTrackContext } from "../../../context/TrackContext";

function CurrentPlay() {
  const { track } = useTrackContext();

  return (
    <div className={commonStyles.playerPart} id={styles.currentPlay}>
      <div id={styles.thumbnail}>
        <img src={`/tracks/${track?.thumbnail}`} alt="" />
      </div>
      <div id={styles.trackData}>
        <p id={styles.label}>Lecture en cours</p>
        <h3 id={styles.title}>{track?.title}</h3>
      </div>
    </div>
  );
}

export default CurrentPlay;
