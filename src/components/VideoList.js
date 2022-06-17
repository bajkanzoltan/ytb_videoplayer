import React from 'react';
import VideoItem from './VideoItem';

const VideoList= ({videos, onVideoSelect}) => {
    const renderedList = videos.map((videos, index) => {
        return <VideoItem onVideoSelect={onVideoSelect} video={videos} key={index}/>;
    });

  return (
    <div>{renderedList}</div>
  )
}

export default VideoList