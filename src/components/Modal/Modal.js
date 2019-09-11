import React, { useContext } from 'react';
import './Modal.css';
import { PhotoContext } from '../../context/PhotoContext';


const Modal = ( ) => {

    const { selected } = useContext(PhotoContext);
    const { setSelected } = useContext(PhotoContext);


    if(selected.image) {
        return (
          <div className="image-modal">
            <p
              onClick={() =>
                setSelected({
                  image: "",
                  downloadURL: "",
                  photographer: "",
                  portfolioURL: ""
                })
              }
            >
              X
            </p>
            <div className="modal-content">
              <div className="centered-image">
                <img src={selected.image} alt={selected.description} />
              </div>
              <div className="more-info">
                <a href={selected.portfolioURL}>
                  Photographer: {selected.photographer}
                </a>
                <a href={selected.downloadURL}> Download Image</a>
              </div>
            </div>
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