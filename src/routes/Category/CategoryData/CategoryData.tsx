import { CategoryType } from "../../../@types/TrackType";
import TracksCount from "../../../components/TracksCount/TracksCount";
import styles from "./style.module.css";

type CategoryDataProps = {
  category?: CategoryType;
  tracksCount: number | undefined;
};

function CategoryData({ category, tracksCount }: CategoryDataProps) {
  return (
    <div id={styles.categoryData}>
      <div>
        <img
          id={styles.catThumbnail}
          src={`/categories/${category?.thumbnail}`}
          alt={`Illustration pour la categorie ${category?.name}`}
        />
        <TracksCount count={tracksCount} />
      </div>
    </div>
  );
}

export default CategoryData;
