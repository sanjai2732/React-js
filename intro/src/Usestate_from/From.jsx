import {useState} from 'react'
import '../Usestate_from/from.css'

export const From = () => {
    const [user,setUser]=useState({
        name:"sanjai",
        age:20,
        gender:"Male",
        marital:true,
        country:"India",
        bio:"lorem ipsum dolor,sit amet cosectetur"
    })
    function changHandler(e){
    const name=e.target.name
    const value=e.target.type ==="checkbox"?e.target.checked:e.target.value
    setUser({...user,[name]:value})
    }
  return (
    <>
        <tbody>
            <table>
                <tr>
                    <th>Name</th>
                    <td>{user.name}</td>
                </tr>
                <tr>
                    <th>Age</th>
                    <td>{user.age}</td>
                </tr>
                <tr>
                    <th>Gender</th>
                    <td>{user.gender}</td>
                </tr>
                <tr>
                    <th>Marital status</th>
                    <td>{user.marital ?"Married":"Not Married"}</td>
                </tr>
                <tr>
                    <th>country</th>
                    <td>{user.country}</td>
                </tr>
                <tr>
                    <th>Bio</th>
                    <td>{user.bio}</td>
                </tr>
            </table>
        </tbody>
    <from>
        <input type="text" name='name' placeholder='Enter user Name' value={user.name} onChange={changHandler} />
        <input type="text" name='age' placeholder='Enter user Age'value={user.age} onChange={changHandler} />
        <label htmlFor="gender">
            <input type="radio" name="gender" onChange={changHandler} value='Male' checked={user.gender=="Male"} />Male
            <input type="radio" name="gender" onChange={changHandler} value='Female' checked={user.gender=="Female"} />Female
        </label>
        <label htmlFor="Marital" id="Marital">
            <input type="checkbox"  onChange={changHandler} checked={user.marital} name='marital'/>is Married
        </label>
        <label htmlFor="country">select your Nation
            <select name="country" id="country" value={user.country}  onChange={changHandler}>
                <option  value="India">India</option>
                <option   value="China">China</option>
                <option    value="Russia">Russia</option>
            </select>
        </label>
        <textarea placeholder='Write about you' name="bio" value={user.bio} onChange={changHandler} ></textarea>
    </from>

  
    </>
  )
}
