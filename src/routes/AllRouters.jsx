import React from "react";
import { Route, Routes } from "react-router-dom";
import { Home } from "../components/Home";
import Blog from "../components/Blog";
import Account from "../components/Account";
import DashBoard from "../components/DashBoard";
import BlogRead from "../components/BlogRead";
import CreateBlog from "../components/CreateBlog";
import EditBlog from "../components/EditBlog";
import SignUp from "../components/SignUp";
import Login from "../components/Login";

function AllRoute() {
    return (
        <Routes>
           
            <Route path="/" element={<Home/>} />
            <Route path="/blog" element={<Blog/>} />
            <Route path="/account" element={<Account/>} />
            <Route path="/DashBoard" element={<DashBoard/>} />
          <Route path="/BlogRead" element={<BlogRead/>}/>
          <Route path="/createBlog" element={<CreateBlog/>}/>
            {/* change id with real one  */}
          <Route path="/editBlog/:id" element={<EditBlog/>}/>
          <Route path="/signup" element={<SignUp/>}/>
          <Route path="/login" element={<Login/>}/>
        </Routes>
    )
}


// https://blogify-be-1.onrender.com/

// https://blogify-be-1.onrender.com/bloguser/login
// https://blogify-be-1.onrender.com/bloguser/register
// https://blogify-be-1.onrender.com/bloguser
export {AllRoute}