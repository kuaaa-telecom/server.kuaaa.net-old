import multer from 'multer';

import { Router } from 'express';
import { upLoadImage, getImage } from './images';

const router = Router();
const imageSave = multer({ dest: 'src/res/image' });

router.post('/', <any>imageSave.array('image'), upLoadImage);
router.get('/:id', getImage);

export default router;
