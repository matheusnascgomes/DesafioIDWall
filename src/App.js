import React, { Component } from 'react';
import { Grid, Row, Col } from 'react-bootstrap';

import Header from './Header';
import FormValidate from './FormValidate';
import PhotoSection from './PhotoSection';
import Footer from './Footer';

import './styles/App.css';

class App extends Component {

  render() {
    return (
      <Grid className="app">

        <Header />

        <Grid className="validate-section">
            <Row className="show-grid">
               <Col className="title" sm={12} md={6} mdOffset={3}>
                  Autentique-se
                  <FormValidate />
               </Col>
            </Row>
        </Grid>

        <Grid className="photo-section">
            <PhotoSection />
        </Grid>

        <Grid className="footer-section">
          <Footer />
        </Grid>
      </Grid>
    );
  }
}

export default App;
