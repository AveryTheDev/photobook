import React from 'react';
import './SearchBar.css';
import InputGroup from 'react-bootstrap/InputGroup';
import Button from 'react-bootstrap/Button'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons';


class SearchBar extends React.Component {
    state = { term: '', selected: false };

    componentDidMount() {
       this.props.userSubmit('cameras');
    }

    onFormSubmit = (e) => {
        e.preventDefault();

        this.props.userSubmit(this.state.term);
    }

    render() {

        return (
            <div>
                <form onSubmit={this.onFormSubmit} >
                    <InputGroup variant="searchBar">
                        <InputGroup.Prepend>
                            <Button variant="search" onClick={this.onFormSubmit}>
                                <FontAwesomeIcon id="basic-addon1" icon={faSearch} />
                            </Button>
                        </InputGroup.Prepend>
                            <input type="text"
                                value={this.state.term}
                                onChange={(e) => this.setState({ term: e.target.value })}
                                onFocus = {this.onSelection}
                                onMouseLeave = {this.onExitSelection}
                                placeholder= "Search for high-resolution photos"
                                className="searchBar"
                            />
                    </InputGroup>

                </form>
            </div>
        );
    }
}

export default SearchBar;