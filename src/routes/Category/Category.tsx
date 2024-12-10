import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import styles from "./style.module.css";
import { categories, tracks } from "../../data/mocks";
import { CategoryType, TrackType } from "../../@types/TrackType";
import CategoryData from "./CategoryData/CategoryData";
import Track from "../../components/Track/Track";
import CategorySidebar from "../../components/CategorySidebar/CategorySidebar";

function Category() {
  const params = useParams();
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

  const renderTracks =
    tracksList && tracksList.map((track) => <Track key={track.id} track={track} />);

  return (
    <div className="content" id={styles.tracksPage}>
      <main id={styles.main}>
        <h1>{currentCat?.name}</h1>
        {currentCat && (
          <div id={styles.content}>
            <CategoryData category={currentCat} tracksNumber={tracksList?.length} />
            <div id={styles.tracks}>{renderTracks}</div>
          </div>
        )}
      </main>
      <CategorySidebar />
    </div>
  );
}

export default Category;
