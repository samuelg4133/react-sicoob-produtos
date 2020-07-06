import Header from "../../components/header";
import React from "react";
import ProgressBar from "../../components/progress-bar";
import Product from "../../components/product";
import Footer from "../../components/footer";

const Home = () => {
    return (
        <>
            <Header></Header>
            <ProgressBar></ProgressBar>
            <Product></Product>
            <Footer></Footer>
        </>
    );
}

export default Home;
