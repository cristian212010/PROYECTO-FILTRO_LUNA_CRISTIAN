import { response } from 'express';
import { fileURLToPath } from 'url';
import path from 'path';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const uploadFile = async(req, res = response) => {

    if (!req.files || Object.keys(req.files).length === 0 ||!req.files.file) {
        return res.status(400).send('No files were uploaded.');
      }
    
    const {file} = req.files;
    const uploadPath = path.join (__dirname, '../../../frontend/src/assets/img/', file.name);

    file.mv(uploadPath, (err) =>{
      if (err){
        return res.status(500).send(err);
      }
              
      res.json({ msg:'File uploaded!' + uploadPath});
      });

}


export default uploadFile;