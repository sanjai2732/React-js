import PropTypes from "prop-types"
export const ArrayOfObject = (props) => {
  const {items}=props
  return (
    <div>
      <h2>Items List</h2>
      <ul>
        {items.map((item)=>(
          <li key={item.id}>{item.name}</li>
        ))}
      </ul>
    </div>
  )
}
ArrayOfObject.prototypes={
  iteams:PropTypes.arrayOf(
    PropTypes.shape({id:PropTypes.number.isRequired,
      name:PropTypes.string.isRequired
    })
  ).isRequired,
}