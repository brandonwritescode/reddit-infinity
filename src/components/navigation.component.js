import React from 'react';


var navStyle = {

}

var listStyle = {
    height: "100px",
    width: "100%",
    position: "relative",
    top: "0",
    marginBottom: "100px",
    backgroundColor: "#333",    
    listStyleType: "none",
    margin: "0",
    padding: "0",
    overflow: "hidden",
}

var listElementStyle = {
    float: "left"
}

var listLinkStyle = {
    display: "block",
    color: "white",
    textAlign: "center",
    padding: "14px 16px",
    ':link': {
        textDecoration: "none",
        color: "white"
    }
}


function NavigationBar() {



    return (
            <ul style={listStyle}>
                <li style={listElementStyle}><a stlye={listLinkStyle} href="default.asp">Home</a></li>
                <li style={listElementStyle}><a stlye={listLinkStyle} href="news.asp">News</a></li>
                <li style={listElementStyle}><a stlye={listLinkStyle} href="contact.asp">Contact</a></li>
                <li style={listElementStyle}><a stlye={listLinkStyle} href="about.asp">About</a></li>
            </ul>
    );
}

export default NavigationBar;