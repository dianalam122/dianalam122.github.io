import Carousel from 'react-bootstrap/Carousel';
import Resume from '../assets/resumeWebsite.pdf';


function Experience() {
    const carouselStyle = {
        height: '400px',
        paddingTop: '60px',
    };

    const imageStyle = {
        width: '100px',
        height: '100px', 
        objectFit: 'cover', 
        borderRadius: '50%', 
    }

    return (
        <div className="experienceContainer">
            <h1>Experiences</h1>
            <Carousel style={carouselStyle} variant="dark">
                <Carousel.Item className="carousel-item">
                    <Carousel.Caption>
                        <h1>Marketing Director</h1>
                        <h3>Ignition Hacks</h3>
                        <p>Devised and executed a comprehensive social media campaign, resulting in a record-breaking 700+ participants. Led and directed the marketing team to boost the number of participants by 188% since last iteration.</p>
                        <button onClick={() => window.open(Resume, "_blank")}>
                        resume
                        </button>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item className="carousel-item">
                    <Carousel.Caption>
                        <h1>Face Painter</h1>
                        <h3>Self-employed</h3>
                        <p>
                            Established partnerships with companies across the GTA, offering professional face painting services for
                            diverse events, including Taste of India and Taste of Middle East, engaging with over 300,000 participants      
                        </p>
                        <button onClick={() => window.open({Resume}, "_blank")}>
                        resume
                        </button>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item className="carousel-item">
                    <Carousel.Caption>
                        <h1>Youth Project Coordinator</h1>
                        <h3>SEAS Centre</h3>
                        <p>
                            Handled entire project scope, managing the project team and the resources assigned to the project. 
                            Assisted colleagues by breaking down complex project topics into manageable components to delegate.
                        </p>
                        <button onClick={() => window.open({Resume}, "_blank")}>
                        resume
                        </button>
                    </Carousel.Caption>
                </Carousel.Item>
            </Carousel>
        </div>
    );
}

export default Experience;