import React from 'react'

type personProps = {
    name: {
        first: string,
        last: string
    }[];
}

function PersonList(props: personProps) {
   
  return (
    <div>
        {props.name.map(list => <div key={list.first}>{list.first}</div>)}
    </div>
  )
}

export default PersonList