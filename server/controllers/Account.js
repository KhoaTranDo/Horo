const jwt = require('jsonwebtoken');
const bcryptjs = require('bcryptjs')
const {validationResult} = require('express-validator');
const UserSchema = require('../models/User');
const config = require('config');

class Account {
    async index(req,res){
        try{     
                        const user = await UserSchema.findById(req.user.id).select('-password');
                        res.json(user);
                    }catch(error){
                        console.log(error.message);
                        return res.status(500).json({ msg: "Server Error..."});
                    }
                }

    async LoginS(req,res){
        User.getUserByUserName(req.params.username,(err,user)=>{
            if(err)
                return res.status(500).send("Server error!");
            if(!user)
                return res.status(422).send("User not found");
            if(user){
                //racunamo korisnikovu ukupnu ocenu
                var cal=0;
                Rating.findMine(user._id,(err,rating)=>{
                    if(err)
                        return res.status(500).send("Server error!");
                    //racunanje srednje vrednosti
                    var sum=0;var num=0;
                    for(var i=0;i<rating.length;i++)
                        if(rating[i].rate!=0){sum=sum+rating[i].rate; num=num+1;}
                    cal=sum/num;
                    //odgovor korisniku
                    return res.status(200).json ({star:cal,user:{firstName:user.firstName,lastName:user.lastName,userName:user.userName,email:user.email,phone:user.phone,
                    street:user.street,street2:user.street2,avatar:user.avatar},me:req.user.userName});
                });
            }
        })
    }
    async Register(req,res){
        try {
            let {firstname,lastname,email,phone,password}=req.body;
            let user = await UserSchema.findOne({email})
            const errors = validationResult(req);
            if(!errors.isEmpty()){
                return res.status(401).json({ errors: errors.array()});
            }
            if(user){
                return res.status(401).json({ msg: "There is already with this email"});
            }
            const salt = await bcryptjs.genSalt(10);
            password= await bcryptjs.hash(password,salt);
            user= new UserSchema({   
                firstname,    
                lastname,
                email,
                phone,
                password
            })
            await user.save();
            const payload= {
                user:{
                    id: user.id
                }
            }
            jwt.sign(
                payload,
                config.get('jwtSecret'),
                ( err,token)=>{
                    if(err) throw err;
                    res.json({token});
                } 
            )
        } catch(error){
            // console.log(error.message);
            return res.status(500).json({ msg: "Server Error..."});
        }
    }

    async Login(req,res){
        try{
            const {email,password}=req.body;
            const errors = validationResult(req);
            let user = await UserSchema.findOne({email})
            if(!errors.isEmpty()){
             return res.status(401).json({ errors: errors.array()});
             }
            if(!user){
                return res.status(401).json({msg:"There is no user on this email"});
                }
             let isPasswordMatch = await bcryptjs.compare(password,user.password);
             if(isPasswordMatch){
                 const payload= {
                     user:{
                         id: user.id
                     }
                 }
                 jwt.sign(
                     payload,
                     config.get('jwtSecret'),
                     (err,token)=>{
                         if(err) throw err;
                         res.json({token});
                     }  
                 )
             }else return res.status(401).json({msg:"Password Wrong"})
        }catch(error){
            //  console.log(error.message);
             return res.status(500).json({msg: "Server Error"});
        }
    }
}
module.exports = new Account();