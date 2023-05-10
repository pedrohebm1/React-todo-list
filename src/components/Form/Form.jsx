import React, { useState } from 'react'

import './Form.css'

export default function Form({ addTask }) {
  const [input, setInput] = useState('');

  const changeInput = event => setInput(event.target.value);
  return (
    <div id='Form'>
      <input id='textField' type="text" placeholder='Insert task here' onChange={changeInput}/>
      <input id='submit' type="button" value='Add' onClick={()=>addTask(input)}/>
    </div>
  )
}
