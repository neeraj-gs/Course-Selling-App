import React from 'react'
import {Button,TextField,Card,Typography} from '@mui/material'

const Signup = () => {
  return (
    <div style={{display:'flex',justifyContent:'center',flexDirection:'column',alignItems:'center',paddingTop:200}}>
      <Typography fontSize={30} variant={'h3'} fontStyle={'italic'} fontWeight={1000}>Welcome to Coursify.</Typography>
        <Typography fontSize={20} fontStyle={'italic'}>Sign Up</Typography>
      <div >
        
        <Card variant="outlined" style={{width:600,padding:30,height:300}}>

        <div>
          <div style={{display:'flex',justifyContent:'space-evenly',padding:10}}>
          <Button variant="contained">Sign up with Facebook</Button>
            <Button variant="contained">Sign up with Google</Button>
          </div>
        
            <br />
            <TextField fullWidth label="Username" variant="outlined" />
            <br />
            <br />
            <TextField fullWidth label="Password" variant="outlined" />
            <br />
            <br />
            <Button variant="contained">Sign Up</Button>
        </div>

        </Card>
        </div>
    </div>
    
  )
}

export default Signup