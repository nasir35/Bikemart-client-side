import React from 'react';
import Rating from 'react-rating';
import { Link } from 'react-router-dom';

const SingleProduct = ({product}) => {
    const {img, title, price, rating, ratedBy, description, bikeType} = product;
    return (
        <div className="p-3 border rounded shadow-inset space-y-2">
            <img src={img} alt="" className="" />
            <h2 className="text-xl font-medium font-roboto text-coral">{title}</h2>
            <div className="flex justify-between sm:text-base text-sm">
                <p className="font-medium text-stromboli"><b>Price: {price}</b></p>
                <p className="font-medium text-stromboli"><i class="fas fa-biking mr-1"></i> {bikeType}</p>
            </div>
            <p>{description.split(' ').slice(0, 12).toString().replace(/,/g, ' ').concat('...')}</p>
            <div className="flex justify-between sm:text-base text-sm">
                <div>
                    <Rating 
                    initialRating={rating}
                    emptySymbol="far fa-star text-coral sm:text-lg text-base"
                    fullSymbol="fas fa-star text-coral sm:text-lg text-base"
                    readonly
                    ></Rating>
                    <span className="sm:text-lg text-base text-gray-700"> ({ratedBy})</span>
                </div>
                <Link to={`products/${product._id}`}><button className="px-5 py-1 bg-green-custom text-white rounded"><i className="far fa-paper-plane"></i> Purchase</button></Link>
            </div>
        </div>
    );
};

export default SingleProduct;