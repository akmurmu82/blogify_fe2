import axios from "axios"
import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import {
    FormControl,
    FormLabel,
    FormErrorMessage,
    FormHelperText,
    Button
  } from '@chakra-ui/react'

const EditBlog=()=>{
    const {id}=useParams()
    const [editBlogData,setEditBlogData]=useState({})
    const getSingleBlog= async ()=>{
try {
    // update ka endpoint
const res=await axios.get(`https://blogify-be-1.onrender.com/editBlog/${id}`)
setEditBlogData(res.data)

} catch (error) {
    console.log(error)
}

    }

useEffect(()=>{
getSingleBlog()
},[])

return(
    <>
    {/* <FormControl border="1px solid red" width="60% ">
  <FormLabel>Title</FormLabel>
{/* title to be checked */}
{/* 
  <input  type='text' placeholder='Title' value={setEditBlogData.title} onChange={(e)=>{setTitle(e.target.value)}}/>
  <FormLabel>Description</FormLabel>
  <input  type='text' placeholder='Description'onChange={(e)=>{setDescription(e.target.value)}}/>
  <FormLabel>Image</FormLabel>
  <input  type='text' placeholder='image' onChange={(e)=>{setImage(e.target.value)}}/>
 <Button onClick={handleBlog} display="block">Add Blog</Button>
</FormControl> */} */
    </>
)
}

export default EditBlog;