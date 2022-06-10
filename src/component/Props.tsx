import React from 'react'
type TypeProps = {
  name : string;
  messageNumber?: number;
  isLoggedIn: boolean;
}
function Props(props: TypeProps) {
  return (
    <div>
      {props.isLoggedIn ? <h1>Welcome {props.name}! You have {props.messageNumber} messages.</h1> : <h1>Welcome Guest </h1>} 


    </div>
  )
}

export default Props