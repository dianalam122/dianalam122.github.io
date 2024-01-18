import React, { useState, useEffect } from "react";
import profileImage from '../assets/profileImage.jpeg';
import { Container, Row, Col } from "react-bootstrap";
import emailIcon from '../assets/emailIcon.png';
import linkedinIcon from '../assets/linkedinIcon.png';
import githubIcon from '../assets/githubIcon.png';

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
                        <h1>{`Hi, I'm Diana!`} </h1>
                        <h1 className="wrap">{text}</h1>
                        <p>Welcome to my personal space for projects and passion</p>
                        {/* <button onClick={() => console.log('connect')}>View Resume</button> */}
                        <span className="navbar-text">
                            <div className="social-icon">
                                <a href="#"><img src={emailIcon} alt="email icon" /></a>
                                <a href="#"><img src={linkedinIcon} alt="linkedin icon" /></a>
                                <a href="#"><img src={githubIcon} alt="github ion" /></a>
                            </div>
                        </span>
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





// to do:
// - animate terminal with description 
// - button CSS