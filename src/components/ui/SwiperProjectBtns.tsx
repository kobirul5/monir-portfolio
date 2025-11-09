import { PiCaretLeftBold, PiCaretRightBold } from "react-icons/pi";
import { useSwiper } from "swiper/react";
import React from "react";

interface SwiperProjectBtnsProps {
  btnStyle?: string;
  containerStyle?: string;
  iconStyle?: string;
}

const SwiperProjectBtns: React.FC<SwiperProjectBtnsProps> = ({
  btnStyle = "",
  containerStyle = "",
  iconStyle = "",
}) => {
  const swiper = useSwiper();

  return (
    <div className={containerStyle}>
      <button
        className={btnStyle}
        onClick={() => swiper.slidePrev()}
        aria-label="Previous Slide"
      >
        <PiCaretLeftBold className={iconStyle} />
      </button>
      <button
        className={btnStyle}
        onClick={() => swiper.slideNext()}
        aria-label="Next Slide"
      >
        <PiCaretRightBold className={iconStyle} />
      </button>
    </div>
  );
};

export default SwiperProjectBtns;
