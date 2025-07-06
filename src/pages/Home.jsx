import Header from "../global/Header.jsx";
import Footer from "../global/Footer.jsx";
import CardComponent from "../components/Card.jsx";
import "./Home.css";
import React from "react";
import { Link } from 'react-router';

function Home() {

    return (
        <>
            <Header />
            <main className="home">
                <section 
                    className="hero-section">
                    <div className="col-text-right">
                        <div className="blur-2">
                        </div>
                    </div>
                </section> 

                <section className="hero">
            <p className="intro-text">Hey there, I'm YunGi!</p>
            <h1 className="hero-title">
                UX/UI Designer driven by <span>purpose</span>, grounded in researching <span> user needs</span>, and focused on creating <span>human-centered</span> digital experiences.
            </h1>
            </section>

                <section className="selected-works">
                    {/* Card Component Section */}
                    <div className="card-section">
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