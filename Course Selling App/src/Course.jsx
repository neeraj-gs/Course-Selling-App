import React, { useState,useEffect } from 'react'
import { useParams } from 'react-router-dom';
import {Card,Typography,TextField,Button} from '@mui/material'
import {atom, useRecoilState, useRecoilValue, useSetRecoilState} from 'recoil'

const Course = () => {

    const setCourses = useSetRecoilState(coursesState);
    //parent ele eis not subscribe to course stae atom 
    //only setCOutses is there and the courseStae that is atom is not there

    let {courseId}=useParams(); //we need useParams to take the dynamic value the anme as to be same as in path in Router
    // const [courses,setCourses]=useState([]);
    useEffect(()=>{
        fetch("http://localhost:3000/admin/courses",{
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
    <CourseCard courseId={courseId}/>
    <UpdateCard courseId={courseId}/>
    </div>
    
  )
}

const CourseCard = (props)=>{
    const courses = useRecoilValue(coursesState);
    let course=null;
    for(let i=0;i<courses.length;i++){
        if(courses[i].id==props.courseId){
            course = courses[i];
        }
    }

    return <div>
    return <Card style={{
    margin:15,
    width:300,
    minHeight:200
}}>
    <Typography textAlign='center' variant='h5'>{courses.title}</Typography>
    <Typography textAlign='center' variant='subtitle1'>{courses.description}</Typography>
    <img src={courses.imageLink} style={{width:200,alignContent:'center',alignItems:'center'}} alt="WebD Course" />
    </Card>
</div>
}


const UpdateCard = (props)=>{
    const [title,setTitle] = useState("");
    const [desc,setDesc] = useState("")
    const [image,setImage] =useState("");
    // const course=props.course;

    const [courses,setCourses] = useRecoilState(coursesState)

    if(!courses){
        return <div>
            Loading......
        </div>
    }

  return (
    
        <div style={{display:'flex',justifyContent:'center',flexDirection:'column',alignItems:'center',paddingTop:200}}>
      {/* <Typography fontSize={30} variant={'h3'} fontStyle={'italic'} fontWeight={1000}>Update Course Deatils</Typography> */}
        <Typography fontSize={20} fontStyle={'italic'}>Update Course Deatils</Typography>
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
                fetch("http://localhost:3000/admin/courses/"+ props.courseId,{
                    method:"PUT",
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
                        let updatedCourses=[];
                        for(let i=0; i< courses.length; i++){
                            if(courses[i].id == props.courseId){
                                updatedCourses.push({
                                    id:props.courseId,
                                    title:title,
                                    description:desc,
                                    imageLink:image
                                })
                            }else{
                                updatedCourses.push(courses[i]);
                            }
                        }
                        setCourses(updatedCourses)
                    })
                })
            }}
            
            >Update Course</Button>
        </div>

        </Card>
        </div>
    </div>
  )
}

export default Course


const coursesState = atom({
    key:'coursesState',
    default:'',
});