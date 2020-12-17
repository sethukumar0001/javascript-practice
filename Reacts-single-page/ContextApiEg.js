import React, { useState } from 'react';
const lang = {en:"en", fr :"fr"}
const intial = {color:"black",ln:"eng"}
const {Provider,Consumer} = React.createContext(intial)


function ContextApiEg(props) {


    const [infor,setInfor] = useState(intial)
    return (
        <div>
            <Provider value={infor}>
    <p>{infor.color}</p>
            <Child1 />
            </Provider>
        </div>
    );
}



const Child1 =() => {
  return(
    <Child11></Child11>
  )
}

const Child11 = () => {
  return(
    <Child2></Child2> 
  )
}

const Child2  = () =>{
  return(
    <Consumer>
      {values=>
      <>
      <p>
        {values.color}
      </p>
      </>
}
    </Consumer>
  )
}





export default ContextApiEg;
