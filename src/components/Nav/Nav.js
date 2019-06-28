import React from 'react';
import './Nav.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCameraRetro } from '@fortawesome/free-solid-svg-icons';

const Nav = () => {
    return (
        <div className="nav">
            <FontAwesomeIcon icon={faCameraRetro} />
            <h2>PhotoBook</h2>
        </div>
    )
}

export default Nav;