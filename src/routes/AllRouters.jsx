import React, { useContext } from "react";
import { Route, Routes, useNavigate } from "react-router-dom";
import { Home } from "../components/Home";
import Blog from "../components/Blog";
import Account from "../components/Account";
import DashBoard from "../components/DashBoard";
import BlogRead from "../components/BlogRead";
import CreateBlog from "../components/CreateBlog";
import EditBlog from "../components/EditBlog";
import SignUp from "../components/SignUp";
import Login from "../components/Login";
import { AllContext } from "../context/AllContext";

function AllRoute() {
  const { isLoggedIn } = useContext(AllContext);
  const navigate = useNavigate();
  function PrivateRoute({ element }) {
    return <>{isLoggedIn ? { element } : navigate("login")}</>;
  }
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      {/* <Route path="/blog" element={<Blog />} /> */}
      <Route path="/blog" element={<PrivateRoute element={<Blog />} />} />
      <Route path="/account" element={<Account />} />
      <Route path="/DashBoard" element={<DashBoard />} />
      <Route path="/BlogRead" element={<BlogRead />} />
      <Route path="/createBlog" element={<CreateBlog />} />
      {/* change id with real one  */}
      <Route path="/editBlog/:id" element={<EditBlog />} />
      <Route path="/signup" element={<SignUp />} />
      <Route path="/login" element={<Login />} />
    </Routes>
  );
}

// https://blogify-be-1.onrender.com/

// https://blogify-be-1.onrender.com/bloguser/login
// https://blogify-be-1.onrender.com/bloguser/register
// https://blogify-be-1.onrender.com/bloguser
export { AllRoute };
