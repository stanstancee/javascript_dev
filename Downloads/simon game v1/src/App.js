import React ,{useState} from "react";
import "./styles.css";
import Buttons from './buttons'

export default function App() {

  let myColor = ['red','green','blue','yellow']
 const [on,setOn] = useState(false);
const [level, setLevel] = useState('');


let AnimateDiv = ()=>{
 let green =  document.querySelector('.green');
 green.classList.add("green-pressed")
 setTimeout(function () {
 green.classList.remove("green-pressed");
}, 1000)
}























  return (

    <div className=" container row">
      <div className='center'> 
       <button onClick={AnimateDiv}>ON</button>
          <p>SIMON</p>
      </div>
      {myColor.map((colour,index)=>{
        
        return(
        
        <Buttons colour={colour} key={index}/>
        )
      })}
        
    </div>
  );
}
