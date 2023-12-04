import React from 'react';
import {useState,useEffect,useRef} from "react";

let a = 0;
function Timer({sec,handeTime}) {
  const[countDown,setCountDown]=useState(sec);
  const timerId=useRef();
  useEffect(()=>{
    timerId.current=setInterval(()=>{
      setCountDown((prev) => {
        a = prev-1;
        console.log(prev)
        return a;
      })
    },1000)
    return ()=> {
      clearInterval( timerId.current);
      handeTime(a)
    };
  },[])
  useEffect(()=>{
    if(countDown<=0){
      clearInterval( timerId.current)
      alert("end")
    }
  },[countDown])

  return (
    <div className="timer">
      {parseInt(countDown/60)}:{parseInt(countDown%60)}
    </div>
  );
}

export default Timer;