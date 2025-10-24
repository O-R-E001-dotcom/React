// import { useState } from "react";

// function LikeButton() {
//     const [liked, setLiked] = useState(false)
//     const [count, setCount] = useState(0)
//     const [disabled, setDisabled] = useState(false);
//     const toggleLike = () => { setDisabled(true);

//     return (
//         <div >
//             <h2>Like Button</h2>
//             <button className={`like ${liked ? 'liked' : 'unliked'}`}>Like</button>
//             <p >{count}</p>
//         </div>
//     );
// }

import { useState } from "react";

function LikeButton() {
  
    const [liked, setLiked] = useState(false);
    const [likeCount, setLikeCount] = useState(0);
    // const [unLiked, setUnLiked] = useState(true);
    // const [unLikedCount, setUnLikedCount] = useState(0);
    const [disabled, setDisabled] = useState(false);


    function toggleLike() {
        setDisabled(true);

        if (liked) {
        setLiked(false);
        setLikeCount(prevCount => prevCount - 1);

        } else {
        setLiked(true);
        setLikeCount(prevCount => prevCount + 1);

        }

    // setDisabled(false);
    // if (unLiked) {
    //     setUnLiked(true);
    //     setUnLikedCount(prevCount => prevCount + 1);
    // } else {
    //     setUnLiked(false);
    //     setUnLikedCount(prevCount => prevCount - 1);
    // }

        setTimeout(() => setDisabled(false), 1000);
    };

    return (
        <div style={{ textAlign: "start", margin: "32px 20px" }}>
            <h2>Like Button</h2>
            <p style={{ fontSize: "16px", marginTop: "10px" }}>
                 {liked ? "❤️ Liked" : "🤍 Like"} {likeCount} like
            </p>
            <button
                onClick={toggleLike}
                disabled={disabled}
                style={{
                backgroundColor: liked ? "#c21919ff" : "#e0e0e0",
                color: liked ? "white" : "black",
                borderRadius: "8px",
                padding: "10px 20px",
                fontSize: "18px",
                cursor: disabled ? "" : "pointer",
                transition: "0.3s ease",
                }}
                liked = {liked ? "❤️ Liked" : "🤍 unliked"}
            >
                Click to toggle
            </button>

            <p style={{ fontSize: "16px", marginTop: "10px" }}>
                {!liked ? "🤍 Like": ""} {disabled} like
            </p>
        </div>
    );
}

export default LikeButton;
