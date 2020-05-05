import React, { useEffect } from 'react';



// # https://www.reddit.com/api/me.json
// # https://www.reddit.com/r/randnsfw/top.json?limit=50


var divStyle = {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    overflowWrap: "break-word",
    wordBreak: "break-all",
    hyphens: "auto",
    width: "90%",
    margin: "5rem auto",
    backgroundColor: "white",
    color: "black"

};

var redditNameStyle = {
    width: "100%",
    height: "auto",
    backgroundColor: "gray",
}


var imgStyle = {
    width: "100%",
    height: "auto",
    backgroundColor: "white",
};

var redditPermalink = {
    width: "100%",
    backgroundColor: "white",
    height: "auto",
}

function MediaCard(props) {


    useEffect(() => {
        console.log(props.title);
    });

    return (
    <div style={divStyle}>
            <p>{props.body}</p>
            <img style={imgStyle} src={props.thumbnail_img} alt="Smiley face"></img>
            <a href={`https://www.reddit.com/${props.reddit_name}`}>{props.reddit_name}</a>
            <a href={`https://www.reddit.com${props.hyperlink}`}>Link to post.</a>
    </div>
    );
}
    

export default MediaCard;