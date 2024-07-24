export const Header = () => {
    let classCss="error"
    // jsx with conditional Rendering
    let user=false
    const login=user?<p>Welcome back!</p>:<p>Please log in.</p>
    const iteams=["iteam1","iteam2","iteam3","oooooo"]
  return (
    <>
    <div>
        <h1 className="welcome">Welcome</h1>
        <p className="para">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ea asperiores labore doloribus necessitatibus officiis ad repellat facere voluptates, quas illo voluptas magnam ut est delectus voluptatibus ipsum tenetur autem voluptatem.</p>
        {/* jsx styling */}
        <p className={classCss} style={{fontSize:'29px',fontStyle:"italic"}}>25+45={25+45}</p>
        {/* jsx with conditional Rendering */}
        {login}
        {/* jsx using add list iteam */}
        <ul>{iteams.map((iteam,index)=><li key={index}>{iteam}</li>)}</ul>
    </div>
    </>//Fragment component
  )
}
