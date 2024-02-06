import React from "react";
import { useLocation } from "react-router-dom";

const PhotoDiary = ({}) => {
  const location = useLocation();
  const images = location.state?.savedImages || [];

  return (
    <div>
      {images.length > 0 ? (
        images.map((image, index) => (
          <img key={index} src={image} width="100px" />
        ))
      ) : (
        <p>No saved images available</p>
      )}
    </div>
  );
};

export default PhotoDiary;
