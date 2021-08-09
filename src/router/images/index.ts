import multer from 'multer';

import { Router } from 'express';
import { test, addImage, getImage } from './images';

const router = Router();

const imageSave = multer({ dest: 'src/res/image' });

router.get('/', test);
router.post('/', <any>imageSave.single('image'), addImage);
router.get('/:id', getImage);

export default router;
