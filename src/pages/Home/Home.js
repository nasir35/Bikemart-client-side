import React from 'react';
import Footer from '../Shared/Footer';
import Header from '../Shared/Header';
import Banner from './Banner-section/Banner';
import Blog from './Blog-section/Blog';
import FeatureProducts from './Product-section/FeatureProducts';
import Reviews from './Review-section/Reviews';

const Home = () => {
    return (
        <div>
            <Header></Header>
            <Banner></Banner>
            <FeatureProducts/>
            <Reviews></Reviews>
            <Blog></Blog>
            <Footer></Footer>
        </div>
    );
};

export default Home;