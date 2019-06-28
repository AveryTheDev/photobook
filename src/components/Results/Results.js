import React from 'react';
import unsplash from '../../api/unsplash';
import SearchBar from '../ImageSearch/SearchBar';
import ImageList from '../ImageSearch/ImageList';

class Results extends React.Component {
    state = { images: [] };

    onSearchSubmit = async (term) => {
        const response = await unsplash.get('/search/photos', {
            params: { query: term },
        });

        this.setState({ images: response.data.results });
    }

    render() {
        return (
            <div className="container" style={{ marginTop: '10px' }}>
                <SearchBar userSubmit={this.onSearchSubmit} />
                <ImageList images={this.state.images} />
            </div>
        );
    }
}

export default Results;