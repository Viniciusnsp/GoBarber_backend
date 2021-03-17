import multer from 'multer';
import crypto from 'crypto';
import { extname, resolve } from 'path';

export default {
  //Salva os arquivos em um local da aplicação
  storage: multer.diskStorage({
    //Destino de onde devem ir os arquivos
    destination: resolve(__dirname, '..', '..', 'tmp', 'uploads'),
    //Formatando o nome do arquivo que vem a imagem
    filename: (req, file, cb) => {
      crypto.randomBytes(16, (err, res) => {
        if(err) return cb(err);

        return cb(null, res.toString('hex') + extname(file.originalname))
      })
    },
  }),
}
