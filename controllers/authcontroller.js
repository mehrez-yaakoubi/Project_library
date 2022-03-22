
const authModel = require('../modules/auth')

exports.postregister=(req,res,next)=>{

      authModel.registerfunction(req.body.name,req.body.email,req.body.password).then((user)=>{
              console.log('login ')
}).catch((err)=>{
    console.log(err)
})
};
