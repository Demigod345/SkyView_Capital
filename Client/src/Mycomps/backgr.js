import React from "react";
import im from "./images/image.svg";
import im1 from "./images/bgtl.svg";
import im2 from "./images/bgtr.svg";
import im3 from "./images/bgbl.svg";
import im4 from "./images/bgbr.svg";

export default function HomePage() {
  return (
    <div className="bgmain">
      <div >
        <img src={im} className="full-width-image"  />
      </div>
      {/* <div class="bg-image-container">
        <img src={im} alt="Background" />
      </div> */}

       {/* <div className="image-row-icons">
        <img src={im4} className="img1" />
        <img src={im2} className="img2" />
        <img src={im3} className="img3" />
        <img src={im1} className="img4" />
      </div>  */}

      <div className="image-row-container">
        <img src={im4} className="img5" />
        <img src={im2} className="img5" />
        <img src={im3} className="img5" />
        <img src={im1} className="img5" />
      </div>
    </div>
  );
}
