import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

function Footer() {

    return(
        <footer className="mt-5">
            <Container fluid={true}>
                <Row className="border-top justify-content-between p-3">
                    <Col className="p-0" md={3} sm={12}>
                        Copyright © 2020 Remyson Dev                        
                    </Col>
                    <Col className="p-0 d-flex justify-content-end" md={3} >
                        <a href="https://www.instagram.com/remyson_costa/?hl=pt-br">
                            INSTAGRAM
                        </a>                        
                        <a href="https://www.linkedin.com/in/remyson-rodrigues-a3295b135/">
                            LINKEDIN
                        </a>
                        <a href="https://github.com/Remysonrodrigues">
                            GITHUB
                        </a>                        
                    </Col>
                </Row>
            </Container>
        </footer>
    );

}

export default Footer;