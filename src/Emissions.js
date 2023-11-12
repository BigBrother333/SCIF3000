import React from 'react';
import NavigationMenu from './NavigationMenu'; // Import the NavigationMenu component

const About = () => {
    return (
        <div className="App">
            <header className="App-header">
                <nav>
                    <ul className="d-flex align-items-center justify-content-between">
                        <li>
                            <a href="#">
                                <img src="https://upload.wikimedia.org/wikipedia/en/9/92/CSIRO_Logo.svg" alt="Your Logo" />
                            </a>
                        </li>
                        <li className="ml-auto">
                            <NavigationMenu />
                        </li>
                    </ul>
                </nav>
            </header>
            <section className="hero">
                {/* <h1 style={{ fontSize: '5rem' }}>Transition to Renewable Energy</h1> */}
                {/* <p>CSIRO in collaboration with UNSW.</p> */}
                {/* <a href="#" className="btn">Learn More</a> */}
            </section>

            <div className="container">
                {/* <h2>Past Present Future Trends</h2> */}
                <iframe
                    src="https://co2csiro.streamlit.app//?embed=true"
                    height="950"
                    style={{ width: '100%', border: 'none' }}
                ></iframe>
                {/* <p>Tracking the transition to renewable energy sources.</p> */}
            </div>

            <footer>
                <p>&copy; 2023 transition to renewable energy. CSIRO in collaboration with UNSW.</p>
            </footer>
        </div>
    );
};

export default About;
