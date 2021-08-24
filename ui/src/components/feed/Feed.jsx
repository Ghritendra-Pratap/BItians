import React, { useState, useEffect } from 'react'
import Share from "../share/Share"
import Post from '../post/Post'
import './feed.css'
import { useContext } from 'react'
import { AuthContext } from '../../context/AuthContext'
import axios from "axios"

const Feed = ({username}) => {
const [posts,setPosts] = useState([]);
const user = useContext(AuthContext)

const fetchPosts = async() => {
    const res = username ? await axios.get("/posts/profile/"+username ) :
     await axios.get("posts/timeline/"+user._id)
    setPosts(res.data)
}
    
    useEffect(() => {
        fetchPosts()
    }, [username,user._id])
    return (
        <div className="feed">
            <div className="feedWrapper">
                <Share/>
                {posts.map((p)=>(
                 <Post key={p._id} post={p}/>))}
                
                
            </div>
            
        </div>
    )
}

export default Feed
