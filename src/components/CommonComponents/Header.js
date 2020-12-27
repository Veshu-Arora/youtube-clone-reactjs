import React from "react";
import MenuIcon from '@material-ui/icons/Menu';
import SearchIcon from '@material-ui/icons/Search';
import VideoCallIcon from '@material-ui/icons/VideoCall';
import AppsIcon from '@material-ui/icons/Apps';
import NotificationsIcon from '@material-ui/icons/Notifications';
import Avatar from '@material-ui/core/Avatar';
import {Link} from "react-router-dom";
import '../../css/CommonComponents/Header.css';
class Header extends React.Component {

    constructor(){
        super()
        this.state = {
            searchTerm:'',
        }
    }

    handleChange = (event) => {
        this.setState({
            [event.target.name]:event.target.value
        })
    };

    handleSubmit = (event) => {
        const {searchTerm} = this.state;
        const {onFormSubmit} = this.props;

        onFormSubmit(searchTerm);
        event.preventDefault();
    }

    componentDidMount(){
        console.log(JSON.stringify(this.props));
    }

    render() {

        return (
            <div className = "header">
                <div className = "header__left">
                    <MenuIcon />
                    <Link to = "/">
                        <img className = 'header__logo'
                            src = "https://secureservercdn.net/45.40.144.200/8j4.0ea.myftpupload.com/wp-content/uploads/2020/07/youtube-banner.jpg"
                            alt = "Youtube"
                        />
                    </Link> 
                </div>

                <div className = "header__input">
                    <input 
                        type="text" 
                        name="searchTerm" 
                        placeholder = "Search" 
                        autoComplete="on" 
                        value={this.state.searchTerm}
                        onChange={(event) => this.handleChange(event)}
                        required="" 
                    />
                    <Link to = {`/search/${this.state.searchTerm}`}>
                        <SearchIcon className = "header_inputButton" onClick = {this.handleSubmit} />
                    </Link>
                </div>

                <div className = "header__icons">
                    <VideoCallIcon className = "header__icon"/>
                    <AppsIcon className = "header__icon"/>    
                    <NotificationsIcon className = "header__icon"/>
                    <Avatar 
                        className = 'avatar-image'
                        alt="VA" 
                        src="https://avatars2.githubusercontent.com/u/Veshu-Arora"
                    />
                </div>   
            </div>
        )
    }
}



export default Header;