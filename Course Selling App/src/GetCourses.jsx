import React, { useEffect, useState } from 'react'

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
            })
        })

    },[])

  return (
    <div>
        
    </div>
  )
}

export default GetCourses