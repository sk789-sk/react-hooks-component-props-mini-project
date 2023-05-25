import React from "react";
import Article from "./Article"

function ArticleList({posts}){
   // console.log(posts)
 const renderArticle = posts.map((article)=>{ //create a function that will create and article element for each article in blog post 
   // console.log(article)
    return <Article key={article.id} {...article}/>
 })

    return (
        <main>
            {renderArticle}
            {/* <Article {...posts[0]}/> 
            <Article {...posts[1]}/>
            <Article {...posts[2]}/>   */}
        </main>
    )
}

// What we should do then is in the article list function get this information to the Article produced
//Lets create a function that will get the articles info pass it into the article and just put that function in the main 

export default ArticleList