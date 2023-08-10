import React, { useEffect, useState } from 'react'
import {Typography,Card}from '@mui/material'

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
                setCourses(data.courses)
            })
        })

    },[])

  return (
    <div style={{display:'flex'}}>
        <Typography variant='h4'>Courses</Typography>
        {/* {JSON.stringify(courses)} */}
        {courses.map((course)=>{
        return(
            <Course course={course}/>
        )
    })}

        
    </div>
  )
}

const Course=(props)=>{
    return <Card style={{
        margin:15,
        width:300,
        minHeight:200
    }}>
        <Typography textAlign='center' variant='h5'>{props.course.title}</Typography>
        <Typography textAlign='center' variant='subtitle1'>{props.course.description}</Typography>
        <img src={props.course.imageLink} style={{width:200,alignContent:'center',alignItems:'center'}} alt="WebD Course" />
        </Card>
}



export default GetCourses