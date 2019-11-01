import React, { useState, useLayoutEffect, useContext, useRef } from "react";
import { PhotoContext } from "../../context/PhotoContext";

const ImageCard = ({ image, description }) => {
  const { setSelected } = useContext(PhotoContext);
  const [spans, setSpans] = useState(0);

  const imageRef = useRef();

useLayoutEffect(() => {
  if (imageRef.current) {
    const setImageSpans = () => {
      const height = imageRef.current.clientHeight;
      const imgSpans = Math.ceil(height / 40 + 1);
      setSpans(imgSpans);
    };
    imageRef.current.addEventListener("load", setImageSpans);
    return () => imageRef.current.removeEventListener("load", setImageSpans);
  }
}, [imageRef.current]);

  const imageSelect = () => {
    debugger;
    let last_name = image.user.last_name;

    if(last_name) {
      return setSelected({
        image: image.urls.regular,
        downloadURL: image.links.download,
        photographer: `${image.user.first_name} ${last_name}`,
        portfolioURL: image.user.portfolio_url
      });;
    }
    else {
      last_name = '';
    }

    setSelected({
      image: image.urls.regular,
      downloadURL: image.links.download,
      photographer: `${image.user.first_name} ${last_name}`,
      portfolioURL: image.user.portfolio_url
    });
  };

  return (
    <div style={{ gridRowEnd: `span ${spans}`}} >
      <img
        ref={imageRef}
        alt={description}
        src={image.urls.regular}
        onClick={imageSelect}
      />
    </div>
  );
};

export default ImageCard;
