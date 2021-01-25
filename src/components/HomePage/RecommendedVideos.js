import React from "react";
import VideoCard from './VideoCard';
import '../../css/HomePage/RecommendedVideos.css';

function RecommendedVideos({video_list, onVideoSelect, toggleRecommendedVideoSelected}) {
    return (
        <div className = 'recommendedVideos'>
            <h2 className = "recommended-heading">Recommended</h2>
            <div className = 'recommendedVideos__videos'>

               {video_list.map((video, id) =>  (
                  <div className = 'videocard'>
                     <VideoCard
                        toggleRecommendedVideoSelected = {toggleRecommendedVideoSelected}
                        onVideoSelect = {onVideoSelect} 
                        key = {id} 
                        video = {video}
                        views = "1.78M"
                        title = {video.snippet.title}
                        channel = {video.snippet.channelTitle}
                        image = {video.snippet.thumbnails.medium.url}
                        subs = "668K" 
                        description = {video.snippet.description}
                        // duration = {video.contentDetails.duration}
                        timestamp = "8 days ago"
                        // channelImage = "https://i.ytimg.com/vi/CUXNcv6jjsI/maxresdefault.jpg"
                        channelImage = 'https://yt3.ggpht.com/ytc/AAUvwnjpa2md8Bfk-LdYllfDdWWdF6CpKebvAlI5NifS6Q=s176-c-k-c0x00ffffff-no-rj-mo'
                     /> 
                  </div>
               ))}

            </div>
        </div>
    )
}



export default RecommendedVideos;