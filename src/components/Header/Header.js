/* eslint-disable react-hooks/exhaustive-deps */
import styled from "styled-components";
import { signInWithPopup, signOut } from "firebase/auth";
import { auth, provider } from "../../firebase";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import {
  selectUserName,
  selectUserPhoto,
  setUserLoginDetails,
  setSignOutState,
} from "../../features/user/userSlice";
import { useEffect } from "react";
import styles from "./Header.module.scss";

const Header = (props) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const userName = useSelector(selectUserName);
  const userPhoto = useSelector(selectUserPhoto);

  useEffect(() => {
    auth.onAuthStateChanged(async (user) => {
      if (user) {
        setUser(user);
        navigate("/home");
      }
    });
  }, [userName]);

  const handleAuth = () => {
    if (!userName) {
      signInWithPopup(auth, provider)
        .then((result) => {
          setUser(result.user);
        })
        .catch((error) => {
          alert(error.message);
        });
    } else if (userName) {
      signOut(auth)
        .then(() => {
          dispatch(setSignOutState());
          navigate("/");
        })
        .catch((err) => {
          alert(err.message);
        });
    }
  };

  const setUser = (user) => {
    dispatch(
      setUserLoginDetails({
        name: user.displayName,
        email: user.email,
        photo: user.photoURL,
      })
    );
  };

  // const handleClickWatchList = () => {
  //   navigate('/watch-list')
  // }

  return (
    <nav className={`${styles.nav}`}>
      <Link to="/home" className={`${styles.logo}`}>
        <img src="/images/logo.svg" alt="Disney+" />
      </Link>
      {!userName ? (
        <a href="#" className={`${styles.login}`} onClick={handleAuth}>
          Login
        </a>
      ) : (
        <>
          <div className={`${styles.navMenu}`}>
            <Link to="/home">
              <img src="/images/home-icon.svg" alt="HOME" />
              <span>HOME</span>
            </Link>
            <Link to={`/watch-list`}>
              <img src="/images/watchlist-icon.svg" alt="WATCHLIST" />
              <span>WATCH LIST</span>
            </Link>
            <Link to="/movies">
              <img src="/images/movie-icon.svg" alt="MOVIES" />
              <span>MOVIES</span>
            </Link>
          </div>
          <div className={`${styles.signOut}`}>
            <img
              className={`${styles.userImage}`}
              src={userPhoto}
              alt={userName}
            />
            <div className={`${styles.dropDown}`}>
              <span onClick={handleAuth}>Sign Out</span>
            </div>
          </div>
        </>
      )}
    </nav>
  );
};

export default Header;
