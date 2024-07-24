import {useState} from 'react'
export const Cart = () => {
    const [Cartcount,setCartcount]=useState(0)
    const add=()=>{
        setCartcount(Cartcount+1)
    }
  return (<>
  <h1>Total to Cart product: {Cartcount}</h1>
  <button onClick={add}> {Cartcount} Add to cart</button>
  </>)
}
