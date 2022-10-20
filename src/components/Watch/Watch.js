import { doc, getDoc } from "firebase/firestore";
import { useEffect, useState } from "react";
import ReactPlayer from "react-player";
import { useParams } from "react-router-dom";
import db from "../../firebase";
import styles from "./Watch.module.scss"

function Watch(props) {
  const { id } = useParams();
  const [detailData, setDetailData] = useState();

  const [play, setPlay] = useState(false);

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

  return (
    <div className={`${styles.container}`}>
      {detailData&&<ReactPlayer
        url={detailData.trailer}
        controls
        playing={play}
        width="100%"
        height="100%"
      />}
    </div>
  );
}

export default Watch;
