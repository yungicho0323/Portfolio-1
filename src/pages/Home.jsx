import Header from "../global/Header.jsx";
import Footer from "../global/Footer.jsx";
import CardComponent from "../components/Card.jsx";
import "./Home.css";
import React from "react";

function Home() {


    return(
        <>
        <Header />
        <main className="home">
            <section className="hero-section">
            <div className="col">
            <div className="blur-2">
            <h1 className="text-7xl font-bold leading-tight"> Heyy <br /> I’m{" "} <br />
            <span>UI/UX <br /> Designer</span>
            <br /> Yungi Cho
            </h1>
            </div>
            </div>
            <div></div>
            <div className="col-text-right">
                <div className="blur-2">
                <p className="text-lg text-gray-700 max-w-md">
                <span className="block w-8 h-1 bg-black mb-2"></span>
                As a UI/UX designer, I am deeply committed to continuous growth and innovation.
                 I embrace every opportunity to expand my skills and collaborate with talented teams, always striving to create meaningful and intuitive digital experiences. 
                </p>
                </div>
            </div>
            </section>

            <section className="selected-works">
                <h1>Selected Works.</h1>
                { /*Card Component Section */}
                <div className="card-section flex justify-center mt-10">
                    <CardComponent />
                <button className="view-all-btn">View All</button>
                </div>
            </section>

            
            
            

            </main>
            
            <Footer />
            
        </>
    )
}

export default Home;