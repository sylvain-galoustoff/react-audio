import { Link } from "react-router-dom";
import { CategoryType } from "../../@types/TrackType";
import styles from "./style.module.css";

type CategoryCardProps = {
  category: CategoryType;
};

function CategoryCard({ category }: CategoryCardProps) {
  return (
    <Link
      to={`/category/${category.id}`}
      className={styles.card}
      title={`Voir les titres dans la catégorie ${category.name}`}
    >
      <img
        src={`/categories/${category.thumbnail}`}
        alt={`Illustration pour la categorie ${category.name}`}
      />
    </Link>
  );
}

export default CategoryCard;
