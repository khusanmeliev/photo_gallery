import React, { useState } from "react";
import { photos } from "../mock/images";
import CloseIcon from "@mui/icons-material/Close";
import "./styles.css";

function Gallery() {
  const [model, setModel] = useState(false);
  const [tempimgSrc, setTempImgSrc] = useState("");

  const getImg = (imgSrc) => {
    setTempImgSrc(imgSrc);
    setModel(true);
  };

  return (
    <>
      <div className={model ? "model open" : "model"}>
        <img src={tempimgSrc} />
        <CloseIcon onClick={() => setModel(false)} />
      </div>
      <div className="gallery">
        {photos.map((item, index) => {
          return (
            <div
              className="pics"
              key={index}
              onClick={() => getImg(item.imgSrc)}
            >
              <img src={item.imgSrc} style={{ width: "100%" }} alt='item'/>
            </div>
          );
        })}
      </div>
    </>
  );
}

export default Gallery;
