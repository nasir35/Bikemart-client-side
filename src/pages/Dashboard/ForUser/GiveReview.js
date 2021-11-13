import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import Rating from 'react-rating';
import useAuth from '../../../hooks/useAuth';
const GiveReview = () => {
    const {user} = useAuth();
    const {register, handleSubmit, reset} = useForm();
    const [rating, setRating] = useState(null);

    const onSubmit = data => {
        data.rating = rating ? rating : '4';
        data.img = user?.photoURL ? user?.photoURL : 'https://i.ibb.co/zmPpTp7/transparent-user-icon.png';
        console.log(data);
        fetch('https://frozen-scrubland-17701.herokuapp.com/reviews', {
            method: 'POST',
            headers : {
                'content-type' : 'application/json'
            },
            body : JSON.stringify(data)
        })
        .then(res => res.json())
        .then(result => {
            if(result.insertedId){
                alert('Thanks for giving a review!');
                reset();
            }
            else{

            }
        })
    };

    return (
        <div className="my-4">
            <div className="text-center">
                <h2 className="inline-block border-coral text-stromboli text-2xl px-4 border-b-4 rounded font-semibold font-qsand">Give a review!</h2>
            </div>
            <div className="text-center my-3">
                <form onSubmit={handleSubmit(onSubmit)} className="lg:w-3/6 md:w-4/6 w-full md:px-0 px-5 mx-auto">
                    <input type="text" {...register('name')} className="block w-full border-2 rounded px-3 py-1 mb-3" placeholder="Your Name" id="name" defaultValue={user?.displayName} />
                    <input type="text" {...register('profession')} className="block w-full border-2 rounded px-3 py-1 mb-3" placeholder="Your Profession" id="profession" required/>
                    <div className="w-full grid grid-cols-12 border-b mb-3 px-4 gap-x-2 items-center">
                        <label htmlFor="rating" className="col-span-3 font-medium text-gray-600">Rating</label>
                        <div className="col-span-9">
                            <Rating
                                placeholderRating={rating}
                                placeholderSymbol="fas fa-star text-coral text-xl"
                                onClick={rate => setRating(rate)}
                                emptySymbol="far fa-star text-coral text-xl"
                                fullSymbol="fas fa-star text-coral text-xl"
                                >                            
                            </Rating>
                            <input type="text" className='px-3 py-0.5 ml-5 bg-gray-100  rounded text-stromboli' defaultValue={rating} readOnly />
                        </div>
                    </div>
                    <textarea type="text" {...register('review')} rows="6" className="block w-full border-2 rounded px-3 py-1 mb-3" placeholder="Write the review here..." id="review" required/>
                    <input type="submit" value="Post" className="px-10 mb-3 py-1 rounded cursor-pointer bg-green-custom text-white text-xl" />
                </form>
            </div>            
        </div>
    );
};

export default GiveReview;