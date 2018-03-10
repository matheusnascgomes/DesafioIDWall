import React, { Component } from 'react';
import axios from 'axios';
import { form, FormGroup, FormControl, Button } from 'react-bootstrap';

import './styles/FormValidate.css';

const URL = 'https://iddog-api.now.sh/';
axios.defaults.headers.post['Content-Type'] = 'application/json';
class FormValidate extends Component {

    constructor(props){
        super(props);
        this.state = {
            email: '',
            errorMessage: ''
        }

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(e){
        this.setState({ email: e.target.value });
    }

    handleSubmit(e){

        axios.post(`${URL}signup/`,{email: this.state.email}).then(response => {
            console.log(response.data)
        });

        e.preventDefault();
    }

    render() {
    return (                
        <form onSubmit={this.handleSubmit} >
            <FormGroup controlId="">
                <FormControl type="email" placeholder="Insira seu email"
                    onChange={this.handleChange}
                />
            </FormGroup>
            <Button bsStyle="success" type="submit">Validar</Button>
        </form>
        );
    }
}

export default FormValidate;
