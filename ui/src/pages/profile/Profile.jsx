import React from 'react'
import './profile.css'
import Topbar from '../../components/topbar/Topbar'
import Sidebar from '../../components/sidebar/Sidebar'
import Feed from '../../components/feed/Feed'
import Rightbar from '../../components/rightbar/Rightbar'
import {useState ,useEffect} from 'react'
import axios from "axios"
import {useParams} from "react-router"

const Profile = () => {
    const PF = process.env.REACT_APP_PUBLIC_FOLDER;
    const [user, setUser] = useState({})
    const username = useParams().username
    console.log(username)
    

    const fetchUser = async() =>{
        const res = await axios.get(`/users?username=${username}`)
        console.log(res)
        setUser(res.data)
    }
    useEffect(() => {
            fetchUser()
        
    }, [])
    return (
        <div>
            <Topbar/>
            <div className="profile">
             <Sidebar/>
             <div className="profileRight">
             <div className="profileRightTop">
                 <div className="profileCover">
                 <img src="/assets/ghoul.jpg" alt="" className="profileCoverImg" />
                 <img src="/assets/ghoul.jpg" alt="" className="profileUserImg" />
            </div>
            <div className="profileInfo">
                <h4 className="profileInfoName">{user.username}</h4>
                <span className="profileInfoDesc">{user.desc}</span>
            </div>
             </div>
             <div className="profileRightBottom">
             <Feed username ={username}/>
             <Rightbar user = {user}/>
             </div>
             </div>
             </div>
            
        
        </div>
    )
}

export default Profile;
