import { TrackType } from "../../@types/TrackType";
import { IoPlayCircle } from "react-icons/io5";
import styles from "./style.module.css";
import { useTrackContext } from "../../context/TrackContext";
import { usePlayerContext } from "../../context/PlayerContext";

type TrackProps = {
  track: TrackType;
};

function Track({ track }: TrackProps) {
  const { setTrack } = useTrackContext();
  const { setIsPlaying } = usePlayerContext();

  const handlePlayClick = () => {
    setIsPlaying(false);
    setTrack(track);
    setIsPlaying(true);
  };

  return (
    <div className={styles.track}>
      <div className={styles.thumbnail}>
        <img
          src={`/tracks/${track.thumbnail}`}
          alt={`pochette du titre ${track.title}`}
        />
      </div>
      <div className={styles.data}>
        <h3>{track.title}</h3>
        <p>{track.artist}</p>
      </div>
      <IoPlayCircle className={styles.play} onClick={handlePlayClick} />
    </div>
  );
}

export default Track;
