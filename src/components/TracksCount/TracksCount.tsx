import styles from "./style.module.css";

type TracksCountProps = {
  count: number | undefined;
};

function TracksCount({ count }: TracksCountProps) {
  return count ? (
    <p id={styles.tracksNumber}>{count} titres</p>
  ) : (
    <p id={styles.tracksNumber}>Aucun titre disponible</p>
  );
}

export default TracksCount;
