import { categories } from "../../data/mocks";
import CategoryCard from "../CategoryCard/CategoryCard";
import styles from "./style.module.css";

function CategorySidebar() {
  const renderCats = categories.map((category) => (
    <CategoryCard key={category.id} category={category} />
  ));
  return <div id={styles.sidebar}>{renderCats}</div>;
}

export default CategorySidebar;
