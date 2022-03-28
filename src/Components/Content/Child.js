import React from 'react'
import './Child.css'

function Child(props) {
  console.log('from child', props.props.items);
  const listItems = props.props.items.map((item) =>
        <article key={item.id}>
          <h2>{item.title}</h2>
          <p>{item.body}</p>
        </article>
    );
  return (
    <div>{listItems}</div>
  )
}

export default Child