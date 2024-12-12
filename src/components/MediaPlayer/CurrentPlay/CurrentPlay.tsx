import styles from "./style.module.css";
import commonStyles from "../style.module.css";
import { useTrackContext } from "../../../context/TrackContext";
import { IoDisc } from "react-icons/io5";

function CurrentPlay() {
  const { track } = useTrackContext();

  return (
    <div className={commonStyles.playerPart} id={styles.currentPlay}>
      <div id={styles.thumbnail}>
        {track ? <img src={`/tracks/${track?.thumbnail}`} alt="" /> : <IoDisc />}
      </div>
      <div id={styles.trackData}>
        <p id={styles.label}>Lecture en cours</p>
        <h3 id={styles.title}>{track ? track.title : "Aucun titre en cours"}</h3>
      </div>
    </div>
  );
}

export default CurrentPlay;
