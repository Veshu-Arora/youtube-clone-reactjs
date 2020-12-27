import React from "react";
import Sidebar from '../components/HomePage/Sidebar';
import RecommendedVideos from '../components/HomePage/RecommendedVideos';
import youtube from '../api/Youtube';
// import '../App.css';
import Header from '../components/CommonComponents/Header';
import { searchAction } from '../redux/actions/searchAction';
import { selectedVideoAction } from '../redux/actions/selectedVideoAction';
import { recommendedVideoSelectedAction } from '../redux/actions/recommendedVideoSelectedAction'; 
import { connect } from 'react-redux';
import LoadingBar from 'react-top-loading-bar';

class HomePage extends React.Component {

    constructor() {
        super();
        this.state = {
            videos: [],
            selectedVideo: null,
            recommendedVideoSelected:false,
            progress: 0
        }
    }

    handleSubmit = async (SearchTerm) => {
        this.startBar();
        const response = await youtube.get('search', {
        params: {
            part: 'snippet',
            // chart: 'justin bieber',
            maxResults: 10,
            key: 'AIzaSyDm_N0x4QklzJ30EL16pnfgWQEDWcTq7RE',
            q: SearchTerm
        }});

        if(response.data){
            this.props.sendFetchedVideos(response.data.items);
            this.props.sendRecommendedVideoSelectedStatus(this.state.recommendedVideoSelected)
            this.props.history.push(`/search/${SearchTerm}`)
        }

        this.setState({
            videos: response.data.items,
            selectedVideo: response.data.items[0],
        })
    };

        
    initialSubmit = async (SearchTerm) => {
        this.startBar();
        const response = await youtube.get('search', {
            params: {
                part: 'snippet',
                // chart: 'mostPopular',
                maxResults: 40,
                key: 'AIzaSyDm_N0x4QklzJ30EL16pnfgWQEDWcTq7RE',
                q: SearchTerm
            }});


        if(response.data){
            this.props.sendFetchedVideos(response.data.items);
        }

        this.setState({
            videos: response.data.items,
            selectedVideo: response.data.items[0],
        })
    };

    onVideoSelect = (video) => {
        this.startBar();
        this.setState({
            selectedVideo: video
        })
        setTimeout(() => {
            this.props.sendSelectedVideo(this.state.selectedVideo)              
        }, 1000);
        
        setTimeout(() => {
            this.props.history.push(`/search/watch?v=${this.state.selectedVideo.id.videoId}`)   
        }, 1000);
    }

    componentDidMount() {
        this.initialSubmit('Justin Bieber');

        setTimeout(() => {
            this.setState({
                selectedVideo: this.props.getFetchedVideos.data[0],
                videos : this.props.getFetchedVideos.data
            })
        }, 5000); 

    }


    toggleRecommendedVideoSelected = () => {
        this.setState((prevState)=>({
            recommendedVideoSelected: !prevState.recommendedVideoSelected
        }))
    
        setTimeout(() => {
            this.props.sendRecommendedVideoSelectedStatus(this.state.recommendedVideoSelected)
        }, 1000);
    }

    startBar = () => {
        this.setState((prevState)=>({
            progress: prevState.progress + 100
        }))
    }

    render() {
        return(
            <div>
                <Header onFormSubmit = {this.handleSubmit}/>
                <LoadingBar onClick = {() => {this.handleUpdate()}}
                    color = 'red' 
                    progress = {this.state.progress}
                    shadow = 'true'
                    height = {2}
                    background = '#f5f5f5'
                    transitionTime = {5500}
                    loaderSpeed = {4000}
                />
                <div style = {{display: 'flex'}}>
                    <Sidebar />
                    <RecommendedVideos
                        video = {this.state.selectedVideo}
                        video_list = {this.state.videos} 
                        onVideoSelect = {this.onVideoSelect}
                        toggleRecommendedVideoSelected = {this.toggleRecommendedVideoSelected}
                    />
                </div>
            </div>
           
        )
    }
}

const mapDispatchToProps = (dispatch) => {
    return ({
      sendFetchedVideos: (data) => dispatch(searchAction(data)),  
      sendSelectedVideo: (data) => dispatch(selectedVideoAction(data)),
      sendRecommendedVideoSelectedStatus: (data) => dispatch(recommendedVideoSelectedAction(data)),    
    })
}

const mapStateToProps = (state) => {
    return {
      getFetchedVideos : state.searchReducer,
    }   
}

export default connect(mapStateToProps, mapDispatchToProps)(HomePage); 