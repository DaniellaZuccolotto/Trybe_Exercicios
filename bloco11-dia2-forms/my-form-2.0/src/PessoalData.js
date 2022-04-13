import React from "react";

class PessoalData extends React.Component {
  render() {
    const brazilStates = [
      "Acre",
      "Alagoas",
      "Amapá",
      "Amazonas",
      "Bahia",
      "Ceará",
      "Distrito Federal",
      "Espirito Santo",
      "Goiás",
      "Maranhão",
      "Mato Grosso do Sul",
      "Mato Grosso",
      "Minas Gerais",
      "Pará",
      "Paraíba",
      "Paraná",
      "Pernambuco",
      "Piauí",
      "Rio de Janeiro",
      "Rio Grande do Norte",
      "Rio Grande do Sul",
      "Rondônia",
      "Roraima",
      "Santa Catarina",
      "São Paulo",
      "Sergipe",
      "Tocantins",
    ];
    const {changeHandler, stateName, specialCaracter, stateAdress,  cityFocus} = this.props;
    return (
      <div>
        <fieldset>
          <legend>Dados Pessoais</legend>
          <form>
            <label htmlFor="name">
              Nome:
              <input onChange={changeHandler} value={stateName} type='text' name='name' maxLength='40' required></input>
            </label>
            <label htmlFor="email">
              Email:
              <input onChange={changeHandler} type='email' name='email' maxLength='50' required></input>
            </label>
            <label htmlFor='cpf'>
              CPF:
              <input onChange={changeHandler} type='text' name='cpf' maxLength='11' required></input>
            </label>
            <label htmlFor='adress'>
              Endereço:
              <input onChange={specialCaracter} value={stateAdress} type='text' name='adress' maxLength='200' required></input>
            </label>
            <label htmlFor='city'>
              Cidade:<input onChange={changeHandler} onBlur={cityFocus} type='text' name='city' maxLength='28' required></input>
            </label>
            <label htmlFor='state'>Escolha o estado</label>
            <select id='state' onChange={changeHandler} name='state'>
              { brazilStates.map((state) => <option key={state} value={state}>{state}</option>) }
            </select>
            <label htmlFor='house'>
              Casa: <input onChange={changeHandler} value='Casa' id='house' type='radio' name='house' required></input>
            </label>
            <label htmlFor='apt'>
              Apartamento:<input onChange={changeHandler} value='Apartamento' id='apt' type='radio' name='house' required></input>
            </label>
          </form>
        </fieldset>
      </div>
    )
  }
}

export default PessoalData