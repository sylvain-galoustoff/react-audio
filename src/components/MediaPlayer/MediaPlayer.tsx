import styles from "./style.module.css";

function MediaPlayer() {
  return (
    <div id={styles.mediaPlayer}>
      <div className={styles.playerPart} id={styles.currentPlay}>
        Current play
      </div>
      <div className={styles.playerPart} id={styles.controls}>
        Controls
      </div>
      <div className={styles.playerPart} id={styles.volume}>
        Volume
      </div>
    </div>
  );
}

export default MediaPlayer;
