import { Request } from 'express';
import { FileUploadHelper } from '../../../helpers/FileUploadHelper';
import { ICloudinaryResponse, IUploadFile } from '../../../interfaces/file';

const createStudent = async (req: Request) => {
  //contains file data
  //console.log(req.file)
  const file = req.file as IUploadFile;
  const uploadedImage: ICloudinaryResponse = await FileUploadHelper.uploadToCloudinary(file);
  if (uploadedImage) {
    req.body.profileImage = uploadedImage.secure_url;
  }
};

export const UserService = { createStudent };
