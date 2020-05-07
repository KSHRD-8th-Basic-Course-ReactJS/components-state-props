import React from 'react'

function ListTable(props) {
  return (
    <div>
      <h1>{props.name}</h1>
      <h1>{props.age}</h1>
      <h2>{props.height}</h2>
    </div>
  )
}

// const ListTable = props => {
//   return (
//     <div>
//       <h1>{props.name}</h1>
//       <h1>{props.age}</h1>
//       <h2>{props.height}</h2>
//     </div>
//   )
// }

export default ListTable