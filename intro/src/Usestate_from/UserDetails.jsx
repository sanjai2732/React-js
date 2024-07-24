import {useState} from 'react'

export const UserDetails = () => {
  const [user,setUser]=useState({name:"sanjai",age:20})
   const ChangeName=()=>{
    // setUser({...user,name:"sam"})
    user.name =="sanjai" ? setUser({...user,name:"sam"}):setUser({...user,name:"sanjai"})
   }
   const ChangeAge=()=>{
    // setUser({...user,age:30})
    user.age==20?setUser({...user,age:21}):setUser({...user,age:20})
   }
  return (
    <>
    <h1>{user.name}</h1>
    <p>{user.age}</p>
    <button onClick={ChangeName}>Change Name</button>
    <button onClick={ChangeAge}>Change Age</button>
    </>

  )
}
