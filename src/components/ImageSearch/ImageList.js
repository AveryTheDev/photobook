import './ImageList.css';
import React, { useContext } from 'react';
import ImageCard from './ImageCard';
import { PhotoContext } from '../../context/PhotoContext';

const ImageList = () => {

    const { images } = useContext(PhotoContext);

    const imageList = images.map((image, i) => {
        return <ImageCard index={i} key={image.id} image={image} description={image.description}/>
    })

    return <div className="image-list">{imageList}</div>;
};

export default ImageList;

