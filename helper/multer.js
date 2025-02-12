const multer= require("multer");
const storage= multer.diskStorage({
    destination:(req,file,cb)=>{
      cb(null,"./upload")  
    },
    fileName:(req,file,cb)=>{
        cb(null,file.originalName)
    }
})

const fileFilter=(req,file,cb)=>{
    const allowType=['image/jpeg','image/png','image/bmp','image/gif','image/jpg']
    if (allowType.includes(file.mimetype)){
        cb(null,true)
    }else{
        cb(new Error('Only image allowed'))
    }
}
const limit= 1024 * 1024

const upload= multer({
    fileFilter,
    storage,
    limit
})
module.exports=upload