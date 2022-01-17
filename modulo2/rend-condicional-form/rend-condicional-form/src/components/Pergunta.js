import React from "react";



 function Pergunta(props) {
  return (
    <div>
      <p>{props.perguntar}</p>
      <input 
      onChange={props.onChange} 
      value={props.value} />
    </div>
  );
}
export default Pergunta