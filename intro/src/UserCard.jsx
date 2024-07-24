import  PropTypes  from "prop-types"
const userData=[
    {
        name:"sanjai",
        city:"srivilliputhur",
        description:"front-end developer",
        skill:["Ui","graphic design","Html","css","js","git"],
        profile:"public/me.jpg",
        online:true,

    },
    {
        name:"guru",
        city:"srivilliputhur",
        description:"java developer",
        skill:["Ui","Html","css","git"],
        profile:"public/me.jpg",
        online:false,

    },
    {
        name:"ram",
        city:"srivilliputhur",
        description:"web developer",
        skill:["Html","css","js","git"],
        profile:"public/me.jpg",
        online:true,

    },
    {
        name:"ram",
        city:"srivilliputhur",
        description:"web developer",
        skill:["Html","css","js","git"],
        profile:"public/me.jpg",
        online:true,

    },
    {
        name:"ram",
        city:"srivilliputhur",
        description:"web developer",
        skill:["Html","css","js","git"],
        profile:"public/me.jpg",
        online:true,

    },
]

function User(props){
    return (
    <div className="container">
        <span className={props.online?"online":"offline"}>{props.online?"online":"offline"}</span>
        <img src={props.profile}alt="userImage" />
        <h3>{props.name}</h3>
        <h3>{props.city}</h3>
        <p>{props.description}</p>
        <div>
            <button>Message</button>
            <button>Following</button>
        </div>
        <h6>Skills</h6>
        <ul>
           {props.skills.map((skill,index)=>(<li key={index}>{skill}</li>))}
        </ul>
    </div>)
}
export const UserCard = () => {
  return (
    <>
    {userData.map((user,index)=>(
        <User key={index} name={user.name}  city={user.city} description={user.description} skills={user.skill} online={user.online} profile={user.profile}/>
    ))}
    </>
    /* <User name="sanjai" city="chennai" description="font-end developer" skills={["UI/UX","HTML","CSS","REACT JS","JAVA SCRIPT"]} profile="public/me.jpg" online={true}/> */
  )
}
User.protoType={
    name:PropTypes.string.isRequired,
    city:PropTypes.string.isRequired,
    discription:PropTypes.string.isRequired,
    skills:PropTypes.arrayOf(PropTypes.string).isRequired,
    online:PropTypes.bool.isRequired,
    profile:PropTypes.string.isRequired
}
