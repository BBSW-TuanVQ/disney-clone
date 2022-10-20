import { useDispatch, useSelector } from "react-redux";
import ImgSlider from "./components/Slider/ImgSlider";
import NewDisney from "./components/Category/NewDisney";
import Originals from "./components/Category/Originals";
import Recommends from "./components/Category/Recommends";
import Trending from "./components/Category/Trending";
import Viewers from "./components/Viewers/Viewers";

import db from "../../firebase";
import { setMovies } from "../../features/movie/movieSlice";
import { selectUserName } from "../../features/user/userSlice";
import { useEffect, useState } from "react";
import { collection, getDocs } from "firebase/firestore";

import styles from "./Home.module.scss"

function Home() {
  const dispatch = useDispatch();
  const userName = useSelector(selectUserName);

  async function getData() {
    try {
      const querySnapshot = await getDocs(collection(db, "movies"));
      let recommends = [];
      let newDisneys = [];
      let originals = [];
      let trending = [];
      querySnapshot.forEach((doc) => {
        switch (doc.data().type) {
          case "recommend":
            recommends = [...recommends, { id: doc.id, ...doc.data() }];
            break;
          case "new":
            newDisneys = [...newDisneys, { id: doc.id, ...doc.data() }];
            break;
          case "original":
            originals = [...originals, { id: doc.id, ...doc.data() }];
            break;
          case "trending":
            trending = [...trending, { id: doc.id, ...doc.data() }];
            break;
          default:
            break;
        }
      });
      dispatch(
        setMovies({
          recommend: recommends,
          newDisney: newDisneys,
          original: originals,
          trending: trending,
        })
      );
    } catch (e) {
      console.error("Error adding document: ", e);
    }
  }

  useEffect(() => {
    getData();
  }, [userName]);
  return (
    <div className={`${styles.container}`}>
      <ImgSlider />
      <Viewers />
      <Recommends />
      <NewDisney />
      <Originals />
      <Trending />
    </div>
  );
}

export default Home;
