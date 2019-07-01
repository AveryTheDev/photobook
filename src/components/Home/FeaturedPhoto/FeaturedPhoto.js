import './FeaturedPhoto.css';
import unsplash from '../../../api/unsplash';
import React from 'react';
import Image from 'react-bootstrap/Image';
import HomePhoto from '../../../images/photobook.jpg';
import SearchBar from '../../ImageSearch/SearchBar/SearchBar';
import ImageList from '../../ImageSearch/ImageList';



class FeaturedPhoto extends React.Component {
    state = { images: [], }

    onSearchSubmit = async (term) => {
        const response = await unsplash.get('/search/photos', {
            params: { query: term },
        });

        this.setState({ images: response.data.results });
    }

    render() {

        return (
            <div>
                <div className="featuredPhotoContainer">
                    <Image src={HomePhoto} className="highlightPhoto" />
                    <div className="imageContent">
                        <SearchBar userSubmit={this.onSearchSubmit}/>
                    </div>
                </div>
                <div className="container">
                    <ImageList images={this.state.images} />
                </div>
            </div>

        )
    }
}

export default FeaturedPhoto;