import Carousel from 'react-bootstrap/Carousel';
import profileImage from '../assets/profileImage.jpeg';

function Experience() {
    const carouselStyle = {
        height: '400px', // Set the desired height
    };

    const imageStyle = {
        width: '100px',
        height: '100px', 
        objectFit: 'cover', 
        borderRadius: '50%', 
    }

    return (
        <div className="experienceContainer">
            <Carousel style={carouselStyle}>
                <Carousel.Item>
                    <img
                        src={profileImage}
                        alt="First slide"
                        style={imageStyle}
                    />
                    <Carousel.Caption>
                        <h3>Job1</h3>
                        <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        src={profileImage}
                        alt="First slide"
                        style={imageStyle}
                    />
                    <Carousel.Caption>
                        <h3>Job2</h3>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        src={profileImage}
                        alt="First slide"
                        style={imageStyle}
                    />
                    <Carousel.Caption>
                        <h3>Job3</h3>
                        <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
                    </Carousel.Caption>
                </Carousel.Item>
            </Carousel>
        </div>
    );
}

export default Experience;