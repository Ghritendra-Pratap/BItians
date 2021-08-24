import React from 'react'
import './sidebar.css'
import {Users} from '../../dummyData'
import CloseFriends from '../closeFriends/CloseFriends'
import {RssFeed, Chat, PlayCircleFilled, Group, Bookmarks, HelpOutline, Work, Event} from '@material-ui/icons'

const Sidebar = () => {
    return (
        <div className="sidebar">
           <div className="sidebarWrapper">
                <ul className="sidebarList">
                    <li className="sidebarListItem">
                        <RssFeed className='sidebarItemIcon'/>
                        <span className="sidebarItem">Feed</span>
                    </li>
                    <li className="sidebarListItem">
                        <Chat className='sidebarItemIcon'/>
                        <span className="sidebarItem">Chat</span>
                    </li>
                    <li className="sidebarListItem">
                        <PlayCircleFilled className='sidebarItemIcon'/>
                        <span className="sidebarItem">Video</span>
                    </li>
                    <li className="sidebarListItem">
                        <Group className='sidebarItemIcon'/>
                        <span className="sidebarItem">Group</span>
                    </li>
                    <li className="sidebarListItem">
                        <Bookmarks className='sidebarItemIcon'/>
                        <span className="sidebarItem">Bookmarks</span>
                    </li>
                    <li className="sidebarListItem">
                        <HelpOutline className='sidebarItemIcon'/>
                        <span className="sidebarItem">Question</span>
                    </li>
                    <li className="sidebarListItem">
                        <Work className='sidebarItemIcon'/>
                        <span className="sidebarItem">Job</span>
                    </li>
                    <li className="sidebarListItem">
                        <Event className='sidebarItemIcon'/>
                        <span className="sidebarItem">Event</span>
                    </li>
                       
                </ul>
                <button className="sidebarButton">Show More</button>
                <hr className='sidebarHr'/>
                <ul className="sidebarFriendList">
                {Users.map((u)=>(
                        <CloseFriends key = {u.id} user={u}/>
                    ))}
                  
                        
                </ul>   
            </div> 
        </div>
    )
}

export default Sidebar
