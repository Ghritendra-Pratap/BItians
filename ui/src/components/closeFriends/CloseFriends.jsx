import React from 'react'
import './closefriends.css'


const closeFriends = ({user}) => {
    const PF = process.env.REACT_APP_PUBLIC_FOLDER;
    return (
        <div>
            <li className="sidebarFriends">
                        <img src={PF+user.profilePicture} alt="photo1" className="sidebarFriendImg" />
                        <span className="sidebarFriendName">{user.username}</span>
             </li>
        </div>
    )
}



export default closeFriends
//close