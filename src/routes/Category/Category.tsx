import { useNavigate, useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { IoArrowBack } from "react-icons/io5";
import { categories, tracks } from "../../data/mocks";
import { CategoryType, TrackType } from "../../@types/TrackType";
import CategoryData from "./CategoryData/CategoryData";
import CategorySidebar from "../../components/CategorySidebar/CategorySidebar";
import TrackList from "../../components/TrackList/TrackList";
import styles from "./style.module.css";

function Category() {
  const params = useParams();
  const navigate = useNavigate();
  const [tracksList, setTracksList] = useState<TrackType[] | undefined>();
  const [currentCat, setCurrentCat] = useState<CategoryType>();

  useEffect(() => {
    const categoryId = Number(params.id);

    const filteredTracks = tracks.filter((track) => track.categoryId === categoryId);
    setTracksList(filteredTracks);

    const category = categories.filter((category) => category.id === categoryId);
    if (category.length > 0) {
      setCurrentCat(category[0]);
    }
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
        <CategoryData category={currentCat} tracksNumber={tracksList?.length} />
        <TrackList tracks={tracksList} />
        <CategorySidebar />
      </div>
    </main>
  );
}

export default Category;
