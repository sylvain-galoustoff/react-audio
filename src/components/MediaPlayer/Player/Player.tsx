import styles from "./style.module.css";
import commonStyles from "../style.module.css";
import { IoPlayCircle, IoPauseCircle } from "react-icons/io5";
import { useTrackContext } from "../../../context/TrackContext";
import { useEffect, useRef } from "react";
import { usePlayerContext } from "../../../context/PlayerContext";

function Player() {
  const { track } = useTrackContext();
  const audioRef = useRef<HTMLAudioElement | null>(null);
  const { isPlaying, setIsPlaying } = usePlayerContext();

  useEffect(() => {
    if (audioRef.current && track) {
      audioRef.current.load();
      if (isPlaying) {
        audioRef.current.play().catch((error) => {
          console.error("Erreur de lecture", error);
        });
      }
    }
  }, [track, isPlaying]);

  const togglePlayPause = () => {
    if (audioRef.current) {
      if (isPlaying) {
        audioRef.current.pause();
      } else {
        audioRef.current.play();
      }
    }
    setIsPlaying(!isPlaying);
  };

  return (
    <div className={commonStyles.playerPart} id={styles.player}>
      <audio ref={audioRef} src={`/songs/${track?.audio}`} />

      {isPlaying ? (
        <IoPauseCircle id={styles.playButton} onClick={togglePlayPause} />
      ) : (
        <IoPlayCircle id={styles.playButton} onClick={togglePlayPause} />
      )}
    </div>
  );
}

export default Player;
