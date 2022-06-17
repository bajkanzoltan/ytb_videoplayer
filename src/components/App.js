import React, {useState, useEffect} from 'react';
import youtube from '../apis/youtube';
import SearchBar from './SearchBar';
import VideoList from './VideoList';
import VideoDetail from './VideoDetail';
import './App.css'

export default function App() {
    const [videos, setVideos] = useState([]);
    const [selectedVideo, setSelectedVideo] = useState(null);

    useEffect (() => {
        onFormSubmit ('javascript');
    }, [])

    const onFormSubmit = async term =>{
        const response =  await youtube.get('/search',{
            params: {
                q: term
            }
        });
        setVideos(response.data.items);
        setSelectedVideo(response.data.items[0]);
    };

    const onVideoSelect = video => {
        setSelectedVideo(video);
    };

  return (
    <React.Fragment>
        <header>
            <div className="searchBar">
            <SearchBar onFormSubmit={onFormSubmit}/>
            </div>
        </header>
        <main>
        <VideoDetail video={selectedVideo}/>
        <div  className="videoList">
            <VideoList videos={videos} 
            onVideoSelect={onVideoSelect}/>
        </div>
        </main>
    </React.Fragment>
  )
}