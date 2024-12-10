import styles from "./style.module.css";
import { IoMusicalNote, IoCloudUpload } from "react-icons/io5";

function Topbar() {
  return (
    <header id={styles.header}>
      <div id={styles.logo}>
        <IoMusicalNote />
        <p id={styles.appName}>React Audio App</p>
      </div>
      <button type="button" id={styles.button}>
        <IoCloudUpload />
        Importer
      </button>
    </header>
  );
}

export default Topbar;
