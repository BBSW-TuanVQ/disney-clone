import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { collection, getDocs } from "firebase/firestore";
import db from "../../firebase";
import styles from "./WatchList.module.scss";
import { useEffect, useState } from "react";

function WatchList() {
  const [movies, setMovies] = useState();

  async function getData() {
    try {
      const querySnapshot = await getDocs(collection(db, "movies"));
      let data = [];
      querySnapshot.forEach((doc) => {
        data = [...data, { id: doc.id, ...doc.data() }];
      });
      setMovies(data);
    } catch (e) {
      console.error("Error adding document: ", e);
    }
  }

  useEffect(() => {
    getData();
  }, [movies]);

  const renderMovies = (item, key) => {
    if (item.watchList == true) {
      return (
        <div className={`${styles.wrap}`} key={key}>
          <Link to={"/detail/" + item.id}>
            <img src={item.cardImg} alt={item.title} />
          </Link>
        </div>
      );
    }
  };

  return (
    <div className={`${styles.container}`}>
      <h4>Watch List</h4>
      <div className={`${styles.content}`}>
        {movies && movies.map(renderMovies)}
      </div>
    </div>
  );
}

export default WatchList;
