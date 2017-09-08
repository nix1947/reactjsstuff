import React, { Component } from 'react';



export default class AddColorForm extends Component {
  constructor(props) {
    super(props);
    // Need to bind this, while calling a function.
    this.submit = this.submit.bind(this);
  }

  submit(e) {
    const {_title, _color } = this.refs;
    e.preventDefault();
    // pass data to some getColor handler which might be action.
    this.props.getColor(this.refs._title.value, this.refs._color.value)
    // rest the form
    this.refs._title.value = "";
    this.refs._color.value = '#000';
    this.refs._title.focus();

  }

  render() {
    // ref is an identifier, that react used to indentify dom.
    return (
      <form onSubmit={this.submit}>
        <input
          type="text"
          ref="_title"
          placeholder="color title ..." />
        <input
          ref="_color"
          type="color" />
          <button type="submit">Submit</button>
      </form>
    )
  }
}


// // Defining default props types.
// AddColorForm.propTypes = {
//   getColor: propTypes.Func
// }

// set the default values to handle, when the props are not sent.
// AddColorForm.propTypes = {
// onNewColor: PropTypes.func
// }
// AddColorForm.defaultProps = {
// onNewColor: f=>f
// }
