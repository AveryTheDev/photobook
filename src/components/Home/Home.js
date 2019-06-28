import './Home.css';
import React from 'react';
import Nav from '../Nav/Nav';
import Results from '../Results/Results';

class Home extends React.Component {

    render() {
        return (
            <div>
                <Nav/>
                <Results />
            </div>
        )
    }
}

export default Home;