import React, { useState,useEffect } from 'react'
import { useParams } from 'react-router-dom';

const Course = () => {
    let {courseId}=useParams(); //we need useParams to take the dynamic value the anme as to be same as in path in Router
    const [courses,setCourses]=useState([]);
    useEffect(()=>{
        fetch("http://localhost:300/admin/courses",{
            method:"GET",
            headers:{
                "Authorization":"Bearer "+localStorage.getItem("token")
            }
        }).then((res)=>{
            res.json().then((data)=>{
                console.log(data);
                setCourses(data.courses);
            })
        })
    },[])
  return (
    <div>
        {courseId}
    </div>
  )
}

export default Course