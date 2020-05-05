import React from 'react';



// # https://www.reddit.com/api/me.json
// # https://www.reddit.com/r/randnsfw/top.json?limit=50


var divStyle = {
    border: "1px solid black",
    margin: "1em",
    display: "flex",
    alignItems: "center",
    flexDirection: "column",
    overflowWrap: "break-word",
    wordBreak: "break-all",
    hyphens: "auto"
};

var imgStyle = {
    width: "100%",
    height: "auto",
    imageResolution:"0.1dpi"
};

function MediaCard(props) {

    return (
    <div style={divStyle}>
        <h3>{props.reddit_name}</h3>
        <img style={imgStyle} src={props.thumbnail_img} alt="Smiley face"></img>
        <a href={`https://www.reddit.com${props.hyperlink}`}>Link to post.</a>
    </div>
    );
}
    

export default MediaCard;