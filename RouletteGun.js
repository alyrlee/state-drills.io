// Make a component called RouletteGun inside the ./src/state-drills/ folder. Update your index.js to use the RouletteGun component to check that it works.
// The component should render a div element.
// Inside the div, there should be a p that contains the content of either:
// spinning the chamber and pulling the trigger! ...
// you're safe!



import React, { Component } from 'react'

export default class RouletteGun extends Component {
    static defaultProps = {
      bulletInChamber: 8
    };
  
    state = {
      chamber: null,
      spinningTheChamber: false,
    };

    componentWillUnmount() {
      clearTimeout(this.timeout)
    }  

    
    //on click event handler
  
    handleClick = () => {
      this.setState({
// The state should update spinningTheChamber to be true.
    spinningTheChamber: true,
      })  

// A timeout should be registered for 2 seconds.

this.timeout = setTimeout(() => {
  // Within the timeout, a random number between 1 and 8 should be generated.
  const randomChamber = Math.ceil(Math.random() * 8)



// Within the timeout, a random number between 1 and 8 should be generated.

this.setState({

  // Within the timeout, the state should be updated so that the generated random number is the new value for chamber and spinningTheChamber should be false.

  chamber: randomChamber,
  spinningTheChamber: false,
})
}, 2000)
}

// The component should render the content of the p element according to the following rules:

renderDisplay() {
  const { chamber, spinningTheChamber } = this.state
  const { bulletInChamber } = this.props

  // If spinningTheChamber is true, render spinning the chamber and pulling the trigger! ....

  if (spinningTheChamber) {
    return 'spinning the chamber and pulling the trigger! ...'

// If the chamber value in state is the same as the bulletInChamber value in props, render BANG!!!!.
// Otherwise, render you're safe!!

  } else if (chamber === bulletInChamber) {
    return 'BANG!!!!!'
  } else {
    return 'you\'re safe!'
  }
}


// If the component is to be unmounted, clear the timeout.
      render() {
    return (
      <div className='RouletteGun'>
        <p>{this.renderDisplay()}</p>
        <button onClick={this.handleClick}>
          Pull the trigger!
        </button>
      </div>
    )
  }
}
