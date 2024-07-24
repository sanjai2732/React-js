import React from 'react'
import PropTypes  from "prop-types"
export const ChildCompoent = (props) => {
  return (
    <div>{props.children}</div>
  )
}

ChildCompoent.PropsTypes={
    children: PropTypes.array,
}

