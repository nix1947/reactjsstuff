import React from 'react';
export  const AddColorForm = (props) => {
  let _title, _color;

  const submit = (e) => {
    e.preventDefault();
    props.sendColor(_title.value, _color.value)

  }
  return (
    <form onClick={submit}>
      <input type="text"
        ref={input => _title = input}
      placeholder="your color.."
      refs="_title"/>
      <input
        ref={input => _color = input}

        type="color" />
        <input type="submit" value="Submit"/>
    </form>
  )
}
