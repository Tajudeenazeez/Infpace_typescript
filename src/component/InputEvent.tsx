import React from 'react'

type InputProps = {
    value: string
    handleOnChange : (event: React.ChangeEvent) => void
}

function InputEvent(props: InputProps) {
  return (
    <div>
        <input type="text" value='' onChange={props.handleOnChange}/>
        <button>click</button>
    </div>
  )
}

export default InputEvent