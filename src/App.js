import React from "react"
import {useState, useEffect, useRef} from "react"



export default function App() {
    const[count, setCount] = useState(0)
    const [timer, setTimer] = useState(10)
    const id = useRef(null)
    
    const clear = () => window.clearInterval(id.current)
    
    useEffect(() =>{
        id.current = window.setInterval(() =>{
            setTimer((time) => time -1)
        },1000)
        
        return clear
    }, [])
    
   useEffect(() =>{
       if(timer === 0){
           clear()
       }
   }, [timer])
    
    return(
        <div className="container">
        <h1>{count} Clicks</h1>
        <h3>Time left: {timer} Seconds</h3>
        {timer === 0 ? null :
        <button onClick={() => setCount((c) => c + 1)}>+</button>}
        </div>
    )
}

