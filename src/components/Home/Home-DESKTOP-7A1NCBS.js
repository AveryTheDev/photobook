import './Home.css';
import React from 'react';
import Nav from '../Nav/Nav';
import PhotoSearch from './PhotoSearch/PhotoSearch';
import Modal from '../Modal/Modal';
import PhotoContextProvider from '../../context/PhotoContext';


class Home extends React.Component {

    render() {

        return (
          <PhotoContextProvider>
            <Nav />
            <PhotoSearch />
            <Modal />
          </PhotoContextProvider>
        );
    }
}

export default Home;