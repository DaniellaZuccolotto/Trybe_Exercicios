import './App.css';
import React from 'react';



class App extends React.Component {
  constructor() {
    super()
    // A função abaixo vincula "manualmente" o `this` à nossa função
    this.handleClick = this.handleClick.bind(this);
    this.handleClick2 = this.handleClick2.bind(this);
    this.handleClick3 = this.handleClick3.bind(this);
    this.state = {
      numeroDeCliques: 0,
      numeroDeCliques2: 0,
      numeroDeCliques3: 0,
    }
  }

  handleClick() {
    console.log(this);
    console.log('Clicou no botão!');
    this.setState((estadoAnterior, _props) => ({ 
      numeroDeCliques: estadoAnterior.numeroDeCliques + 1,   
    }));
    console.log(this.state.numeroDeCliques);
    console.log(this.state.numeroDeCliques + 1);
    if ((this.state.numeroDeCliques + 1) % 2 === 0) {
      return console.log('Verde');      
    } else {
      return console.log('Sem cor');
    }
  }

  handleClick2() {
    console.log(this);
    console.log('Clicou no botão2!');
    this.setState((estadoAnterior2, _props) => ({ 
      numeroDeCliques2: estadoAnterior2.numeroDeCliques2 + 1,
    }));
  }

  handleClick3() {
    console.log(this);
    console.log('Clicou no botão3!');
    this.setState((estadoAnterior3, _props) => ({ 
      numeroDeCliques3: estadoAnterior3.numeroDeCliques3 + 1,
    }));
  }

  render() {
    return (
      <div>
      <button onClick={ this.handleClick }>Meu botão {this.state.numeroDeCliques}</button>
      <button onClick={ this.handleClick2 }>Meu botão2 {this.state.numeroDeCliques2}</button>
      <button onClick={ this.handleClick3 }>Meu botão3 {this.state.numeroDeCliques3}</button>
      </div>
    );
  }
}

export default App;
