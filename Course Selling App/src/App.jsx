import React from 'react'
import Signup from './Signup'
import Appbar from './Appbar'

const App = () => {
  return (
    <div style={{width:"100vw",height:"100vh",backgroundColor:"#eeeeee"}}>
      <Appbar />
      <Signup />
    </div>
  )
}

export default App