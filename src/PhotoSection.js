import React, { Component } from 'react';
import { Grid, Row, Col, Image } from 'react-bootstrap';

import './styles/PhotoSection.css';

class PhotoSection extends Component {

    render(){
        return(
            <Row className="show-grid">
                <Col className="photo-links" sm={12} md={6} mdOffset={3}>
                <a href="" >Husky</a>
                <a href="" >Labrador</a>
                <a href="" >Hound</a>
                <a href="" >Pug</a>
                </Col>
                <Col className="photos" md={12}>
                <Row>

                <Image src="http://via.placeholder.com/350x150" thumbnail />
            
                <Image src="http://via.placeholder.com/350x150" thumbnail />

                <Image src="http://via.placeholder.com/350x150" thumbnail />

                <Image src="http://via.placeholder.com/350x150" thumbnail />

                <Image src="http://via.placeholder.com/350x150" thumbnail />
                
                <Image src="http://via.placeholder.com/350x150" thumbnail />
                
                </Row>
                </Col>
            </Row>
        );
    }
    
}


export default PhotoSection;
