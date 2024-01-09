const multer = require('multer')

const storage = multer.diskStorage({
    destination: (req, file, cb)=>{
        cb(null, './uploads')
    },
    filename :(req, file, cb)=>{
        cb(null, file.originalname)
    }
});

const fileFilter = (req, file, cb)=>{
    if(file.mimetype.startsWith('image/')){
        cb(null, true)
    }
    else{
     cb(new Error('File not supported, Image Only'), false)
    }
}

const maxFile = 5;
const fileSize ={
    limit: 1024 * 1024 *10
}

const uploader = multer({
    storage, 
    fileFilter,
    limits: {...fileSize, files:maxFile}
})
module.exports = uploader






































































































































// const multer = require('multer')

// const storage = multer.diskStorage({
//     destination: (req, file, cb)=>{
//         cb(null, './uploads');
//     },

//     filename:(req,file,cb)=>{
//         cb(null, file.originalname);
//     }
// });

// const fileFilter = (req, file, cb)=>{
//     if(file.mimetype.startsWith('image/')){
//         cb(null, true);
//     }
//     else{
//         cb(new Error('file type not supported, image only'), false)
//     }
// }

// const fileSize ={
//     limits:1024 * 1024 * 10
// }

// const upload = multer({
//     storage,
//     fileFilter,
//     limits: fileSize
// })


// module.exports = upload



// import the multer library
/*const multer = require('multer')

// configure the storage settings for upload files
const storage = multer.diskStorage({
    destination : (req, file, cb)=>{
        cb(null, './uploads')
    },
    filename : (req,file,cb)=>{
        cb(null, file.originalname)
    }
 
})

// define a file filter that will filter the type of file allowed for uploads
const fileFilter = (req, file, cb)=>{
    if(file.mimetype.startsWith('image/')){
        cb(null, true)
    }
    else{
        cb(new Error('File type not supported, image only'), false)
    }
}

// set a limit for the size of file to be uploaded
const fileSize = {
    limits : 1024 * 1024 * 10
}

// configure the uploads with the previously defined storage,filefilter and filesize
const uploads = multer({
   storage,
   fileFilter,
   limits: fileSize
})

// export the upload module
module.exports= uploads*/