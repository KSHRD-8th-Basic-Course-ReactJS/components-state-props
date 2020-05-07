import React from 'react'

export default class Clock extends React.Component {

  constructor() {
    super()

    this.state = {
      time: new Date().toTimeString()
    }
  }
// callback function
  render() {
    console.log('re render')
    setInterval(() => {
      this.setState({
        time: new Date().toTimeString()
      })
    }, 1000)
    return (
    <h1>{this.state.time}</h1>
    )
  }

}

// function callback(myFunc) {
//   myFunc("Hello")
// }

// callback((myParam) => {
//   console.log(myParam)
// })

