import React from "react";
import VideoRow from "./VideoRow";
import VideoDetail from '../ResultsPage/VideoDetail';
import '../../css/ResultsPage/SearchResults.css';

function SearchResults({video, video_list, onVideoSelect}) {
    return (
        <div className = "searchPage">

            <div className = 'videoplayer-iframe'>                
                <VideoDetail video = {video} />
            </div>

            <div className = 'video-suggestions-list'>

                <div className = 'up-next-heading'>Up next</div>

                {video_list.map((video, id) =>  (
                    <VideoRow
                        onVideoSelect = {onVideoSelect} 
                        key = {id} 
                        video = {video}
                        views = "1.78M"
                        title = {video.snippet.title}
                        channel = {video.snippet.channelTitle}
                        image = {video.snippet.thumbnails.medium.url}
                        subs = "668K" 
                        description = {video.snippet.description}
                        timestamp = "8 days ago"
                        
                    /> 
                ))}

            </div>
            
        </div>
    )
}



export default SearchResults;