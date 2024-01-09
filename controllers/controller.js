const userModel = require('../models/studentModel')


exports.signUp = async(req, res) =>{
try{
        const{name, department} = req.body
        const file = req.files
        const userProfile = await userModel.create({
             name,
             department,
             photos
        })
        if(!userProfile){
            res.status(404).json({
                message:`Opps!! Unable to sign up, try again and make sure you enter the correct details`
            })
        }
            return res.status(200).json({
               message:`Congratulations!!! You have successfully signed in as ${name}`,
               userProfile
            })
        
        
        }catch(err){
            res.status(500).json({
                message: err.message
            })
        }
}























































































































































// exports.signUp = async(req, res)=>{
//     try{
//     const  {fullname, stack, profileImage} = req.body
//     const file = req.file.filename
//     const profile = await userModel.create({
//         fullname,
//         stack,
//         profileImage:file
//     })
//         if (!profile) {
//             res.status(404).json({
//                message: 'cannot sign up' 
//             })
//         } else {
//             res.status(200).json({
//                 messgae: 'signed up successfully',
//                 profile
//             })
//         }
    
//     }catch(err){
// res.status(500).json({
//     error: err.message
// })
//     }
// }


// exports.getOne = async(req,res)=>{
//     try{
//         const id = req.params.id
//         const profile = await userModel.findById(id)

//         if(!profile){
//             res.status(404).json({
//                 message:'cannot get User'
//             })
//         }else{
//             res.status(200).json({
//                 messsage:"user found successfully",
//                 data:profile
//             })
//         }

//     }catch(err){
//         res.status(500).json(err.message)
//     }
// }



// exports.getAll = async(req,res)=>{
//     try{

//         const profile = await userModel.find()
//         const allUser = profile.length

//         if(profile.length ===0){
//             res.status(200).json({
//                 message:'cannot get all User'
//             })
//         }else{
//             res.status(200).json({
//                 messsage:`${allUser} users found successfully`,
//                 data:profile,
//                 allUser
            
//             })
//         }

//     }catch(err){
//         res.status(500).json(err.message)
//     }
// }

// exports.updateUser = async(req,res)=>{
//     try{
//     //  get the id parameter from the request  url
//         const id = req.params.id
//     //  get the fullname and stack from the request body
//         const{fullname, stack}=req.body
//     // create a variable to hold the database based on the existing id
//         const profile = await userModel.findById(id)
//     // check for failures
//         if(!profile){
//             res.status(404).json({
//                 status: "failed",
//                 message: "user not found"
//             })
//         }

//         const data = {
//      fullname: fullname || profile.fullname,
//      stack:stack ||profile.stack,
//      profileImage : profile.profileImage
//         }

//         const oldpath = `./uploads/${profile.profileImage}`
//         if(req.file){
//             if(fs.existsSync(oldpath)){
//                 fs.unlinkSync(oldpath)
//             }
//             data.profileImage = req.file.filename
        
//         }

//         const newprofile = await userModel.findByIdAndUpdate(id, data, {new:true});
//         if(newprofile){
//             return res.status(200).json({
//                 status: 'success',
//                 message:'profile updated successfully',
//                 data:newprofile
//             })
//         }
//         else{
//             res.status(400).json({
//                 message: 'cannot update user'
//             })
//         }
        
//     }catch(err){
// res.status(500).json(err.message)
//     }
// }

// exports.delete= async(req,res)=>{
// try{
    

// }catch(err){
//     res.status(500).json(err.message)
// }
// }


// exports.deleteUser = async(req,res)=>{
//     try{
     
//         const id = req.params.id

//         const profile = await userModel.findById(id)
//         if(!profile){
//             res.status(404).json({
//                 status: "failed",
//                 message: "user not found"
//             })
//         }


//         const oldpath = `./uploads/${profile.profileImage}`

//             if(fs.existsSync(oldpath)){
//                 fs.unlinkSync(oldpath)
//             }
        
        
        

//         const newprofile = await userModel.findByIdAndDelete(id);
//         if(newprofile){
//             return res.status(200).json({
//                 status: 'success',
//                 message:'user profile deleted successfully',
//                 data:newprofile
//             })
//         }
//         else{
//             res.status(400).json({
//                 message: 'cannot delete user'
//             })
//         }
        
//     }catch(err){
// res.status(500).json(err.message)
//     }
// }

