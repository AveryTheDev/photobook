import React, { Component } from 'react';
import { PhotoContext } from '../../context/PhotoContext';

class ImageCard extends Component {
    state={spans: 0}

    componentDidMount() {
        this.imageRef.current.addEventListener('load', this.setSpans);
    }

    setSpans = () => {

        const height = this.imageRef.current.clientHeight;
        const spans = Math.ceil(height / 40 + 1);
        this.setState({ spans: spans });
    }

        static contextType = PhotoContext;

    imageSelect = () => {

    let last_name = this.props.image.user.last_name;

        const setLastName = () => {
            if(last_name) {
                return;
            }
            last_name = '';
        }

            setLastName();

    this.context.setSelected({
          image: this.props.image.urls.regular,
          description: this.props.description,
          downloadURL: this.props.image.links.download,
          photographer: `${this.props.image.user.first_name} ${last_name}`,
          portfolioURL: this.props.image.user.portfolio_url
        });
    }

    render() { 

    this.imageRef = React.createRef();

    const { image, description } = this.props;


        return (
          <div style={{ gridRowEnd: `span ${this.state.spans}` }}>
            <img
              ref={this.imageRef}
              alt={description}
              src={image.urls.regular}
              onClick={this.imageSelect}
            />
          </div>
        );
    }
}
 
export default ImageCard;

