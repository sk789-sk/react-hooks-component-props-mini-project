import React from "react";


function Article({title,date = "January 1, 1970" ,preview}){
    // console.log(title)
    // console.log(preview)
    return(
        <article>
        <h3>{title}</h3>
        <small>{date}</small>
        <p>{preview}</p>
        </article>
    )
}


// reason these are undefined is since props has a post array that i need to get a hold off
// What we should do then is in the article list function get this information to the Article produced



export default Article