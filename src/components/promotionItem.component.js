import React from 'react';


var promotionStyle = {
    position: "relative",
    height: "3rem"
}

var stickyInner = {
    position: "fixed",
    top: "0",
    left: "0",
    right: "0",
    zIndex: "1"
}


function PromotionItem() {
    return (
        <div stlye={promotionStyle}>
            <a stlye={stickyInner} href="test.html">Hello There!</a>
        </div>
    );
}

export default PromotionItem;