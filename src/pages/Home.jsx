import Header from "../global/Header.jsx";
import Footer from "../global/Footer.jsx";
import CardComponent from "../components/Card.jsx";
import "./Home.css";
import CustomCursor from "../components/CustomCursor.jsx";
import { useState } from "react";
import React from "react";
import { Link } from 'react-router';

function Home() {
    const [hoveringHero, setHoveringHero] = useState(false);

    return (
        <>
            <Header />
            <CustomCursor visible={hoveringHero} />
            <main className="home">
                <section 
                    className="hero-section"
                    onMouseEnter={() => setHoveringHero(true)}
                    onMouseLeave={() => setHoveringHero(false)}
                >
                    <div className="col">
                        <div className="blur-2">
                            <h1 className="hero-title">
                                Heyy<br /> I'm{" "} <br />
                                <span>YunGi Cho</span>
                                <br /> UX/ UI Designer
                            </h1>
                        </div>
                    </div>

                    <div className="col-spacer"></div>
                    
                    <div className="col-text-right">
                        <div className="blur-2">
                            <p className="hero-description">
                                <strong>
                                    With a background in business and a passion for thoughtful design, I create digital experiences where empathy and strategy come together to make a real impact.
                                </strong>
                            </p>
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