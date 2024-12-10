import CurrentPlay from "./CurrentPlay/CurrentPlay";
import Player from "./Player/Player";
import Volume from "./Volume/Volume";
import styles from "./style.module.css";

function MediaPlayer() {
  return (
    <div id={styles.mediaPlayer}>
      <CurrentPlay />
      <Player />
      <Volume />
    </div>
  );
}

export default MediaPlayer;
