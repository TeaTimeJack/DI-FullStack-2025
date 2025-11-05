import React from "react";
import { Routes, Route, Link } from "react-router";
import Home from "./pages/Home"
import Profile from "./pages/Profile"
import Shop from "./pages/Shop"
import ErrorBoundary from "./helpers/ErrorBoundary"
import PostList from "./components/PostList"
import SocialMedias from "./components/SocialMedias"
import Skills from "./components/Skills";
import Experiences from "./components/Experiences"


export default function App() {
  return (
    <>
     <Routes>
        <Route path="/" element={<ErrorBoundary><Home /></ErrorBoundary>}  />     
        <Route path="/profile" element={<ErrorBoundary><Profile /></ErrorBoundary>} />   
        <Route path="/shop" element={<ErrorBoundary><Shop /></ErrorBoundary>} />
        <Route path='*' element={<h2>404 page not found</h2>} />
    </Routes>
    <header>
      <nav>
        <Link to={"/"}><button>Home</button></Link>{" "}
        <Link to={"/profile"}><button>Profile</button></Link>{" "}
        <Link to={"/shop"}><button>Shop</button></Link>
        </nav>
    </header>
   

    <PostList/>

    <SocialMedias />
    {/* <Skills />
    <Experiences /> */}



    </>
  );
}
