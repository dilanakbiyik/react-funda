import ImageGallery from 'react-image-gallery';
import React from "react";
import "react-image-gallery/styles/css/image-gallery.css";

class Images extends React.Component {
    render() {
        const { images } = this.props;
        return (
            <ImageGallery items={images} lazyLoad="true" thumbnailPosition="left" />
        );
    }
}
export default Images;
