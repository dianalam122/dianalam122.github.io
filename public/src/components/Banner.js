// import profileImage from 'https://placehold.co/60x40';
import { Container, Row, Col } from "react-bootstrap";
import emailIcon from '../assets/emailIcon.png';
import linkedinIcon from '../assets/linkedinIcon.png';
import githubIcon from '../assets/githubIcon.png';

export const Banner = () => {
    return (
        <section className="banner" id="home">
            <Container>
                <Row className="align-items-center">
                        <div className="bannerText">
                            <h1 class="BannerFont">{`Hi, I'm Diana.`} </h1>
                            <h1 class="BannerFont">A Web Developer.</h1>
                            <div className="social-icon">
                                <a href="#"><img src={emailIcon} alt="email icon" /></a>
                                <a href="#"><img src={linkedinIcon} alt="linkedin icon" /></a>
                                <a href="#"><img src={githubIcon} alt="github ion" /></a>
                            </div>
                        </div>
                    {/* <Col xs={12} md={6} xl={5} className="profile-image-container">
                        <img 
                            src='https://placehold.co/60x40'
                            alt="profile image"
                            style={{ 
                                width: '20rem',
                                height: 'auto',
                                borderRadius: '50%',
                                aspectRatio: '1 / 1',
                                objectFit: 'cover',
                                marginTop: '100px',
                                marginBottom: '100px',
                            }} />
                    </Col> */}
                </Row>
            </Container>
        </section>
    )
}
