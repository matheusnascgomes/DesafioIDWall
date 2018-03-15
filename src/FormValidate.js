import React, { Component } from 'react';
import axios from 'axios';

import { form, FormGroup, FormControl, Button, Grid, Row, Col } from 'react-bootstrap';

import './styles/FormValidate.css';

const URL = 'https://iddog-api.now.sh/';

class FormValidate extends Component {

    constructor(props){
        super(props);
        this.state = {
            email: '',
            token:  '',
            errorMessage: ''
        }

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
          
    }

    componentWillMount(){
        localStorage.getItem('email') 
        ? this.setState({ email: localStorage.getItem('email') }) 
        : this.setState({ email: '' });

        localStorage.getItem('token') 
        ? this.setState({ token: localStorage.getItem('token') }) 
        : this.setState({ token: '' });
    }

    componentWillUpdate(nextProps, nextState) {
        localStorage.setItem('email', nextState.email);
        localStorage.setItem('token', nextState.token);
    }    

    handleChange(e){
        this.setState({ email: e.target.value });
    }

    handleSubmit(e){
        axios.post(`${URL}signup`,{
            headers: {
                "Content-Type": "application/json",
            },
             "email": this.state.email
        }).then(res => {
            this.setState({ email: res.data.user.email, token: res.data.user.token });
        }).catch(err => this.setState({ errorMessage: err }));

        e.preventDefault();
    }

    render() {
    return (
            
        <Grid className="validate-section">
        <Row className="show-grid">
        {(this.state.email !== '' && this.state.token !== '') ?
        
            <Col className="title" sm={12} md={6} mdOffset={3}>
                <h4>Validado com sucesso!</h4>
                <p>{this.state.email}</p>
            </Col>
        : 
            <Col className="title" sm={12} md={6} mdOffset={3}>
                Autentique-se
                
                <form onSubmit={this.handleSubmit} >
                    <FormGroup controlId="">
                        <FormControl type="email" placeholder="Insira seu email"
                            onChange={this.handleChange}
                        />
                    </FormGroup>
                    <Button bsStyle="success" type="submit">Validar</Button>
                </form>
            </Col>
        }  
            </Row>
        </Grid>

        );
    }
}

export default FormValidate;
