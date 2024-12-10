import { TrackType } from "../../@types/TrackType";
import Track from "../Track/Track";
import styles from "./style.module.css";

type TrackListProps = {
  tracks?: TrackType[];
};

function TrackList({ tracks }: TrackListProps) {
  const renderTracks =
    tracks && tracks.map((track) => <Track key={track.id} track={track} />);

  return <div id={styles.tracks}>{renderTracks}</div>;
}

export default TrackList;
