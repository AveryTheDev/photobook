import React from "react";
import "./PhotoSearch.css";
import Image from "react-bootstrap/Image";
import HomePhoto from "../../../images/frontpage.jpg";
import SearchBar from "../../ImageSearch/SearchBar/SearchBar";
import ImageList from "../../ImageSearch/ImageList";

const PhotoSearch = () => {
  return (
    <div>
      <div className="photoContainer">
        <Image src={HomePhoto} className="highlightPhoto" />
        <div className="imageContent">
          <SearchBar />
        </div>
      </div>
      <div className="container">
        <ImageList />
      </div>
    </div>
  );
};

export default PhotoSearch;
