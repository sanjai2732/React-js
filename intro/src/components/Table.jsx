import PropTypes from "prop-types"
export const Table = (props) => {
  return (
        <div className="student">
            <table>
                <tbody>
                    <tr>
                        <th>Name</th>
                        <td>{props.name}</td>
                    </tr>
                    <tr>
                        <th>Age</th>
                        <td>{props.age}</td>
                    </tr>
                    <tr>
                        <th>isMarried</th>
                        <td>{props.married?"Yes":"No"}</td>
                    </tr>
                </tbody>
            </table>
        </div>
      )
};
Table.protoTypes={
    name:PropTypes.string,
    age:PropTypes.number,
    married:PropTypes.bool,
}
// Table.defaultProps={
//     name:"no Name",
//     age:0,
//     married:false,
// }
