import {useState ,useEffect} from 'react'
import {MoreVert} from '@material-ui/icons'
import './post.css'
import {format} from "timeago.js"
import axios from "axios"
import {Link} from "react-router-dom"
import {useContext} from 'react';
import { AuthContext } from '../../context/AuthContext'



const Post = ({post}) => {
    const [like, setlike] = useState(post.likes.length)
    const [isLiked, setisLiked] = useState(false)
    const [user, setUser] = useState({})
    const PF = process.env.REACT_APP_PUBLIC_FOLDER;
    const {user:currentUser} = useContext(AuthContext)
    useEffect(() => {
       setisLiked(post.likes.includes(currentUser._id))
    },[currentUser._id , post.likes])

    const fetchUser = async () => {
        const res = await axios.get(`/users?userId=${post.userId}`);
        setUser(res.data);
      };
    useEffect(() => {
       
        fetchUser();
      }, []);

    const likeHandler=()=>{
        try{
            axios.put("/posts/"+post._id+"/like" , {userId:currentUser._id})

        }catch(err){}
        setlike(isLiked ? like-1 : like+1)
        setisLiked(!isLiked) 
    }
    return (
        <div className='post'>
            <div className="postWrapper">
                <div className="postTop">
                    <div className="postTopLeft">
                        <Link to={`profile/${user.username}`}>
                        <img src={user.profilePicture || PF+"noAvatar1.png" } alt="pic" className="postProfileImg" />
                        </Link>
                        <span className="postUserName">{user.username}</span>
                        <span className="postDate"> {format(post.createdAt)}</span>
                    </div>
                    <div className="postTopRight">
                    <MoreVert/>
                    </div>
                </div>
                <div className="postCenter">
                    <span className="postText">{post?.desc}</span>
                    <img src= "assets/post.jpg" alt="pImg" className="postImg" />
                </div>
                <div className="postBottom">
                    <div className="postBotttomLeft">
                    <img src="/assets/like1.png" alt="likeIcon" onClick = {likeHandler} className="likeIcon" />
                    <img src="/assets/heart.png" alt="likeIcon" onClick = {likeHandler} className="likeIcon" />
                    <span className="postLikeCounter">{like} peoples like it</span>
                </div>
                    <div className="postBottomRight">
                        <span className="postCommentTexts"> 9 Comments</span>
                    </div>
                </div>
            </div>
            
        </div>
    )
}

export default Post
