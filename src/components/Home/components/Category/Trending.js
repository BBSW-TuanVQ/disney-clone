import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { selectTrending } from "../../../../features/movie/movieSlice";
import styles from "./Category.module.scss";

function Trending() {
  const movies = useSelector(selectTrending);

  return (
    <div className={`${styles.container}`}>
      <h4>Trendings</h4>
      <div className={`${styles.content}`}>
        {movies &&
          movies.map((movie, key) => {
            return (
              <div className={`${styles.wrap}`} key={key}>
                <Link to={"/detail/" + movie.id}>
                  <img src={movie.cardImg} alt={movie.title} />
                </Link>
              </div>
            );
          })}
      </div>
    </div>
  );
}

export default Trending;
