import React from 'react'
import {Button,TextField,Card,Typography} from '@mui/material'

const Signup = () => {
  return (
    <div>
      <center style={{marginTop:300}}>
        <Typography fontSize={40} fontStyle={'italic'} fontWeight={1000}>Welcome to Coursify.</Typography>
        <Typography fontSize={30} fontStyle={'italic'}>Sign Up</Typography>
        <Card variant="outlined" style={{width:600,padding:20}}>

        <div>
          <div style={{display:'flex',justifyContent:'space-around'}}>
          <Button variant="contained">Sign up with Facebook</Button>
            <Button variant="contained">Sign up with Google</Button>
          </div>
        
            <br />
            <TextField label="Username" variant="outlined" />
            <br />
            <TextField label="Password" variant="outlined" />
            <br />
            <Button variant="contained">Sign Up</Button>
        </div>

        </Card>
        </center>
    </div>
    
  )
}

export default Signup