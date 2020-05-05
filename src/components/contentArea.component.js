import React, { useState, useEffect } from 'react';
import MediaCard from './mediaCard.component';





// # https://www.reddit.com/api/me.json
// # https://www.reddit.com/r/randnsfw/top.json?limit=50

var contentAreaStyle = {
    width: "60%"
}


function customFetch(url, callback) {
    fetch(url)
    .then(response => response.json())
    .then(res => callback(res))
    .catch(err => console.log(err))    
}

function ContentArea() {

    const [redditMediaItems, setredditMediaItems] = useState([]);

    function getRedditMediaItems() {
        customFetch("/r/Cinemagraphs/hot.json?limit=50", (response) => {
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
        <div style={contentAreaStyle}>
            {redditMediaItems.map((mediaItem) => {
                return < MediaCard 
                            key={redditMediaItems.indexOf(mediaItem)} 
                            reddit_name={mediaItem.data.subreddit_name_prefixed} 
                            thumbnail_img={mediaItem.data.url} 
                            hyperlink={mediaItem.data.permalink}/>
            })}
        </div>
    );
}
    
    export default ContentArea;