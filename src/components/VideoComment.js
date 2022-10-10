import React from "react";

function VideoComment({video}){
    return(
        <div>
            <h3>{video.comments.user}</h3>
            <p>{video.comments.comment}</p>
        </div>
//     <div id="comment-section">
//     <h4>{video.comments.length} Comments</h4>
//     {video.comments.map((comment) => 
//     <>
//     <h6>
//         comment= {comment.user}
//     </h6>
//     <p>
//         comment={comment.comment}
//     </p>
//     </>)}
// </div>
    )
}

export default VideoComment;