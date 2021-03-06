const router =require("express").Router();
const User = require('../models/User')
const bcrypt = require('bcrypt');

//update User
router.put("/:id", async (req, res) => {
    if (req.body.userId === req.params.id || req.body.isAdmin){
        if(req.body.password){
            try{
                const salt = await bcript.genSalt(10);
                req.body.password = await brcrypt.hash(req.body.password, salt);
            } catch(err){
                return res.status(500).json(err);
            }
        }
        try{
            const user = await User.findByIdAndUpdate(req.params.id, {
                $set: req.body,
            });
            res.status(200).json("Accout has been updated")
        }catch(err){
            return res.status(500).json(err);
        }
    }else{
        return res.status(403).json("You can only update your account")
    }
});

//delete

router.delete("/:id", async (req, res) => {
    if (req.body.userId === req.params.id || req.body.isAdmin){
    
        try{
            const user = await User.findByIdAndDelete(req.params.id, {
                $set: req.body,
            });
            res.status(200).json("Accout has been deleted")
        }catch(err){
            return res.status(500).json(err);
        }
    }else{
        return res.status(403).json("You can only deleted your account")
    }
});

//get a user
router.get("/", async (req,res)=>{
    const userId = req.query.userId;
    const username = req.query.username;
    try{
        const user = userId ? await User.findById(userId) : await User.findOne({username : username});
        const {password,updatedAt, ...other} = user._doc
        res.status(200).json(user)
    }catch(err) {
        res.status(500).json(err)
    }
});

//follow update
router.put("/:id/follow" , async(req,res)=>{
    if(req.body.userId !== req.params.id){
        try{
            const user =await User.findById(req.params.id);
            const currentUser = await User.findById(req.body.userId);
            if(!user.followers.includes(req.body.userId)){
                await user.updateOne({$push : { followers : req.body.userId}})
                await currentUser.updateOne({$push: {following:req.params.id}});
                res.status(200).json("user has been followed");
            }else{
                res.status(403).json("You already follow this user");
            } 
        }catch(err){
            res.status(500).json(err);
        }
    }
    else{
        res.status(403).json("you can't follow Yourself")
    }
})

//unfollow update
router.put("/:id/unfollow" , async(req,res)=>{
    if(req.body.userId !== req.params.id){
        try{
            const user =await User.findById(req.params.id);
            const currentUser = await User.findById(req.body.userId);
            if(!user.followers.includes(req.body.userId)){
                await user.updateOne({$pull : { followers : req.body.userId}})
                await currentUser.updateOne({$pull: {following:req.params.id}});
                res.status(200).json("user has been unfollowed");
            }else{
                res.status(403).json("You don't follow this user");
            } 
        }catch(err){
            res.status(500).json(err);
        }
    }
    else{
        res.status(403).json("you can't unfollow Yourself")
    }
})


module.exports = router;