import React from 'react'
import './Header.css'
import SearchIcon from '@material-ui/icons/Search';
import FlashOnIcon from '@material-ui/icons/FlashOn';
import VideoLibraryIcon from '@material-ui/icons/VideoLibrary';
import HomeIcon from '@material-ui/icons/Home';
import LiveTvIcon from '@material-ui/icons/LiveTv';
import PersonOutlineIcon from '@material-ui/icons/PersonOutline';

function Header() {
    return (
        <div className="header">
           <div className="header__icons">

            <div className="header__icon header__icon--active">
               <HomeIcon /> 
               <p>Home</p> 
            </div>
            <div className="header__icon">
               <FlashOnIcon /> 
               <p>Trending</p> 
            </div>
            <div className="header__icon">
               <LiveTvIcon /> 
               <p>Verified</p> 
            </div>
            <div className="header__icon">
               <VideoLibraryIcon /> 
               <p>Connections</p> 
            </div>
            <div className="header__icon">
               <SearchIcon />  
               <p>Search</p> 
            </div>
            <div className="header__icon">
               <PersonOutlineIcon /> 
               <p>Account</p> 
            </div>
               
           </div>
            <img src="https://download.logo.wine/logo/Hulu/Hulu-Logo.wine.png" alt="" />
        </div>
    )
}

export default Header
