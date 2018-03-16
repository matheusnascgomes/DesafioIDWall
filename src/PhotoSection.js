import React, { Component } from 'react';
import { Grid, Row, Col, Image } from 'react-bootstrap';
import axios from 'axios';

import './styles/PhotoSection.css';

const URL = 'https://iddog-api.now.sh/feed/';

class PhotoSection extends Component {

    constructor(props){
        super(props);
        this.state = {
            TOKEN: this.props.token,
            dogList: [],
            errorMessage: ''
        }

        this.randerPhotos = this.randerPhotos.bind(this);
        this.handleChoice = this.handleChoice.bind(this);

        this.randerPhotos();
    }

    randerPhotos(category = ''){

        axios.get(`${URL}?category=${category}`,{
                headers: {
                    "Authorization": this.state.TOKEN,
                    "Content-Type": "application/json",
                }
            }      
        )
        .then(res => (
            this.setState({ dogList: res.data.list })
        ))
        .catch(err => {
            this.setState({ errorMessage: err });
            console.log(this.state.errorMessage);
        });
    }

    handleChoice(e){
        this.randerPhotos(e.target.value);
    }

    render(){
        return(
            <Grid className="photo-section">
                <Row className="show-grid">
                    <Col className="photo-links" sm={12} md={6} mdOffset={3}>
                        <button onClick={this.handleChoice} value="husky" >husky</button>
                        <button onClick={this.handleChoice} value="hound" >hound</button>
                        <button onClick={this.handleChoice} value="pug" >pug</button>
                        <button onClick={this.handleChoice} value="labrador" >labrator</button>
                    </Col>
                    <Col className="photos" md={12}> 
                        
                        {
                            this.state.dogList.map(photo => (
                            <div key={photo}>
                                <Image src={photo} rounded width="350" height="350"/>
                            </div>
                        ))
                        }
                        
                    </Col>
                </Row>
            </Grid>
        );
    }
    
}


export default PhotoSection;
