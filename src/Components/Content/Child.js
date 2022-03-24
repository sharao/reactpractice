import React from 'react'

function Child(props) {
  return (
    <div onClick={() => props.greetingFromParent("Gunja")}>{props.children}</div>
  )
}

export default Child