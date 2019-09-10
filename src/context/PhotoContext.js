import React, { createContext, useState } from "react";
import unsplash from "../api/unsplash";

export const PhotoContext = createContext();

const PhotoContextProvider = props => {
  const [images, setImages] = useState([]);
  const [selected, setSelected] = useState({
    image: '',
    description: '',
    downloadURL: '',
    photographerPortrait: '',
    photographer: '',
    portfolioURL: ''
  });

  const onSearchSubmit = async term => {
    const response = await unsplash.get("/search/photos", {
      params: { query: term, per_page: 50 }
    });

    //instead of grabbing just the image, grab everything and then 
    //pass the image information in a manner such that only what 
    //data you want to be displayed is displayed
    console.log(response.data.results);
    setImages(response.data.results);
  };

  return (
    <div>
      <PhotoContext.Provider
        value={{
          images,
          selected,
          setSelected,
          onSearchSubmit
        }}
      >
        {props.children}
      </PhotoContext.Provider>
    </div>
  );
};

export default PhotoContextProvider;
