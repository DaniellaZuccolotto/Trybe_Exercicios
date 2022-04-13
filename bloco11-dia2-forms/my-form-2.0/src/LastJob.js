import React from "react";

class LastJob extends React.Component {
  render() {
    const {leaveMouse, changeHandler} = this.props;
    return (
      <div>
        <fieldset>
          <legend>Dados do seu último emprego</legend>
          <form>
            <label htmlFor='curriculum'>
            Resumo do seu currículo:
            <textarea onChange={changeHandler} name='curriculum' maxLength='1000' required>Escreva aqui</textarea>
            </label>
            <label htmlFor='job'>
              Cargo:
              <input onChange={changeHandler} onMouseEnter={leaveMouse} type='text' name='job' maxLength='40' required></input>
            </label>
            <label type='jobDescription'>
              Descrição do cargo:
              <input onChange={changeHandler} type='text' name='jobDescription' maxLength='500' required></input>
            </label>
          </form>
        </fieldset>
      </div>
    )
  }
}

export default LastJob