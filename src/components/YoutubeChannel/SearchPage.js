import React from "react";
import TuneOutlinedIcon from '@material-ui/icons/TuneOutlined';
import ChannelRow from '../components/YoutubeChannel/ChannelRow';
import VideoRow from '../ResultsPage/VideoRow';
import '../../css/YoutubeChannel/SearchPage.css';

function SearchPage() {
    return (
        <div className = "searchPage">
            <div className = "searchPage__filter">
                <TuneOutlinedIcon />
                <h2>FILTER</h2>
                
            </div>

            <hr />  

            <ChannelRow
                image = "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcTbvZnaR31RgaRGHuPCppCY_0RN94g2gJlTFQ&usqp=CAU"
                channel = "Clevver Programmer"
                verified
                subs = "668K"
                noOfVideos = {328}
                description = "You can find programming related content here. Be it competitive programming or projects or anything else. You will find all of it right here in one place, You can find programming related content here. Be it competitive programming or projects or anything else. You will find all of it right here in one place.You can find programming related content here. Be it competitive programming or projects or anything else. You will find all of it right here in one place."           
            />

            <hr />

            <VideoRow
                views = "1.78M"
                subs = "668K"
                description = "You can find programming related content here. Be it competitive programming or projects or anything else..."
                timestamp = "8 days ago"
                channel = "Clevver Programmer"
                image = "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcTbvZnaR31RgaRGHuPCppCY_0RN94g2gJlTFQ&usqp=CAU"
                title = "Lets Build a youtube clone with React JS for Beginners"
            />

            <VideoRow
                views = "1.78M"
                subs = "668K"
                description = "You can find programming related content here. Be it competitive programming or projects or anything else..."
                timestamp = "8 days ago"
                channel = "Clevver Programmer"
                image = "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcTbvZnaR31RgaRGHuPCppCY_0RN94g2gJlTFQ&usqp=CAU"
                title = "Lets Build a youtube clone with React JS for Beginners"
            />

            <VideoRow
                views = "1.78M"
                subs = "668K"
                description = "You can find programming related content here. Be it competitive programming or projects or anything else..."
                timestamp = "8 days ago"
                channel = "Clevver Programmer"
                image = "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcTbvZnaR31RgaRGHuPCppCY_0RN94g2gJlTFQ&usqp=CAU"
                title = "Lets Build a youtube clone with React JS for Beginners"
            />


        </div>
    )
}



export default SearchPage;