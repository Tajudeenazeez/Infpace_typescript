import React from 'react'

type PersonType = {
    nameT:{
    first: string,
    last: string
    }
    
}
function Person(props: PersonType) {
  return (
    <div>
        {props.nameT.first} and {props.nameT.last}
    </div>
  )
}

export default Person   