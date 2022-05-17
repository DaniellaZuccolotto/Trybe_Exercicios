import React from 'react';
import { connect } from 'react-redux';
import propTypes from 'prop-types';

class CharacterInfo extends React.Component {
  render() {
    const { name, gender, aliases, books, loading, error } = this.props;
    console.log(this.props);
    if (!loading) {
      return (
        <ul>
          <li>Name: {name}</li>
          <li>Gender: {gender}</li>
          {/* <li>Aliases: {aliases.map((alias, index) => <p key={`${alias}-${index}`}>{alias}</p>)}</li> */}
          <li>Aliases: 
          <p>{aliases[0]}</p>
          <p>{aliases[1]}</p>
          <p>{aliases[2]}</p>
          <p>{aliases[3]}</p>
          <p>{aliases[4]}</p>
          <p>{aliases[5]}</p>
          <p>{aliases[6]}</p>
          </li> 
          {/* <li>Books: {books.map((book, index) => <p key={index}>{book}</p>)}</li> */}
          <li>Books: {books[0]}</li>
        </ul>
      )
    }
    if (error) { return <div>{error}</div>; }
    if (loading) { return <div>Loading...</div>; }
    return <div>Type a character name and click to search!</div>;
  }
};

//mapeie o estado global para a propriedade da sua aplicação
const mapStateToProps = (state) => ({
  name: state.reducerFetch.name,
  gender: state.reducerFetch.gender,
  aliases: state.reducerFetch.aliases,
  books: state.reducerFetch.books,
  loading: state.reducerFetch.loading,
  error: state.reducerFetch.error,
});

// conecte este componente ao redux aqui
export default connect(mapStateToProps)(CharacterInfo);
//faça as propTypes
CharacterInfo.propTypes = {
  loading: propTypes.bool.isRequired,
  character: propTypes.arrayOf(propTypes.object),
  error: propTypes.string,
};
