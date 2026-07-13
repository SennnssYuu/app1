import React from 'react'
// function App() {
//   return (
//     <h3>Hello World! <br/>สวัสดีชาวโลก</h3>
//   )
// }
// let r = 'React'
// let rn = 'React Native'
// const el = (
//   <div>
//     Create Web & Mobile Apps<br/>
//     with {r} & {rn}
//   </div>
// )
// return el
//   return (
//     <table border="1">
//       <tr><th>Product</th><th>Price</th></tr>
//       <tr><td>React</td><td>320</td></tr>
//       <tr><td>React Native</td><td>340</td></tr>
//     </table>
//   )
// }

function App() {
  const divStyle = {
    color: 'red',
    backgroundColor: 'powderblue',
    fontSize: 'larger',
    padding: '3px',
  }
  return <div style={divStyle}>Hello React</div>
}

export default App