import React from 'react';
import { connect } from 'react-redux';
import propTypes from 'prop-types';
import { fetchCharacter } from '../actions/actions'
import './SearchForm.css';

class SearchForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      inputText: '',
      characterSearched: '',
    };
    this.handleChange = this.handleChange.bind(this);
    this.submitName = this.submitName.bind(this);
  }

handleChange(e) {
  this.setState({
    inputText: e.target.value,
    characterSearched: '',
  })
}

submitName(e) {
  e.preventDefault();
  const { inputText } = this.state;
  const { fetchFunction }  = this.props;

  this.setState({
    inputText: '',
    characterSearched: inputText,
  })
  fetchFunction(inputText)
}

render() {
  const { inputText } = this.state;
  return (
    <div>
      <form onSubmit={this.submitName}>
        <h1>Type a character below:</h1>
        <input onChange={this.handleChange} 
        placeholder="Enter Character"
        value={inputText}
        />
        <div className="buttonSection">
          <button className="submitButton" type="submit" >Search!</button>
        </div>
      </form>
    </div>
  )
}
};

// mapeie as ações despachadas como propriedade do componente

const mapDispatchToProps = (dispatch) => ({
  fetchFunction: (nameType) => dispatch(fetchCharacter(nameType))
});

SearchForm.propTypes = {
  fetchFunction: propTypes.func.isRequired,
};
//faça as proptypes da ação oriunda do thunk
// conecte as ações despachadas ao redux
export default connect(null, mapDispatchToProps)(SearchForm);
