import React, { Component } from 'react';
import { Grid, Row, Col, Image } from 'react-bootstrap';

import logo from './res/logo.png';
import FormValidate from './FormValidate';
import PhotoSection from './PhotoSection';

import './App.css';

class App extends Component {
  render() {
    return (
      <div className="app">
        <header className="app-header">
          <img src={logo} className="app-logo" alt="logo" />
          <h1 className="app-title">Desafio IDDOG</h1>
        </header>
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
      </div>
    );
  }
}

export default App;
