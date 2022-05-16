import React, { Component } from 'react';
import PropTypes from 'prop-types';

import { connect } from 'react-redux';
import { addPersonalAction } from '../redux/actions/action';
import Input from '../components/Input';
import Button from '../components/Button';
import Select from '../components/Select';

class PersonalForm extends Component {
  constructor() {
    super();

    this.state = {
      nome: '',
      email: '',
      cpf: '',
      endereco: '',
      cidade: '',
      estado: '',
    };
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange({ target }) {
    const { name, value } = target;
    this.setState({ [name]: value });
  }

  handleSubmit() {
    const { history, addPersonal } = this.props;
    addPersonal(this.state);
    history.push('/professionalform');
  }

  render() {
    const { nome, email, cpf, endereco, cidade, estado } = this.state;
    const states = [
      'Rio de Janeiro',
      'Minas Gerais',
      'Amapá', 'Amazonas', 'São Paulo', 'Ceará', 'Distrito Federal'];

    console.log(this.props);
    return (
      <fieldset>
        <h2>Personal Form</h2>
        <Input
          label="nome: "
          type="text"
          onChange={ this.handleChange }
          value={ nome }
          name="nome"
          required
        />
        <Input
          label="email: "
          type="text"
          onChange={ this.handleChange }
          value={ email }
          name="email"
          required
        />
        <Input
          label="cpf: "
          type="text"
          onChange={ this.handleChange }
          value={ cpf }
          name="cpf"
          required
        />
        <Input
          label="endereco: "
          type="text"
          onChange={ this.handleChange }
          value={ endereco }
          name="endereco"
          required
        />
        <Input
          label="cidade: "
          type="text"
          onChange={ this.handleChange }
          name="cidade"
          value={ cidade }
        />
        <Select
          defaultOption="Selecione"
          onChange={ this.handleChange }
          value={ estado }
          label="Estado: "
          id="estado"
          name="estado"
          options={ states }
        />
        <Button
          type="button"
          label="Enviar"
          onClick={ this.handleSubmit }
        />
      </fieldset>
    );
  }
}

PersonalForm.propTypes = {
  history: PropTypes.shape({
    push: PropTypes.func.isRequired,
  }).isRequired,
  addPersonal: PropTypes.func.isRequired,
};

function mapDispatchToProps(dispatch) {
  return {
    addPersonal: (state) => dispatch(addPersonalAction(state)),
  };
}

export default connect(null, mapDispatchToProps)(PersonalForm);
