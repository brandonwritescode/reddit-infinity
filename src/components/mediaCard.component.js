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
    margin: "5rem auto"

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
    height: "auto"
}

function MediaCard(props) {


    useEffect(() => {
        console.log(props.title);
    });

    return (
    <div style={divStyle}>
        <div style={redditNameStyle}>
            <p>{props.body}</p>
        </div>
        <div style={imgStyle}>
            <img style={imgStyle} src={props.thumbnail_img} alt="Smiley face"></img>
        </div>
        <div style={redditPermalink}>
            <a href={`https://www.reddit.com/${props.reddit_name}`}>{props.reddit_name}</a>
            <br/>
            <a href={`https://www.reddit.com${props.hyperlink}`}>Link to post.</a>
        </div>
    </div>
    );
}
    

export default MediaCard;