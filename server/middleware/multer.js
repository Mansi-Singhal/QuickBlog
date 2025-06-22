import multer from 'multer';

const upload = multer({storage: multer.diskStorage({})});

export default upload;



//its a middleware to which parse the  image upload from the frontend - for parsing of image we sue multer package.