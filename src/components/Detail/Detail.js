/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import styled from "styled-components";
import db from "../../firebase";
import { doc, getDoc } from "firebase/firestore";
import ReactPlayer from "react-player";
import { Box, Modal } from "@mui/material";
import styles from "./Detail.module.scss";

const Detail = (props) => {
  const { id } = useParams();
  const [detailData, setDetailData] = useState();
  const navigate = useNavigate();

  const [open, setOpen] = useState(false);
  const [play, setPlay] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => {
    setOpen(false);
    setPlay(false);
  };

  async function getData() {
    const docRef = doc(db, "movies", id);
    const docSnap = await getDoc(docRef);

    if (docSnap.exists()) {
      setDetailData(docSnap.data());
    } else {
      // doc.data() will be undefined in this case
      console.log("No such document!");
    }
  }

  useEffect(() => {
    getData();
  }, [id]);

  const handleClickPlay = () => {
    navigate(`/watch/` + id)
  };
  const handleClickTrailer = () => {
    setOpen(true)
    setPlay(true)
  };
  return (
    <div className={`${styles.container}`}>
      {detailData && (
        <>
          <div className={`${styles.background}`}>
            <img alt={detailData.title} src={detailData.backgroundImg} />
          </div>

          <div className={`${styles.imageTitle}`}>
            <img alt={detailData.title} src={detailData.titleImg} />
          </div>

          <div className={`${styles.contentMeta}`}>
            <div className={`${styles.controls}`}>
              <button className={`${styles.player}`} onClick={handleClickPlay}>
                <img src="/images/play-icon-black.png" alt="" />
                <span>Play</span>
              </button>
              <button className={`${styles.trailer}`} onClick={handleClickTrailer}>
                <img alt="" src="/images/play-icon-white.png" />
                <span>Trailer</span>
              </button>
              <div className={`${styles.addList}`}>
                <span />
                <span />
              </div>
              <div className={`${styles.groupWatch}`}>
                <div>
                  <img src="/images/group-icon.png" alt="" />
                </div>
              </div>
            </div>
            <dic className={`${styles.subTitle}`}>{detailData.subTitle}</dic>
            <div className={`${styles.description}`}>{detailData.description}</div>
          </div>
          <Modal
            open={open}
            onClose={handleClose}
            aria-labelledby="modal-modal-title"
            aria-describedby="modal-modal-description"
            sx={{ width: "100%", height: "100%" }}
          >
            <Box sx={style}>
              <ReactPlayer
                url={detailData?.trailer}
                controls
                playing={play}
                width="100%"
                height="100%"
              />
            </Box>
          </Modal>
        </>
      )}
    </div>
  );
};

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: "70%",
  height: "70%",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
};

export default Detail;
