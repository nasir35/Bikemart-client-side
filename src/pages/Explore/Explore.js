import React, { useEffect, useState } from 'react';
import SingleProduct from '../Home/Product-section/SingleProduct';
import Footer from '../Shared/Footer';
import Header from '../Shared/Header';

const Explore = () => {
    const [products, setProducts] = useState([]);
    useEffect( () => {
        fetch('https://frozen-scrubland-17701.herokuapp.com/products')
        .then(res => res.json())
        .then(data => setProducts(data))
    }, [products])
    return (
        <div>
            <Header></Header>
            <div className="md:p-12 sm:p-8 p-4">
                <div className="text-center">
                <h2 className="sm:text-2xl text-xl font-qsand inline-block border-b-4 border-green-custom px-4 text-stromboli font-medium">Choose your Bike</h2>
                </div>

                {products.length ===0 ?
                <div className="flex justify-center items-center py-6">
                    <div className="animate-bounce text-stromboli mr-5 font-qsand font-medium">loading...</div>
                    <div className=" animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-coral"></div>
                </div>
                :
                <div className="mt-5 grid md:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-5">
                    {
                        products.map(product => <SingleProduct key={product._id} product={product}></SingleProduct>)
                    }
                </div>}
            </div>
            <Footer></Footer>
        </div>
    );
};

export default Explore;