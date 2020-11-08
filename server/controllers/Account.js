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
        try{     
            const user = await UserSchema.findById(req.user.id).select('-password');
            res.json(user);
        }catch(error){
            console.log(error.message);
            return res.status(500).json({ msg: "Server Error..."});
        }
    }
    async Register(req,res){
        try {
            let {name,phone,password}=req.body;
            let user = await UserSchema.findOne({phone})
            const errors = validationResult(req);
            if(!errors.isEmpty()){
                return res.status(401).json({ errors: errors.array()});
            }
            if(user){
                return res.status(401).json({ msg: "There is already with this phone"});
            }
            const salt = await bcryptjs.genSalt(10);
            password= await bcryptjs.hash(password,salt);
            user= new UserSchema({
                name,
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
            console.log(error.message);
            return res.status(500).json({ msg: "Server Error..."});
        }
    }

    async Login(req,res){
        try{
            const {phone,password}=req.body;
            const errors = validationResult(req);
            let user = await UserSchema.findOne({phone})
            if(!errors.isEmpty()){
             return res.status(401).json({ errors: errors.array()});
             }
            if(!user){
                return res.status(401).json({msg:"There is no user on this phone"});
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
                     ( err,token)=>{
                         if(err) throw err;
                         res.json({token});
                     }  
                 )
             }else return res.status(401).json({msg:"Password Wrong"})
        }catch(error){
             console.log(error.message);
             return res.status(500).json({msg: "Server Error"});
        }
    }
}
module.exports = new Account();