import { CategoryType } from "../../../@types/TrackType";
import styles from "./style.module.css";

type CategoryDataProps = {
  category: CategoryType;
  tracksNumber: number | undefined;
};

function CategoryData({ category, tracksNumber }: CategoryDataProps) {
  return (
    <div id={styles.categoryData}>
      <div>
        <img
          id={styles.catThumbnail}
          src={`/categories/${category.thumbnail}`}
          alt={`Illustration pour la categorie ${category.name}`}
        />
        {tracksNumber && tracksNumber > 0 && (
          <p id={styles.tracksNumber}>{tracksNumber} titres</p>
        )}
      </div>
    </div>
  );
}

export default CategoryData;
