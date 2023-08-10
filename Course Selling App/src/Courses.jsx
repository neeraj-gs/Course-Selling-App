import React, { useState } from 'react'
import {Typography,TextField,Button,Card} from '@mui/material'

const Courses = () => {

    const [title,setTitle] = useState("");
    const [desc,setDesc] = useState("")
    const [image,setImage] =useState("");

  return (
    
        <div style={{display:'flex',justifyContent:'center',flexDirection:'column',alignItems:'center',paddingTop:200}}>
      <Typography fontSize={30} variant={'h3'} fontStyle={'italic'} fontWeight={1000}>Courses</Typography>
        <Typography fontSize={20} fontStyle={'italic'}>Add More Courses</Typography>
      <div >
        
        <Card variant="outlined" style={{width:600,padding:30,height:300}}>

        <div>
        
            <br />
            <TextField fullWidth label="Course Name" variant="outlined" onChange={(e)=>{
                setTitle(e.target.value)
            }}/>
            <br />
            <br />
            <TextField fullWidth label="Course Description" variant="outlined" onChange={(e)=>{
                setDesc(e.target.value)
            }}/>
            <br />
            <br />
            <TextField fullWidth label="ImageLink" variant="outlined" onChange={(e)=>{
                setImage(e.target.value)
            }}/>
            <Button variant="contained" 
            onClick={()=>{
                fetch("http://localhost:3000/admin/courses",{
                    method:"POST",
                    body:JSON.stringify({
                        title:title,
                        description:desc,
                        imageLink:image,
                        published:true
                    }),
                    headers:{
                        "Content-type":"application/json",
                        "Authorization":"Bearer " + localStorage.getItem("token")
                    }
                }).then((res)=>{
                    res.json().then((data)=>{
                        console.log(data)
                    })
                })
            }}
            
            >Add Course</Button>
        </div>

        </Card>
        </div>
    </div>
  )
}

export default Courses