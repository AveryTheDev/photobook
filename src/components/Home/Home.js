import './Home.css';
import React from 'react';
import Nav from '../Nav/Nav';
import FeaturedPhoto from '../Home/FeaturedPhoto/FeaturedPhoto';


class Home extends React.Component {

    render() {
        return (
            <div>
                <Nav/>
                <FeaturedPhoto />
            </div>
        )
    }
}

export default Home;