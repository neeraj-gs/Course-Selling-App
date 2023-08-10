import React, { useEffect, useState } from 'react'
import {Typography}from '@mui/material'

const GetCourses = () => {
    const [courses,setCourses]=useState([]);
    useEffect(()=>{
        fetch("http://localhost:3000/admin/courses",{
            method:"GET",
            headers:{
                "Authorization":"Bearer "+localStorage.getItem("token")
            }
        }).then((res)=>{
            res.json().then((data)=>{
                console.log(data)
                setCourses(data)
            })
        })

    },[])

  return (
    <div>
        <Typography variant='h4'>Courses</Typography>
        {JSON.stringify(courses)}
        
    </div>
  )
}

export default GetCourses