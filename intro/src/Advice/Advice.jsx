import {useEffect, useState} from 'react'
import '../Advice/advice.css'
export const Advice = () => {
    const[advice,setAdvice]=useState("Please click the button you get Advices")
    const [count,setCount]=useState(0)
    async function getAdvice(){
        try{
        const res=await fetch("https://api.adviceslip.com/advice")
        const data=await res.json()
        setAdvice(data.slip.advice)
        setCount(count+1)
        }
        catch(error){
            console.error(error)
        }
    }
    useEffect (function(){
        getAdvice()
    },[])
  return (
    <>
    <h2>{advice}</h2>
    <button onClick={getAdvice}>click to get Advice</button>
    <Counter count={count}/>
    </>
  )
}
function Counter(props){
  return (<p>You have read <b>{props.count}</b> pieces od advice</p>)
}