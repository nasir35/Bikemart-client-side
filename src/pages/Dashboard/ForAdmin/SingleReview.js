import React from 'react';
import Rating from 'react-rating';

const SingleReview = ({reviewObj}) => {
    const handlePending = id => {
        const proceedToUpdate = window.confirm('Are you sure about changing the review status to pending?');
        if(proceedToUpdate){
            const url = `https://frozen-scrubland-17701.herokuapp.com/reviews/pending/${id}`;
            fetch(url, {
                method : 'PUT'
            })
            .then(res => res.json())
            .then(data => {
                console.log(data);
            })
        }
    }
    const handlePublish = id => {
        const proceedToUpdate = window.confirm('Are you sure about publishing the review?');
        if(proceedToUpdate){
            const url = `https://frozen-scrubland-17701.herokuapp.com/reviews/publish/${id}`;
            fetch(url, {
                method : 'PUT'
            })
            .then(res => res.json())
            .then(data => {
                console.log(data);
            })
        }
    }
    const handleDelete = id => {
        const proceedToUpdate = window.confirm('Are you sure about deleting the review?');
        if(proceedToUpdate){
            const url = `https://frozen-scrubland-17701.herokuapp.com/reviews/${id}`;
            fetch(url, {
                method : 'DELETE'
            })
            .then(res => res.json())
            .then(data => {
                console.log(data);
            })
        }
    }
    const {img, name, profession, review, rating} = reviewObj;
    return (
        <div className=" bg-white border rounded-xl shadow mx-2 relative">
            <p className={`absolute z-10 px-4 rounded-tl-xl rounded-br-xl ${reviewObj.reviewStatus==='Pending' ? 'bg-indigo-200 text-stromboli' : 'bg-stromboli text-white'}`}>{reviewObj?.reviewStatus}</p>
        <div className=" bg-white px-8 py-2 mx-2">
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
            <div className="flex justify-between py-1">
                {
                    reviewObj?.reviewStatus === 'Published' ? 
                    <button className="px-4 py-0.5 rounded bg-coral text-white" onClick={()=>handlePending(reviewObj._id)}>Pending</button>
                    :
                    <button className="px-4 py-0.5 rounded bg-green-custom text-white" onClick={()=>handlePublish(reviewObj._id)}>Publish</button>
                }
                <button className="px-4 py-0.5 rounded bg-red-400 text-white" onClick={()=>handleDelete(reviewObj._id)}>Delete</button></div>
            </div>
        </div>
    );
};

export default SingleReview;