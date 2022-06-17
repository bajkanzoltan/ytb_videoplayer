import React from 'react';
import "./VideoDetail.css";

const VideoDetail = ({video}) =>{
    if(!video){
        return <div>Please wait</div>
    }

    return ( 
    <div className="column">
        <iframe  title="video player" 
        src={`https://www.youtube.com/embed/${video.id.videoId}`}
        className="video_player"
        />
        <div>{video.snippet.title}</div>
        <div>Channel: {video.snippet.channelTitle}</div>
        <div>Published at: {video.snippet.publishTime.substring(0,10)}</div>        
    </div>
    );
}

export default VideoDetail;