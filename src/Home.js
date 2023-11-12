import React from 'react';
import NavigationMenu from './NavigationMenu';
import backgroundImage from './your-hero-image.jpg'; // Update the image path

const Home = () => {
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
                {/* Background image with text overlay */}
                <div className="image-container">
                    <img src={backgroundImage} alt="Background" />
                </div>
            </section>

            <div className="container">
                <iframe
                    src="https://scif3000-ibb5u9724acfqbugma4ggj.streamlit.app//?embed=true"
                    height="730"
                    style={{ width: '100%', border: 'none' }}
                ></iframe>
            </div>

            <footer>
                <p>&copy; 2023 transition to renewable energy. CSIRO in collaboration with UNSW.</p>
            </footer>
        </div>
    );
};

export default Home;
