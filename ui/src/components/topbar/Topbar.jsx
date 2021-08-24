import React from 'react'
import{Search,Person, Chat, Notifications} from '@material-ui/icons'
import "./topbar.css"
import {Link} from 'react-router-dom'
import { useContext } from 'react'
import {AuthContext} from '../../context/AuthContext'

const Topbar = () => {
    const {user}= useContext(AuthContext);
    
    console.log(user.username);
   
    const PF = process.env.REACT_APP_PUBLIC_FOLDER
    return (
        <div className="topbarContainer">
            <div className="topbarLeft">
                <Link to='/' style ={{textDecoration:"none"}}>
                    <span className="logo">BItians</span>
                </Link>
            </div>
            <div className="topbarCenter">
                <div className="searchbar">
                    <div className="searchIcon"><Search/></div>
                    
                    <input 
                        placeholder="Search for friend or post or share"
                        className="searchInput" />
                </div>
            </div>
            <div className="topbarRight">
                <div className="topbarLinks">
                    <span className="topbarLink">Homepage</span>
                    <span className="topbarLink">Timeline</span>
                </div>
                <div className="topbarIcons">
                    <div className="topbarIconItem">
                        <Person/>
                        <span className="topbarIconBadge">1</span>
                    </div>
                    <div className="topbarIconItem">
                        <Chat/>
                        <span className="topbarIconBadge">1</span>
                    </div>
                    <div className="topbarIconItem">
                        <Notifications/>
                        <span className="topbarIconBadge">1</span>
                    </div>            
                </div>
                
                <Link to = {`/profile/${user.username}`}>
                {/* {user.profilePicture ? PF + user.profilePicture: PF + } */}
                     <img src={PF + "noAvatar1.png"}  alt="photo" className="topbarImg" />
                </Link>
                
            </div>
            
        </div>
    )
}

export default Topbar
