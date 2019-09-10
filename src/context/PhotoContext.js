import React, { createContext, useState } from "react";
import unsplash from "../api/unsplash";

export const PhotoContext = createContext();

const PhotoContextProvider = props => {
  const [images, setImages] = useState([]);
  const [selected, setSelected] = useState({
    image: '',
    description: '',
    downloadURL: '',
    photographer: '',
    portfolioURL: ''
  });

  const onSearchSubmit = async term => {
    const response = await unsplash.get("/search/photos", {
      params: { query: term, per_page: 50 }
    });
    
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
