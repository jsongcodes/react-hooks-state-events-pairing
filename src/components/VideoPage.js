import React, {useState} from "react";

function VideoPage({video}){
const [upvotes, setUpvotes] = useState(video.upvotes)
const [downvotes, setDownvotes] = useState(video.downvotes)

function handleClick(event){
    switch (event.target.id) {
        case 'upvote-button' :
            setUpvotes(upvotes + 1);
            break;
        case 'downvote-button' :
            setDownvotes(downvotes + 1);
            break;
        case 'toggle-comments-button' :
            let commentsContainer = document.getElementById('video-comments-container');
            commentsContainer.classList.toggle('hidden');
            if (event.target.text === 'Hide Comments'){
                event.target.innerText = "Show Comments"
            } else {
                event.target.innerText = "Hide Comments"
            }
            break;
    }
}

return(
    <div>
        <iframe
        width="919"
        height="525"
        src={video.embedUrl}
        frameBorder="0"
        allowFullScreen
        title="Thinking in React"
      />
      <h3>{video.title}</h3>
      <p>{video.views} Views | Uploaded {video.createdAt}</p>
      <div>
        <button onClick={handleClick} id="upvote-button">{video.upvotes} 👍</button>
        <button onClick={handleClick} id="downvote-button">{video.downvotes} 👎</button>
      </div>
      <div>
        <button onClick={handleClick} id="toggle-comments-button">Hide Comments</button>
        <hr></hr>
    </div>
        <div id="video-comments-container">
            <h4>{video.comments.length} Comments</h4>
            {video.comments.map((comment,  index) => 
            <>
            <h3>
                {comment.user}
            </h3>
            <p>
                {comment.comment}
            </p>
            </>)}
        </div>
    </div>
)
}

export default VideoPage;