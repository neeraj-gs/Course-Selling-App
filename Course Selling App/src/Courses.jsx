import React, { useState } from 'react'
import {Typography,TextField,Button,Card} from '@mui/material'

const Courses = () => {

    const [title,setTitle] = useState("");
    const [desc,setDesc] = useState("")

  return (
    
        <div style={{display:'flex',justifyContent:'center',flexDirection:'column',alignItems:'center',paddingTop:200}}>
      <Typography fontSize={30} variant={'h3'} fontStyle={'italic'} fontWeight={1000}>Courses</Typography>
        <Typography fontSize={20} fontStyle={'italic'}>Add More Courses</Typography>
      <div >
        
        <Card variant="outlined" style={{width:600,padding:30,height:300}}>

        <div>
        
            <br />
            <TextField fullWidth label="Course Name" variant="outlined" />
            <br />
            <br />
            <TextField fullWidth label="Course Description" variant="outlined" />
            <br />
            <br />
            <Button variant="contained">Add Course</Button>
        </div>

        </Card>
        </div>
    </div>
  )
}

export default Courses