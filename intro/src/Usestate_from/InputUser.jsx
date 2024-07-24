import {useState} from 'react'
export const InputUser = () => {
    const[user,setUser]=useState({fname:"Sanjai",lname:"guru",age:20})
    const changHandler=(e)=>{
        setUser({...user,[e.target.name]:e.target.value})

    }
  return (
    <>
    <h1>{user.fname} {user.lname},{user.age}</h1>
        <input type="text" value={user.fname} placeholder='enter the first name' name='fname' onChange={changHandler}  />
        <input type="text" value={user.lname} placeholder='enter the last name' name='lname'  onChange={changHandler}  />
        <input type="text" value={user.age} placeholder='enter the age' name='age'  onChange={changHandler}  />
    </>
  )
}
