import React, { Component } from 'react'

// A component that uses life-cycles, setInterval and state to alternate between rendering either "tick" or "tock" for a time and then rendering "BOOM!!!!".

// Make a component called Bomb inside the ./src/state-drills/ folder. Update your index.js to use the Bomb component to check that it works.
// The component will have an initial state with a property count of 0.

export default class Bomb extends Component {
    
    state = {
      count:0,
    };

// The component should render a div element. Inside the div there should be a p that contains content of either "tick", "tock" or "BOOM!!!!".



// When the component mounts, register an interval that adds 1 to the count in state every second.

componentDidMount() {
  this.interval = setInterval(() => {
    this.setState({
      count: this.state.count + 1
    })
  }, 1000)
}

// When the component unmounts, clear the interval.

componentWillUnmount() {
  clearInterval(this.interval)
}



// If the count goes equal to or above 8, display "BOOM!!!!".
// When the count goes above or equal to 8, also clear the interval!

renderDisplay() {
  const { count } = this.state
  if (count >= 8) {
    clearInterval(this.interval)
    return 'BOOM!!!!'

    // When the count is divisible by 2, display the word "tick".

  } else if (count % 2 === 0) {
    return 'tick'

    // When the count isn't divisible by 2, display the word "tock".

  } else {
    return 'tock'
  }
}



render(){
  return(
    <div className='Bomb'>
        {this.renderDisplay()}
      </div>
  ) 
}
}
