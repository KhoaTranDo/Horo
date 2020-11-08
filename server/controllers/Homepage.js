const BackgroundSchema = require('../models/Background');
const config = require('config');
class Hompage{
    async bg(req,res){
             try{
                const BackgroundSchemas = await BackgroundSchema.find();
                res.json(BackgroundSchemas);
            }catch(err){
                res.json({message:err});
            };
          }
            upload(req,res){
                try{
                const course=new BackgroundSchema(req.body);
                course.save()
                }
                catch(err){
                    res.json({message: err});
                }
            }
        }
module.exports = new Hompage();