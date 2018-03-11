import React, { Component } from 'react';
import { Grid, Row, Col} from 'react-bootstrap';

import logo from './res/logo.png';
import './styles/Footer.css';

class Footer extends Component {

    render() { 
        return (
            <Grid className="footer-section">
                <Row className="show-grid">
                    <Col ><img src={logo} className="" alt="logo" /></Col>
                    <Col className="footer-title" >© 2018 Matheus Is Proudly Powered By Matheus Gomes.</Col>
                    <Col >Redes Sociais</Col>
                </Row>
            </Grid>
        );
    }
}
 
export default Footer;
