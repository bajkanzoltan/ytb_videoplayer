import React from 'react';
import "./VideoItem.css"

const VideoItem = ({video, onVideoSelect}) => {
    return ( 
    <div onClick={() => onVideoSelect(video)} className="videoItem">
        <img src={video.snippet.thumbnails.medium.url} 
        alt={video.snippet.title}
        />
        <div className="title">{video.snippet.title}</div>
    </div>
    );
}

export default VideoItem;