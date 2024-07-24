import PropTypes from "prop-types"

export const FunctionSample = (props) => {
    const {handleClick}=props
  return (
    <div>
        <div>FunctionSample</div>
        <button onClick={handleClick}>click</button>
    </div>
  )
}
FunctionSample.protoTypes={
    handleClick:PropTypes.func.isRequired
}
