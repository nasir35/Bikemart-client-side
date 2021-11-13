import React, { useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';
import Rating from 'react-rating';
import { useHistory, useParams } from 'react-router';
import useAuth from '../../hooks/useAuth';
import Header from '../Shared/Header';

const ProductDetails = () => {
    const {user} = useAuth() || {};
    const {productId} = useParams();
    const history = useHistory();
    const [selectedProduct, setSelectedProduct] = useState([]);

    useEffect( () => {
        fetch(`https://frozen-scrubland-17701.herokuapp.com/products/${productId}`)
        .then(res => res.json())
        .then(data => setSelectedProduct(data))
    }, []);
    const {img, title, price, rating, ratedBy, bikeType, description} = selectedProduct;
    
    const {register, handleSubmit, reset} = useForm();

    const alreadyTaken = idToCheck => {
        fetch(`https://frozen-scrubland-17701.herokuapp.com/orders/${idToCheck}`)
        .then(res => res.json())
        .then(data => {
            if(data.uniqueId){
                return true;
            }
            else{
                return false;
            }
        })
    }

    function makeid(length) {
        var result           = '';
        var characters       = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
        var charactersLength = characters.length;
        for ( var i = 0; i < length; i++ ) {
          result += characters.charAt(Math.floor(Math.random() * 
     charactersLength));
       }
       if(alreadyTaken(result)){
           return makeid(12);
       }
       return result;
    }

    const onSubmit = data => {
        data.id = selectedProduct._id;
        data.orderId = makeid(12);
        data.productImg = img;
        data.price = price;
        data.orderStatus = 'pending';
        console.log(data);
        fetch('https://frozen-scrubland-17701.herokuapp.com/placeorder', {
            method : 'POST',
            headers : {
                'content-type' : 'application/json'
            },
            body : JSON.stringify(data)
        })
        .then(res => res.json())
        .then(result => {
            if(result.insertedId){
                reset();
                history.location.pathname = '';
                history.push('/placeorder')
            }
        })
        
    }
    return (
        <div>
            <Header></Header>
            <div className="md:p-10 sm:p-6 p-3">
                {selectedProduct.length==0 ?
                <div class="flex justify-center items-center py-6">
                    <div className="animate-bounce text-stromboli mr-5 font-qsand font-medium">loading...</div>
                    <div class=" animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-coral"></div>
                </div>
                :                
                    <div id="wrapper-div" className="grid grid-cols-5 gap-5">
                    <div id="product-details" className="md:col-span-3 col-span-5 space-y-3">
                        <img src={img} alt="" className="rounded"/>                        
                        <h2 className="text-xl font-medium font-roboto text-stromboli">{title}</h2>
                        <div className="flex md:flex-row flex-col justify-between items-center">
                            <div>
                                <p className="font-medium font-roboto text-gray-800">Price: {price}</p>
                                <div>
                                    <Rating 
                                    initialRating={rating}
                                    emptySymbol="far fa-star text-coral sm:text-lg text-base"
                                    fullSymbol="fas fa-star text-coral sm:text-lg text-base"
                                    readonly
                                    ></Rating>
                                    <span className="sm:text-lg text-base text-gray-700"> ({ratedBy})</span>
                                </div>
                            </div>
                            <p className="text-xl font-medium text-gray-800 font-qsand"><i className="fas fa-biking text-stromboli"></i> Bike Type: {bikeType}</p>
                        </div>
                        <p className="text-gray-500">{description}</p>                        
                    </div>

                    <div id="order-form" className="md:col-span-2 col-span-5">
                        <div className="text-center">
                            <h2 className="inline-block px-4 border-b-4 rounded mb-3 border-green-custom md:text-2xl text-xl text-center text-stromboli font-qsand font-medium mt-5">Get Your Bike</h2>
                        </div>
                        <form onSubmit={handleSubmit(onSubmit)} className="md:p-5 pb-5 p-0 shadow-lg rounded mx-auto">
                            <div className="w-full grid grid-cols-12 mb-3 md:px-4 px-2">
                                <label htmlFor="productName" className="col-span-3 font-medium text-gray-600">Product</label>
                                <input {...register("productName")} id="productName" className="border col-span-9 px-3 py-1 bg-gray-50 mb-1 rounded" value={title} readOnly/>
                            </div>
                            <div className="w-full grid grid-cols-12 mb-3 md:px-4 px-2">
                                <label htmlFor="customerName" className="col-span-3 font-medium text-gray-600">Name</label>
                                <input {...register("customerName")} id="customerName" className="border col-span-9 px-3 py-1 bg-gray-50 mb-1 rounded" placeholder="Name" defaultValue={user.displayName} required/>
                            </div>
                            <div className="w-full grid grid-cols-12 mb-3 md:px-4 px-2">
                                <label htmlFor="email" className="col-span-3 font-medium text-gray-600">Email</label>
                                <input {...register("email")} type="email" id="email" className="border col-span-9 px-3 py-1 bg-gray-50 mb-1 rounded" placeholder="Email" defaultValue={user.email} readOnly required/>
                            </div>
                            <div className="w-full grid grid-cols-12 mb-3 md:px-4 px-2">
                                <label htmlFor="phone" className="col-span-3 font-medium text-gray-600">Phone</label>
                                <input {...register("phone")} id="phone" className="border col-span-9 px-3 py-1 bg-gray-50 mb-1 rounded" placeholder="+8801777777777" required/>
                            </div>
                            <div className="w-full grid grid-cols-12 mb-3 md:px-4 px-2">
                                <label htmlFor="address" className="col-span-3 font-medium text-gray-600">Address</label>
                                <input {...register("address")} id="address" className="border col-span-9 px-3 py-1 bg-gray-50 mb-1 rounded" placeholder="#H-32B, Neywork, USA" required/>
                            </div>
                            <div className="w-full grid grid-cols-12 mb-3 md:px-4 px-2">
                                <label htmlFor="bikeType" className="col-span-3 font-medium text-gray-600">Bike Type</label>
                                <input {...register("bikeType")} id="bikeType" className="col-span-9 mb-1 bg-indigo-100 px-3 py-1 rounded" defaultValue={bikeType}/>
                            </div>
                            <div className="w-full grid grid-cols-12 mb-3 md:px-4 px-2">
                                <label htmlFor="message" className="col-span-3 font-medium text-gray-600">Message</label>
                                <textarea {...register("message")} id="message" rows='4' className="border col-span-9 px-3 py-1 bg-gray-50 mb-1 rounded" placeholder="leave your message here..."/>
                            </div>       
                            <input type="submit" className="px-8 md:py-2 py-1 bg-green-custom cursor-pointer hover:bg-white border-2 border-green-custom hover:border-green-custom text-lg font-medium font-mono text-white hover:text-green-custom transition rounded mt-5 block mx-auto" value="Place Order"/>
                        </form> 
                    </div>
                </div>}
            </div>
        </div>
    );
};

export default ProductDetails;