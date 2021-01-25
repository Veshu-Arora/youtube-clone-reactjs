import React from "react";
import { Paper, Typography } from '@material-ui/core';
import '../../css/ResultsPage/VideoDetail.css';

const VideoDetail = ({video}) => {
    if(!video) return<center><div><h1>Search something to see results!</h1></div></center>
    const videoSrc = `https://www.youtube.com/embed/${video.id.videoId}`
      return(
        <React.Fragment>
            <Paper  className = 'iframe_paper' elevation = {6} >
                <iframe className = 'iframe' frameBorder = '0' height = '100%' width = '100%' title = "Video Player" src = {videoSrc} />
            </Paper>
            <Paper className = 'typography_container_paper' elevation = {3}>
                <Typography className = 'typography_one' variant = "h6">{video.snippet.title}</Typography>
                <Typography className = 'typography_two' variant = "subtitle1">{video.snippet.channelTitle}</Typography>
                {/* <Typography variant = "subtitle2">{video.snippet.description}</Typography> */}
            </Paper>
        </React.Fragment>
    )
}



export default VideoDetail;