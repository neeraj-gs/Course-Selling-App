import React from 'react'
import Signup from './Signup'
import Appbar from './Appbar'
import Signin from './Singin'

const App = () => {
  return (
    <div style={{width:"100vw",height:"100vh",backgroundColor:"#eeeeee"}}>
      <Appbar />
      {/* <Signup /> */}
      <Signin />

    </div>
  )
}

export default App