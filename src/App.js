import React, { Component } from 'react';
import { Grid, Row, Col } from 'react-bootstrap';

import logo from './res/logo.png';
import FormValidate from './FormValidate';

import './App.css';

class App extends Component {
  render() {
    return (
      <div className="app">
        <header className="app-header">
          <img src={logo} className="app-logo" alt="logo" />
          <h1 className="app-title">Desafio IDDOG</h1>
        </header>
        <Grid className="main">
            <Row className="show-grid">
               <Col sm={12} md={6} mdOffset={3}>
                  <FormValidate />
               </Col>
            </Row>
        </Grid>
      </div>
    );
  }
}

export default App;
