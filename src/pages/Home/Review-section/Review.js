import React from 'react';
import Rating from 'react-rating';

const Review = ({reviewObj}) => {
    const {img, name, profession, review, rating} = reviewObj;
    return (
        <div className=" bg-white border px-8 py-2 rounded-xl shadow mx-3">
            <img src={img} alt="" className="rounded-full w-2/4 mx-auto border-4 border-gray-300" />
            <Rating 
                    initialRating={rating}
                    emptySymbol="far fa-star text-coral sm:text-lg text-base"
                    fullSymbol="fas fa-star text-coral sm:text-lg text-base"
                    readonly
                    ></Rating>
            <h2 className="font-qsand text-2xl font-medium text-stromboli mt-2">{name}</h2>
            <p className="text-xl text-gray-500 mb-3">{profession}</p>
            <p className="text-gray-500 pb-1">{review.split(' ').slice(0, 20).toString().replace(/,/g, ' ').concat('...')} <button className="font-medium text-gray-700">See more</button></p>
        </div>
    );
};

export default Review;