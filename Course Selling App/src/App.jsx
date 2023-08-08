import React from 'react'
import {BrowserRouter as Router,Routes,Route} from 'react-router-dom'
import Signup from './Signup'
import Appbar from './Appbar'
import Signin from './Singin'
import Courses from './Courses'

const App = () => {
  return (
    <div style={{width:"100vw",height:"100vh",backgroundColor:"#eeeeee"}}>

    <Router>
    <Appbar />
      <Routes>
        <Route path="/signup" element={<Signup />} />
        <Route path="/signin" element={<Signin />} />
        <Route path="/course" element={<Courses />} />
      </Routes>
    </Router>
    </div>
  )
}

export default App