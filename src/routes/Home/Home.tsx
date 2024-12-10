import CategoryCard from "../../components/CategoryCard/CategoryCard";
import { categories } from "../../data/mocks";
import styles from "./style.module.css";

function Home() {
  const renderCategories = categories.map((category) => (
    <CategoryCard key={category.id} category={category} />
  ));

  return (
    <main id={styles.home}>
      <h1>Catégories</h1>
      <div id={styles.categories}>{renderCategories}</div>
    </main>
  );
}

export default Home;
