import { useEffect, useState } from "react";
import CategoryCard from "../../components/CategoryCard/CategoryCard";
import styles from "./style.module.css";
import { CategoryType } from "../../@types/TrackType";
import { fetchCategories } from "../../controllers/api";

function Home() {
  const [categories, setCategories] = useState<CategoryType[] | null>([]);

  useEffect(() => {
    const loadCategories = async () => {
      try {
        const data = await fetchCategories();
        setCategories(data);
      } catch (err: unknown) {
        if (err instanceof Error) {
          console.error(err.message);
        } else {
          console.error("Erreur inconnue");
        }
      }
    };
    loadCategories();
  }, []);

  const renderCategories =
    categories &&
    categories.map((category) => <CategoryCard key={category.id} category={category} />);

  return (
    <main id={styles.home}>
      <h1>Catégories</h1>
      <div id={styles.categories}>{renderCategories}</div>
    </main>
  );
}

export default Home;
