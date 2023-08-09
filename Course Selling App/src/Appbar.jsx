import React, { useEffect } from 'react'
import {Typography,Button} from '@mui/material'
import { useNavigate } from 'react-router-dom'

const Appbar = () => {
    const navigate = useNavigate();

        useEffect(()=>{
            fetch("http://localhost:3000/admin/me",{
                method:"GET",
                headers:{
                    "Authorization":"Bearer "+localStorage.getItem("token")
                }
            }).then((res)=>{
                res.json().then((data)=>{
                    console.log(data)
                })
            })

        },[])

  return (
    <div style={{display:'flex',justifyContent:'space-between',alignContent:'center',alignItems:'center',padding:10}}>
        <Typography variant='h4'>Coursera</Typography>
        <div >
        <Button style={{marginRight:20}} variant='contained'
            onClick={()=>{
                // window.location="/signup"
                navigate("/signup")
            }}
        >Sign Up</Button>
        <Button variant='contained'
            onClick={()=>{
                // window.location="/signin"
                navigate("/signin")
            }}
        >Sign in</Button>
        </div>
        
    </div>
  )
}

export default Appbar