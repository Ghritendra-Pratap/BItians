const router =require("express").Router();
const User = require('../models/User');
const bcrypt = require('bcrypt');
//REGISTER


router.post('/register', async (req , res) => {
 
    const {username , email,  password, profilePicture,coverPicture,followers,following,isAdmin} = req.body;
    
    if(!username  || !email   || !password  ){
        return(res.status(422).json({error:'plz filled the required option'}));
    }

    try{
        const userExist = await User.findOne({email:email});
        if(userExist){
            return(res.status(422).json({error:'email already exist'}));

        }
        const user = new User({username , email, password,  profilePicture,coverPicture,followers,following,isAdmin});

        const userRegister = await user.save();
        if(userRegister){
            res.status(201).json({message: "user registersd successfully"});
        }
        else{
            res.status(500).json({error:"Failed to registered"});
        }
        
       

    }catch(err){
        console.log(err);

    }   
});

//login

router.post('/login' , async (req , res) =>{
    try{
        const {email , password} = req.body;

        if(!email || !password){
            return res.status(300).json({error : "plz filled all column"});
        }


        const userLogin = await User.findOne({email:email});
        if(userLogin){
            const ismatch = await bcrypt.compare(password, userLogin.password);
            if(!ismatch){
            return res.status(400).json({error : "invalid credential"});
            }else{
            res.json(userLogin);
            }
        }else{
            return res.status(400).json({error : "invalid credential"});
        }
        
    }catch(err){
        console.log(err);
    }
})
    

module.exports = router;
//router