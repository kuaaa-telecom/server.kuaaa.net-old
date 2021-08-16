import path from 'path';

import { CustomError } from '../../lib/error';
import { RequestHandler } from 'express';
import Image from '../../lib/model/image';
import { getRepository } from 'typeorm';

const uploadImage: RequestHandler = async (req, res, next) => {
  try {
    if (req.files !== undefined) {
      const size = req.files.length;
      let imageInfo: any[] = [];
      console.log(req.files);
      for (let i = 0; i < size; ++i)
        imageInfo[i] = await saveImage(req.files[i]);
      console.log(imageInfo);
      res.status(200).json({
        msg: 'Image Saved Successfully',
        imageInfo: imageInfo,
      });
    } else
      throw new CustomError(
        'BAD_REQUEST',
        400,
        'Image does not exist in request'
      );
  } catch (err) {
    next(err);
  }

  return next();
};

const saveImage = async (file) => {
  const { mimetype, size, path } = file;
  const id = file.filename;

  const image: Image = await getRepository(Image).create({
    id: id,
    mimetype: mimetype,
    path: path,
    size: size,
  });
  getRepository(Image).save(image);

  return { id: id, mimetype: mimetype, size: size };
};

const getImage: RequestHandler = async (req, res, next) => {
  try {
    const { id } = req.params;
    const row = await getRepository(Image).findOne({ where: { id: id } });

    if (row !== undefined) {
      const dirname = path.resolve();
      const fullPath = path.join(dirname, row.path);
      return res.status(200).type(row.mimetype).sendFile(fullPath);
    } else
      throw new CustomError(
        'IMAGE_NOT_FOUND',
        404,
        'Image id does not exist in DB'
      );
  } catch (err) {
    next(err);
  }

  return next();
};

export { uploadImage, getImage };
