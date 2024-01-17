import React, { useState, useEffect } from "react";
import profileImage from '../assets/profileImage.jpeg';
import { Container, Row, Col } from "react-bootstrap";
  

export const Banner = () => {
    const [loopNum, setLoopNum] = useState(0);
    const [isDeleting, setIsDeleting] = useState(false);
    const toRotate = ["Web Developer", "Web Designer", "UI/UX Designer"]
    const [text, setText] = useState('');
    const [delta, setDelta] = useState(300 - Math.random() * 100);
    const period = 2000;

    useEffect(() => {
        let ticker = setInterval(() => {
            tick();
        }, delta);
    
        return () => {
            clearInterval(ticker);
        };
    
    }, [text, delta]);

    const tick = () => {
        let i = loopNum % toRotate.length;
        let fullText = toRotate[i];
        let updatedText = isDeleting ? fullText.substring(0, text.length - 1) : fullText.substring(0, text.length + 1);

        setText(updatedText);

        if (isDeleting) {
            setDelta(prevDelta => prevDelta / 2)
        }

        if (!isDeleting && updatedText === fullText) {
            setIsDeleting(true);
            setDelta(period);
        } else if (isDeleting && updatedText === '') {
            setIsDeleting(false);
            setLoopNum(loopNum + 1);
            setDelta(500);
        }

        

    }


    return (
        <section className="banner" id="home">
            <Container>
                <Row className="align-items-center">
                    <Col xs={12} md={6} xl={7}>
                        <h1>{`Hi, I'm Diana`} </h1>
                        <h1 className="wrap">{text}</h1>

                        {/* "Embarking on a journey towards becoming a web designer 
                         fueled by a passionate enthusiasm for web design." */}
                         
                        <p>Welcome to my personal space for projects and passion</p>
                        <button onClick={() => console.log('connect')}>View Resume</button>
                    </Col>
                    <Col xs={12} md={6} xl={5} className="profile-image-container">
                        <img 
                            src={profileImage} 
                            alt="profile image"
                            style={{ 
                                width: '25rem',
                                height: 'auto',
                                borderRadius: '50%',
                                aspectRatio: '1 / 1',
                                objectFit: 'cover',
                                marginTop: '130px',
                            }} />
                    </Col>
                </Row>
            </Container>
        </section>
    )
}


