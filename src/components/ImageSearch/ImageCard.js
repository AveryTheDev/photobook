import React, { useState, useEffect, useContext, useRef } from 'react';
import { PhotoContext } from '../../context/PhotoContext';

const ImageCard = ({ image, description }) => {

    const { setSelected } = useContext(PhotoContext);
    const [ spans, setSpans ] = useState(0);

    const imageRef = useRef();

    useEffect(() => {
        imageRef.current.addEventListener('load', setImageSpans);
    }, [])

    const setImageSpans = () => {
        const height = imageRef.current.clientHeight;

        const imgSpans = Math.ceil(height / 40 + 1);
        setSpans(imgSpans);
    }

    const imageSelect = () => {
        setSelected({
          image: image.urls.regular,
          description: description,
          downloadURL: image.links.download,
          photographerPortrait: image.user.profile_image,
          photographer: `${image.user.first_name} ${image.user.last_name}`,
          portfolioURL: image.user.portfolio_url
        });
    }

    return (
        <div style={{ gridRowEnd: `span ${spans}` }}>
            <img 
                ref={imageRef} 
                alt={description} 
                src={image.urls.regular}
                onClick={imageSelect}
                />
        </div>
    );
}
 
export default ImageCard;
