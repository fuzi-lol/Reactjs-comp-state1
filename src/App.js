import {Component} from 'react'

import Welcome from './components/Welcome'

import './App.css'

class App extends Component {
  state = {
    isLoggedIn: true,
  }

  //   renderAuthButton = () => {
  //     const {isLoggedIn} = this.state
  //     if (isLoggedIn === false) {
  //       return <button>Login</button>
  //     }
  //     return <button>Logout</button>
  //   }

  render() {
    const {isLoggedIn} = this.state
    return (
      <div className="container">
        <Welcome greeting="Hii" />
        {isLoggedIn ? <button>logout</button> : <button> login</button>}
      </div>
    )
  }
}

export default App
