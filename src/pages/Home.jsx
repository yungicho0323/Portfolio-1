import Header from "../global/Header.jsx";
import Footer from "../global/Footer.jsx";
import CardComponent from "../components/Card.jsx";
import "./Home.css";
import CustomCursor from "../components/CustomCursor.jsx";
import { useState, useEffect } from "react";
import React from "react";
import { Link } from 'react-router';

function Home() {
    const [hoveringHero, setHoveringHero] = useState(false);
    const [showCursor, setShowCursor] = useState(true);

    useEffect(() => {
        const handleScroll = () => {
            const scrollY = window.scrollY;
            const windowHeight = window.innerHeight;
            
            // Hide cursor after scrolling more than 50% of viewport height
            if (scrollY > windowHeight * 0.5) {
                setShowCursor(false);
            } else {
                setShowCursor(true);
            }
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <>
            <Header />
            <CustomCursor visible={showCursor && hoveringHero} />
            <main className="home">
                <section 
                    className="hero-section"
                    onMouseEnter={() => setHoveringHero(true)}
                    onMouseLeave={() => setHoveringHero(false)}
                >
                    <div className="col">
                        <div className="blur-2">
                            <h1 className="text-7xl font-bold leading-tight">
                                Heyy <br /> I'm{" "} <br />
                                <span>YunGi Cho</span>
                                <br /> UI/UX Designer
                            </h1>
                        </div>
                    </div>

                    <div></div>
                    
                    <div className="col-text-right">
                        <div className="blur-2">
                            <p className="text-lg text-gray-700 max-w-md animate__animated animate__fadeInUp">
                                <strong>
                                    With a background in business and a passion for thoughtful design, I create digital experiences where empathy and strategy come together to make a real impact.
                                </strong>
                            </p>
                        </div>
                    </div>
                </section>

                <section className="selected-works">
                    {/* <h1>Selected Works.</h1> */}
                    {/* Card Component Section */}
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