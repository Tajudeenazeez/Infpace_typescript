import React from 'react'
type statusProps ={
        status: "success" | "isLoading" | "error"
    }

function Status(props: statusProps) {
    // let message;
    // if( props.status === "success"){
    //     message = "success"
    // } else if( props.status === 'isloading'){
    //     message = "loading..."
    // } else{
    //     message = "error"
    // }
  return (
    <div>
        {props.status === "success" ? "success" : props.status === "isLoading"? "loading..." : "error" }

    </div>
  )
}

export default Status