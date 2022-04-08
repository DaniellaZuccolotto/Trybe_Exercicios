import React from "react";

class Pokemon extends React.Component {
  render() {
    const { objeto } = this.props;
    console.log();
    return (
      <section>
        <p>{objeto.name}</p>
        <p>{objeto.type}</p>
        <p>{`${objeto.averageWeight.value} ${objeto.averageWeight.measurementUnit}`}</p>    
        <img src={objeto.image} alt="imagem"></img>
      </section>
    )
  }
}

export default Pokemon