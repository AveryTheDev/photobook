import React, { useContext } from 'react';
import { PhotoContext } from '../../context/PhotoContext';


const Modal = ( ) => {

    const { selected } = useContext(PhotoContext);
    const { setSelected } = useContext(PhotoContext);


    if(selected.image) {
        return (
          <div>
            <h1
              onClick={() => setSelected({
                image: "",
                description: "",
                downloadURL: "",
                photographer: "",
                portfolioURL: ""
              })}
            >
              X
            </h1>
            <img src={selected.image} alt={selected.description} />
            <p>{selected.description}</p>
            <a href={selected.downloadURL}> Download </a>
            <p>Photographer {selected.photographer}</p>
            <a href={selected.portfolioURL}>
              View {selected.photographer}'s Portfolio
            </a>
          </div>
        );
    }
    else {
        return(
            <div></div>
        );
      }
} 
 
export default Modal;