
const mongoose = require('mongoose');

const bcrypt = require('bcrypt');

const authschema = mongoose.Schema({
    name:String,
    email:String,
    password:String
    })
const User =mongoose.model('user',authschema);



exports.registerfunction=(name,email,password)=>{
    return new Promise((resolve,reject)=>{
        mongoose.connect(url).then(()=>{
            return User.findOne({email:email})
        }).then((user)=>{
            if(user){
                mongoose.disconnect()
                reject('email is used ')


            }else{

                return bcrypt.hash(password,10)
            }
        }).then((hpassword)=>{
            let user = new User({
                name:name,
                email:email,
                password:hpassword

            })
            return user.save();
        }).then((user)=>{
            mongoose.disconnect()
            
        })
        
    }).catch((err)=>{
        mongoose.disconnect()
        reject(err)
})
}