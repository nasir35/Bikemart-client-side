import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import Review from './Review';

const Reviews = () => {
    const [reviews, setReviews] = useState([]);
    useEffect( () => {
        fetch('https://frozen-scrubland-17701.herokuapp.com/reviews/published')
        .then(res => res.json())
        .then(data => setReviews(data))
    },[reviews])
    return (
        <div className="text-center bg-gray-100 pt-5 pb-8">
            <div className="text-center my-5">
                <h2 className="inline-block sm:border-b-4 border-b-2 sm:px-4 px-2 border-coral rounded text-stromboli font-qsand md:font-bold font-medium md:text-2xl text-xl">What Client say About Us</h2>
            </div>
            {reviews.length===0 ?
            <div className="flex justify-center items-center py-6">
                <div className="animate-bounce text-stromboli mr-5 font-qsand font-medium">loading...</div>
                <div className=" animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-coral"></div>
            </div>
            :
            <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 md:p-12 md:pb-4 sm:p-10 sm:pb-3 pb-2 p-5 gap-8">
                {reviews.map(review => <Review reviewObj={review} key={review._id}></Review>)}
            </div>
            }
            <Link to="dashboard/review"><button className="mx-auto block bg-coral hover:bg-yellow-600 text-white px-10 py-1 rounded">Give a Review</button></Link>
        </div>
    );
};

export default Reviews;