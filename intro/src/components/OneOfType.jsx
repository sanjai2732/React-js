import PropTypes  from "prop-types"
export const OneOfType = (props) => {
  return (
    <div>
        <p>Lorem ipsum dolor sit.{props.value}</p>
    </div>
  )
}
OneOfType.propTypes={
    value:PropTypes.oneOfType([PropTypes.string,PropTypes.bool,PropTypes.number]).isRequired
}