import React from "react";
import '../../css/ResultsPage/VideoRow.css';

function VideoRow({ views, subs, description, timestamp, channel, title, image, video, onVideoSelect }) {
    return (
        <div className = "videoRow" onClick = {() => onVideoSelect(video)}>
            <img src = {image} alt = "" />
            <div className = "videoRow__text">
                <div className = 'video-title'>{title}</div>
                <p className = "videoRow__headline">
                    <div className = 'channel_name'>{channel} </div>
                    {/* <br /> */}
                    {/* <span className = "videoRow__subs">
                        <span className = "videoRow__subsNumber" >{subs}</span> subscribers
                    </span>{" "}  */}
                    <div>{views} views . {timestamp}</div>
                </p>
                {/* <p className = "videoRow__description">{description}</p> */}
            </div>
        </div>
    )
}



export default VideoRow;