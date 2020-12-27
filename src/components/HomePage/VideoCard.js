import React from "react";
import '../../css/HomePage/VideoCard.css';
import Avatar from '@material-ui/core/Avatar';

function VideoCard({image, title, channel, views, timestamp, channelImage, onVideoSelect, video, subs, description, duration, toggleRecommendedVideoSelected}) {
    return (
        <div className = "videoCard" onClick = {() => {toggleRecommendedVideoSelected(); onVideoSelect(video);}}>
            <img className = "videoCard__thumbnail" src = {image} alt="" /> 
            <div className = "videoCard__info">
                <Avatar 
                    className = "videoCard__avatar" 
                    alt={channel} 
                    src = {channelImage} 
                />
                <div className = "videoCard__text">
                    <h4>{title}</h4>
                    <p>{channel}</p>
                    <p className = 'videoCard__views_and_timestamp'>
                        {views} . {timestamp}
                    </p>
                </div>
            </div>    
        </div>
    )
}



export default VideoCard;