import multer from 'multer';

import { Router } from 'express';
import { uploadImage, getImage } from './images';

const router = Router();
const imageSave = multer({ dest: 'src/res/image' });

router.post('/', <any>imageSave.array('image'), uploadImage);
router.get('/:id', getImage);

export default router;
