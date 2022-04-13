import React from 'react'
import './App.css';
import PessoalData from './PessoalData';
import LastJob from './LastJob';
import ButtonData from './ButtonData';

class App extends React.Component {
  constructor(){
    super();
    this.state={
      name:'',
      email:'',
      cpf: '',
      adress:'',
      city:'',
      state:'',
      house: '',
      curriculum:'',
      job: '',
      jobAlert:'yes',
      jobDescription:'',
      showing: false, 
    }
  }

  changeHandler = event => {
    let { name, value } = event.target;
    if (name === 'name') value = value.toUpperCase();
    this.updateState(name, value);
  }
  
  updateState(name, value) {
    this.setState(() => ({ [name]: value }));
  }

  specialCaracter = ({ target }) => {
    const endereco = target.value;
    this.setState(() => ({ adress: endereco.replace(/[^a-zA-Zs]/g, ""), }))
  }

  cityFocus = ({ target }) => {  
    target.value = target.value.match(/^\d/) ? '' : target.value;
    this.setState(() => ({ city: target.value }))
  }

  leaveMouse = ({ target }) => {
    if (this.state.jobAlert === 'yes') {
      alert('Preencha com cuidado esta informação.')
      this.setState(() => ({ jobAlert: 'no' }))
    }     
  }

  render() {
    return (      
      <div>
        <PessoalData 
          changeHandler={this.changeHandler} stateName ={this.state.name}
          specialCaracter={this.specialCaracter} stateAdress={this.state.adress}
          cityFocus={this.cityFocus} stateCity={this.state.city}
        />
        <LastJob
           leaveMouse={this.leaveMouse}
           changeHandler={this.changeHandler}
        />
        <button onClick={() => this.setState({ showing: true })}>Enviar Formulario</button>
        <div style={{ display: (this.state.showing ? 'block' : 'none') }}>
          <ButtonData
            arrayState={[this.state.name, this.state.email, this.state.cpf, this.state.adress,
            this.state.city, this.state.state, this.state.house, this.state.curriculum, this.state.job,
            this.state.jobDescription]}
          />
        </div>
        <button type='reset'>Limpar</button>        
      </div>
    )
  }
}

export default App;
