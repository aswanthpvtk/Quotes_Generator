import React, { useEffect, useState } from 'react';
import { Col, Row } from 'react-bootstrap';

function Home() {
    const [quotes, setQuotes] = useState([]);
    const [currentIndex, setCurrentIndex] = useState(0);
    const [randomColor, setRandomColor] = useState('#000'); // Default color is black

    useEffect(() => {
        fetch('https://dummyjson.com/quotes')
            .then(response => response.json())
            .then(data => setQuotes(data.quotes))
            .catch(err => console.log(err));
    }, []);

    const handleNext = () => {
        // Generate random color
        const color = getRandomColor();
        setRandomColor(color);

        // Increment index and cycle through quotes array
        setCurrentIndex((prevIndex) => (prevIndex + 1) % quotes.length);
    };

    // Function to generate a random color in hex format
    const getRandomColor = () => {
        const letters = '0123456789ABCDEF';
        let color = '#';
        for (let i = 0; i < 6; i++) {
            color += letters[Math.floor(Math.random() * 16)];
        }
        return color;
    };

    return (
        <div className="container">
            <Row className="justify-content-center" >
                <Col md={6} className="text-center mt-5" >
                    {quotes.length > 0 && (
                        <div 
                            className="quote-container" 
                            style={{ 
                                backgroundColor: 'white', 
                                padding: '20px', 
                                borderRadius: '10px', 
                                width: '100%', 
                                height: '200px', // Fixed height
                                display: 'flex',
                                flexDirection: 'column',
                                justifyContent: 'center',
                                alignItems: 'center',
                                textAlign: 'center'
                            }}>
                            <h2 style={{ color: randomColor }}>{quotes[currentIndex].quote}</h2>
                            <p>- {quotes[currentIndex].author}</p>
                        </div>
                    )}
                </Col>
            </Row>
            <Row className="justify-content-center mt-3">
                <Col md={6} className="text-center">
                    <button className="btn btn-info" onClick={handleNext}>Next</button>
                </Col>
            </Row>
        </div>
    );
}

export default Home;
