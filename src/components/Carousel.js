import React from 'react';

import Card from '../components/Card';

import A51 from '../assets/images/A51.jpg';
import linkedin from '../assets/images/linkedin.JPG';
import SorveTec from '../assets/images/SorveTec.jpeg';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';

class Carousel extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            items: [
                {
                    id: 0,
                    title: 'Git Hub',
                    subTitle: 'Game A51-Invasion',
                    imgSrc: A51,
                    link: 'https://github.com/Remysonrodrigues/Game-A51-Invasion',
                    selected: false
                },
                {
                    id: 1,
                    title: 'Remyson Rodrigues',
                    subTitle: 'Portfolio Linkedin',
                    imgSrc: linkedin,
                    link: 'https://www.linkedin.com/in/remyson-rodrigues-a3295b135/',
                    selected: false
                },
                {
                    id: 2,
                    title: 'SorveTec',
                    subTitle: 'API-REST para gerenciar sorveterias do tipo self-service',
                    imgSrc: SorveTec,
                    link: 'https://github.com/Remysonrodrigues/api-rest-sorveteria',
                    selected: false
                },
            ]
        }
    }


    handleCardClick = (id, card) => {

        let items = [...this.state.items];

        items[id].selected = items[id].selected ? false : true;

        items.forEach(item => {
            if(item.id !== id) {
                item.selected = false;
            }
        });

        this.setState({
            items
        });
    }


    makeItems = (items) => {
        return items.map(item => {
            return <Card item={item} click={(e => this.handleCardClick(item.id, e))} key={item.id} />
        })
    }


    render() {
        return(
            <Container fluid={true}>
                <Row className="justify-content-around">
                    {this.makeItems(this.state.items)}
                </Row>
            </Container>
        );
    }

}

export default Carousel;