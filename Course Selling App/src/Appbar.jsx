import React from 'react'
import {Typography,Button} from '@mui/material'

const Appbar = () => {
  return (
    <div style={{display:'flex',justifyContent:'space-between',alignContent:'center',alignItems:'center',padding:10}}>
        <Typography variant='h4'>Coursera</Typography>
        <div >
        <Button style={{marginRight:20}} variant='contained'
            onClick={()=>{
                window.location="/signup"
            }}
        >Sign Up</Button>
        <Button variant='contained'
            onClick={()=>{
                window.location="/signin"
            }}
        >Sign in</Button>
        </div>
        
    </div>
  )
}

export default Appbar