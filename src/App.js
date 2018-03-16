import React, { Component } from 'react';
import { Grid } from 'react-bootstrap';

import Header from './Header';
import FormValidate from './FormValidate';
// import PhotoSection from './PhotoSection';
import Footer from './Footer';

import './styles/App.css';

class App extends Component {

  render() {
    return (
      <Grid className="app">

        <Header />

        <FormValidate />

        {/* <PhotoSection />  */}
      
        <Footer />
        
      </Grid>
    );
  }
}

export default App;
