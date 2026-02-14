import { useRouteError } from "react-router-dom";
import React from "react";



const Error=()=>{
    const arr=useRouteError();
    console.log(arr);
    return (
        
            <div
            style={{
                textAlign: "center",
                marginTop: "50px",
                
            }}
            >
            <h1>Oops!!!</h1>
            <h2>Something went wrong !!</h2>
            <h3>Try login after some time being.....</h3>
            </div>
                )
}
export default Error