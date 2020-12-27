import React from "react";
import SearchResults from '../components/ResultsPage/SearchResults';
import youtube from '../api/Youtube';
import Header from '../components/CommonComponents/Header';
import { searchAction } from '../redux/actions/searchAction';
import { recommendedVideoSelectedAction } from '../redux/actions/recommendedVideoSelectedAction'; 
import { connect } from 'react-redux';
import LoadingBar from 'react-top-loading-bar';

class ResultsPage extends React.Component {

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
                // chart: 'mostPopular',
                maxResults: 10,
                key: 'AIzaSyDm_N0x4QklzJ30EL16pnfgWQEDWcTq7RE',
                q: SearchTerm
            }});


        if(response.data){
            this.props.sendFetchedVideos(response.data.items);
            this.props.sendRecommendedVideoSelectedStatus(this.state.recommendedVideoSelected)
            this.props.history.push(`/search/${SearchTerm}`)
            this.componentDidMount();
        }
    };
    
    onVideoSelect = (video) => {
        this.startBar();
        this.setState({
            selectedVideo: video
        })
       
    }    
    

    componentDidMount(){
        
        this.setState({
            progress: 0
        })

        if(this.props.getRecommendedVideoSelectedStatus.data === false)
        {
            this.setState({
                videos: this.props.getFetchedVideos.data,
                selectedVideo: this.props.getFetchedVideos.data[0],
            })
        }
        
        else if(this.props.getRecommendedVideoSelectedStatus.data === true) 
        {
            this.setState({
                selectedVideo: this.props.getSelectedVideo.data,
                videos: this.props.getFetchedVideos.data
            })  
        }
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
                    <SearchResults 
                        video = {this.state.selectedVideo} 
                        video_list = {this.state.videos} 
                        onVideoSelect = {this.onVideoSelect} 
                    />
                </div>
        </div>
        )
    }
}

const mapDispatchToProps = (dispatch) => {
    return ({
      sendFetchedVideos: (data) => dispatch(searchAction(data)), 
      sendRecommendedVideoSelectedStatus: (data) => dispatch(recommendedVideoSelectedAction(data)),    
    })
}

const mapStateToProps = (state) => {
    return {
      getFetchedVideos : state.searchReducer,
      getSelectedVideo : state.selectedVideoReducer,
      getRecommendedVideoSelectedStatus : state.recommendedVideoSelectedReducer,
    }   
}

export default connect(mapStateToProps, mapDispatchToProps)(ResultsPage);