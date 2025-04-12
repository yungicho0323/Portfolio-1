import Header from "../global/Header.jsx";
import Footer from "../global/Footer.jsx";
import React from "react";
import CardComponent from "../components/Card.jsx";
import './Work.css';

function work() {

    return(
        <>
        <Header />
         <div className="container">
            <div className="grid">
                <div className="col-12">
                <section className="selected-works">
                    <h1>Selected Works.</h1>
                    <span className="arrow">↓</span>
                    { /*Card Component Section */}
                    <div className="card-section flex justify-center mt-10">
                        <CardComponent />
                    </div>
                </section>
            </div>
         </div>
        </div>
         <Footer />
        </>
    )
}


export default work;