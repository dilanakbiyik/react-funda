import React from 'react';
import './style.css';

class DetailInfo extends React.Component {
    render() {
        const {
            info: {
                address, postcode, place, price
            }
        } = this.props;
        return (
            <div className="info">
                <div>
                    <h1>{address}</h1>
                    <h2><span>{postcode}</span>{place}</h2>
                </div>
                <div>
                    <span className="price">{price}</span>
                </div>
            </div>
        );
    }
}


export default DetailInfo;
