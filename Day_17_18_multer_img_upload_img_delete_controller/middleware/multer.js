const multer = require('multer');

const storage = multer.diskStorage({
    destination : (req , file , next) =>{
        next(null, './uploads')
    },
    filename : (req , file , next) =>{
        const uni = Date.now() + "-" + file.originalname;
        next(null , uni)
    }
})
const upload = multer({ storage })
module.exports = upload;