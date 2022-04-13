import React from "react";

class ButtonData extends React.Component {
  render() {
    const {arrayState} = this.props
    return (
      <div>
        { arrayState.map((state, index) => <p key={index}>{state}</p>) }
      </div>
    )
  }
}

export default ButtonData