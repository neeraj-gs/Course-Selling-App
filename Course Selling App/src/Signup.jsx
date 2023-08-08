import React from 'react'

const Signup = () => {
  return (
    <div>
        <h2>Welcome to Coursify.Sign up Below</h2>

        <div>
            <button>Sign Up with Facebook</button>
            <br />
            <button>Sign up with Google</button>
            <br />
            <input type="text" placeholder='Username'/>
            <br />
            <input type="password" placeholder='Password'/>
            <br />
            <button>Sign Up</button>
        </div>
    </div>
    
  )
}

export default Signup