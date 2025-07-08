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
            <p className="intro-text">Hi, I’m YunGi👋 UX/UI Designer with a people-first mindset.</p>
            <h1 className="hero-title">
                {/* UX/UI Designer driven by <span>collaboration</span>, grounded in researching <span> user needs</span>, and focused on creating <span>human-centered</span> digital experiences. */}
               "<span className="bold-word-space">Real people  </span> shaped how I design → <br/> Business taught me how to <span className="bold-word-space">think</span>. Customer service taught me how to <span className="bold-word-space">listen</span>. UX/UI brings it all <span className="bold-word-space">together</span>."</h1>
            </section>

            <section 
                    className="hero-section">
                    <div className="col-text-left">
                        <div className="blur-2">
                        </div>
                    </div>
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