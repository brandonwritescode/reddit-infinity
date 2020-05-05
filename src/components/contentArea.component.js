import React, { useState, useEffect } from 'react';
import MediaCard from './mediaCard.component';


import NavigationBar from "./navigation.component.js";

var contentAreaStyle = {
    width: "50%",
};


function customFetchFunction(url, callback) {
    fetch(url)
    .then(response => response.json())
    .then(res => callback(res))
    .catch(err => console.log(err))    
}

function ContentArea() {

    const [redditMediaItems, setredditMediaItems] = useState([]);

    function getRedditMediaItems() {
        customFetchFunction("/r/wallpapers/random.json?limit=50", (response) => {
            setredditMediaItems(response.data.children.filter(child => child.data.post_hint === "image"))
        })
    }

    useEffect(() => {
        getRedditMediaItems();
    }, []);

    useEffect(() => {
        console.log(redditMediaItems);
    }, [redditMediaItems]);


    return (
        <>
        <NavigationBar />
        <div style={contentAreaStyle}>
            {redditMediaItems.map((mediaItem) => {
                return < MediaCard 
                            key={redditMediaItems.indexOf(mediaItem)} 
                            reddit_name={mediaItem.data.subreddit_name_prefixed} 
                            thumbnail_img={mediaItem.data.url}
                            body={mediaItem.data.title}
                            hyperlink={mediaItem.data.permalink}/>
            })}
        </div> 
        </>
    );
}
    
    export default ContentArea;