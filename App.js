import React from 'react'
import Header from './Components/header'
import {Link} from 'react-router-dom'

class App extends React.Component{
  render(){
    return(
      <div>
        <hr />
        <Header />
      </div>
    )
  }
}

export default App;