import { PropTypes } from "prop-types"

export const OneofColor = (props) => {
    const {color}=props
  return (
    <div>
        <p style={{backgroundColor:color,color:"white",padding:"20px"}}>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Earum, itaque.</p>
    </div>
  )
}
OneofColor.propTypes={
    color:PropTypes.oneOf(["red","green","yellow"])
}