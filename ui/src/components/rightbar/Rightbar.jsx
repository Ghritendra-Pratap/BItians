import React from 'react'
import './rightbar.css'
import {Users} from '../../dummyData'
import Online from '../online/Online'


const Rightbar = ({user}) => {
    const PF = process.env.REACT_APP_PUBLIC_FOLDER;
    const HomeRightbar = ()=>{
        return(
            <>
            <div className="birthdayContainer">
                        <img src={`${PF}birthday.png`} alt="bday" className="birthdayImg" />
                        <span className="birthdayText">
                            <b>Sanjay Rathia </b>and <b>3 other </b> have birthday today
                        </span>
                    </div>
                    <img src={`${PF}advertise.jpg`} alt="Img" className="rightbarAd" />
                    <h4 className="rightbarTitle">Online Friends</h4>
                    <ul className="rightbarFriendList">
                    {Users.map(u=>(
                            <Online key = {u.id} user={u}/>
                        ))}
                    </ul>
       </> )
    };

    const ProfileRightBar = ()=>{
        
        return(
            <>
            <h4 className ="rightbarTitle">User Information</h4>
            <div className="rightbarInfo">
                <div className="rightbarInfoItem">
                    <span className="rightbarInfokey">City:</span>
                    <span className="rightbarInfoValue">{user.city}</span>
                </div>
                <div className="rightbarInfoItem">
                    <span className="rightbarInfokey">From:</span>
                    <span className="rightbarInfoValue">{user.from}</span>
                </div>
                <div className="rightbarInfoItem">
                    <span className="rightbarInfokey">Relationship:</span>
                    <span className="rightbarInfoValue">{user.relationship==1 ? "Single" : "Married"}</span>
                </div>
            </div>
            <h4 className ="rightbarTitle">User Friends</h4>
            <div className="rightbarFollowings">
                <div className="rightbarFollowing">
                    <img src={`${PF}ghoul.jpg`} alt="" className="rightbarFollowingImg" />
                    <span className="rightbarFollowingName">Spd</span>
                </div>
                <div className="rightbarFollowing">
                    <img src={`${PF}ghoul.jpg`} alt="" className="rightbarFollowingImg" />
                    <span className="rightbarFollowingName">Fury</span>
                </div>
                <div className="rightbarFollowing">
                    <img src={`${PF}ghoul.jpg`} alt="" className="rightbarFollowingImg" />
                    <span className="rightbarFollowingName">Fury</span>
                </div>
                <div className="rightbarFollowing">
                    <img src={`${PF}ghoul.jpg`} alt="" className="rightbarFollowingImg" />
                    <span className="rightbarFollowingName">Fury</span>
                </div>
                <div className="rightbarFollowing">
                    <img src={`${PF}ghoul.jpg`} alt="" className="rightbarFollowingImg" />
                    <span className="rightbarFollowingName">Fury</span>
                </div>
                <div className="rightbarFollowing">
                    <img src={`${PF}ghoul.jpg`} alt="" className="rightbarFollowingImg" />
                    <span className="rightbarFollowingName">Fury</span>
                </div>
            </div>
            </>
        )

    }
    return (
        <div className="rightbar">
            <div className="rightWrapper">
                
                {user ? <ProfileRightBar /> : <HomeRightbar/>}
                
            </div>
        </div>
    )
}

export default Rightbar
