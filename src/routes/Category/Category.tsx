import { useNavigate, useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { IoArrowBack } from "react-icons/io5";
import { CategoryType, TrackType } from "../../@types/TrackType";
import CategoryData from "./CategoryData/CategoryData";
import CategorySidebar from "../../components/CategorySidebar/CategorySidebar";
import TrackList from "../../components/TrackList/TrackList";
import styles from "./style.module.css";
import { fetchCategoryById, fetchTracksFromCategoryId } from "../../controllers/api";

function Category() {
  const params = useParams();
  const navigate = useNavigate();
  const [tracksList, setTracksList] = useState<TrackType[] | undefined>();
  const [currentCat, setCurrentCat] = useState<CategoryType>();

  useEffect(() => {
    const loadTracks = async () => {
      try {
        const data = await fetchTracksFromCategoryId(params.id);
        setTracksList(data);
      } catch (err: unknown) {
        if (err instanceof Error) {
          console.error(err.message);
        } else {
          console.error("Erreur inconnue");
        }
      }
    };
    loadTracks();

    const loadCategory = async () => {
      try {
        const data = await fetchCategoryById(params.id);
        setCurrentCat(data);
      } catch (error) {
        if (error instanceof Error) {
          console.error(error.message);
        } else {
          console.error("Erreur inconnue");
        }
      }
    };
    loadCategory();
  }, [params.id]);

  const handleBack = () => {
    navigate(-1);
  };

  return (
    <main id={styles.tracksPage}>
      <div id={styles.header}>
        <IoArrowBack id={styles.backButton} onClick={handleBack} />{" "}
        <h1>{currentCat?.name}</h1>
      </div>
      <div id={styles.main}>
        <CategoryData category={currentCat} tracksCount={tracksList?.length} />
        <TrackList tracks={tracksList} />
        <CategorySidebar />
      </div>
    </main>
  );
}

export default Category;
