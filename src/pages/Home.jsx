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
            <p className="intro-text">Hi,<span className="highlight"> I’m YunGi </span> — a <span className="highlight">purposeful</span> UX/UI designer, crafting thoughtful digital experiences that make everyday life feel <span className="highlight">easier</span> and <span className="highlight"> more human</span> 💡🌿.</p>
            </section>

            <section className="explore">
                <p className="scroll">SCROLL TO EXPLORE WORK ↓</p>
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
                    </div>
                </section>
                        <Link to='/work' className="view-all-btn">View All</Link>
            </main>
            
            <Footer />
        </>
    )
}

export default Home;