import { useState } from 'react';
import ClassComp from './ClassComp';
import FuncComp from './FuncComp';

function App() {
  const [funcState,setFuncState]=useState(true);
  
  return (
    <div>
      <div style={{display:"flex"}}>
        <button onClick={()=>{setFuncState(!funcState)}}>Function</button>
        <button onClick={()=>{setFuncState(!funcState)}}>Class</button>
      </div> <br/> <br/>
      <div>
        {funcState ?  <FuncComp/> :null}
        {!funcState ?  <ClassComp/> :null}
      </div>
    </div>
  );
}
export default App;
