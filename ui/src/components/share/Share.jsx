import React from 'react'
import './share.css'
import { useRef } from 'react'
import {useContext} from 'react';
import { AuthContext } from '../../context/AuthContext'
import { EmojiEmotions, PermMedia,Room,Label, SentimentSatisfiedAlt} from '@material-ui/icons'
import { useState } from 'react';
import axios from "axios"
const Share = () => {
    const {user} =useContext(AuthContext)
    const PF = process.env.REACT_APP_PUBLIC_FOLDER;
    const desc = useRef()
    const [file , setFile] = useState(null)

    const submitHandler = (e) => {
        e.preventDefault()
        const newPost = {
            userId:user._id,
            desc: desc.current.value
        }

        try{
            axios.post("/posts", newPost)
        }catch(err){}

    }

    return (
        <div className="share">
            <div className="shareWrapper">
                <div className="shareTop">
                    <img src="/assets/ghoul.jpg" alt="photo1" className="shareProfileImg" />
                    <input ref ={desc} placeholder="What's in your mind" className="shareInput" />
                </div>
                <hr className="shareHr" />
                <form className="shareBottom" onSubmit={submitHandler}>
                    <div className="shareOptions">
                        <div className="shareOption">
                        <label htmlColor ="tomato" className="shareIcon">
                            <PermMedia  htmlColor="tomato" className="shareIcon"/>
                            <span className="shareOptionText">Photo or Video</span>
                            <input style={{display: "none"}}type="file" id="file" accept= ".jpg , .jpeg , .png" onChange={(e)=>setFile(e.target.files[0])}/>
                        </label>
                        
                    </div>
                    <div className="shareOption">
                        <Label htmlColor='blue' className="shareIcon"/>
                        <span className="shareOptionText">Tag</span>
                    </div>
                    <div className="shareOption">
                        <Room htmlColor='green' className="shareIcon"/>
                        <span className="shareOptionText">Location</span>
                    </div>
                    <div className="shareOption">
                        <EmojiEmotions htmlColor='goldenrod' className="shareIcon"/>
                        <span className="shareOptionText">Feeling</span>
                    </div>
                    </div>
                    <button className="shareButton" type ="submit">Share</button>
                </form>

            </div>
            
        </div>
    )
}

export default Share
