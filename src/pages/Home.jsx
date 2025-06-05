import Header from "../global/Header.jsx";
import Footer from "../global/Footer.jsx";
import CardComponent from "../components/Card.jsx";
import "./Home.css";
import React from "react";
import { Link }from 'react-router';

function Home() {


    return(
        <>
        <Header />
        <main className="home">
            <section className="hero-section">
            <div className="col">
            <div className="blur-2">
            <h1 className="text-7xl font-bold leading-tight"> Heyy <br /> I’m{" "} <br />
            <span>YunGi Cho</span>
            <br /> UI/UX Designer
            </h1>
            </div>
            </div>
 
            <div></div>
            
            <div className="col-text-right">
                <div className="blur-2">
                <p className="text-lg text-gray-700 max-w-md animate__animated animate__fadeInUp"><strong>
         With a background in business and a heart for purposeful design, I aim to create digital experiences that not only serve users but also support ethical, value-driven business goals where empathy meets strategy for positive impact. </strong>
                </p>
                </div>
            </div>
            </section>

            <section className="selected-works">
                {/* <h1>Selected Works.</h1> */}
                { /*Card Component Section */}
                <div className="card-section flex justify-center mt-10">
                    <CardComponent />
                <Link to='/work' className="view-all-btn">View All</Link>
                </div>
            </section>

            </main>
            
            <Footer />
            
        </>
    )
}

export default Home;