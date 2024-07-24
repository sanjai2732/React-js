import {useState} from 'react'
import '../Usestate_from/Userfrom.css'


export const UserFrom = () => {
    const [user,setUser]=useState({
        online:false,
        img:"me.jpg",
        name:"sanja guru",
        profession:"front-end developer",
        bio:"Hello I'am Sanjai, I'am front end-developer"
    })
    function changHandler(e){
        const name=e.target.name
        const value=e.target.type==="file"?addimg():e.target.value
        setUser({...user,[name]:value})
    }
  return (
    <>
    <main className="sideBar">
        <header className="top">
            <div className="img">
                <img src={user.img} alt="userImage" />
                <div className={user.online?"online":"offline"}>{user.online?"online":"offline"}</div>
            </div>
            <h3>{user.name}</h3>
            <h4>{user.profession}</h4>
        </header>
        <p>{user.bio}</p>
    </main>
    <form >
        <h2>Enter your details</h2>
        <label htmlFor="profile">
            <input type="file"  />
        </label>
        <label htmlFor="name">Name
            <input type="text" name='name' value={user.name} id='name' placeholder='Enter your name' onChange={changHandler} />
        </label>
        <label htmlFor="profession">Professian
            <input type="text" name='profession' id='profession' value={user.profession} placeholder='Enter your name'  onChange={changHandler}/>
        </label>
        <textarea name="bio" value={user.bio} id="about" placeholder='write about you' onChange={changHandler}/>
    </form>
    </>
  )
}
