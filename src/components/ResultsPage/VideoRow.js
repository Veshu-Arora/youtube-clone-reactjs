import React from "react";
import '../../css/ResultsPage/VideoRow.css';
// import Avatar from '@material-ui/core/Avatar';

function VideoRow({ views, subs, description, timestamp, channel, title, image, video, onVideoSelect }) {
    return (
        <div className = "videoRow" onClick = {() => onVideoSelect(video)}>
            <img src = {image} alt = "" />
            <div className = "videoRow__text">
                <div className = 'video-title'>{title}</div>
                <p className = "videoRow__headline">
                    {channel} 
                    <br />
                    {/* <span className = "videoRow__subs">
                        <span className = "videoRow__subsNumber" >{subs}</span> subscribers
                    </span>{" "}  */}
                    {views} views . {timestamp}
                </p>
                {/* <p className = "videoRow__description">{description}</p> */}
            </div>
        </div>
    )
}



export default VideoRow;