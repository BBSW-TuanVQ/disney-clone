import styled from "styled-components";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import styles from "./ImgSlider.module.scss"

function ImgSlider(props) {
  let settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
  };
  return (
    <div>
      <Slider className={`${styles.slider}`} {...settings}>
        <div className={`${styles.wrap}`}>
          <a href="/home">
            <img src="/images/slider-badging.jpg" alt="" />
          </a>
        </div>
        <div className={`${styles.wrap}`}>
          <a href="/home">
            <img src="/images/slider-scale.jpg" alt="" />
          </a>
        </div>
        <div className={`${styles.wrap}`}>
          <a href="/home">
            <img src="/images/slider-badag.jpg" alt="" />
          </a>
        </div>
        <div className={`${styles.wrap}`}>
          <a href="/home">
            <img src="/images/slider-scales.jpg" alt="" />
          </a>
        </div>
      </Slider>
    </div>
  );
}

export default ImgSlider;
