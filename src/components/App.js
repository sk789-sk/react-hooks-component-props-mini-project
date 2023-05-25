import React from "react";
import blogData from "../data/blog";
import Header from "./Header"
import About from "./About"
import ArticleList from "./ArticleList"

//console.log(blogData);
//console.log(typeof(blogData.posts)) //this says it is an object
//console.log(blogData.posts) //this is an array 

function App() {
  return (
    <div className="App">
      You're on your own from here! Follow the deliverables; test things out in
      the browser as you write your code; and good luck!
      {/* <Header name={blogData.name}/> */}
      <Header {...blogData}/>
      {/* <About image={blogData.image} about={blogData.about}/> */}
      <About {...blogData}/> {/*Cant I just do this so i dont have to specify? We pass the entire blogData object and we then pick the keys that we need in the about fcn downside i create a new object everysingle time?*/ }
      <ArticleList {...(blogData)}/>
    </div>
  );
}

export default App;
