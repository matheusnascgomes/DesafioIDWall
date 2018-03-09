import React, { Component } from 'react';
import {
form,
FormGroup,
ControlLabel,
FormControl,
ButtonToolbar,
Button } from 'react-bootstrap';

import FormValidateStyle from './FormValidateStyle.css';

class FormValidate extends Component {

    render() {
    return (                
        <form>
            <FormGroup controlId="">
                <FormControl type="email" placeholder="Insira seu email" />
            </FormGroup>
            <Button bsStyle="success" type="submit">Validar</Button>
        </form>
        );
    }
}

export default FormValidate;
