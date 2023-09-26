import { Request } from 'express';
import { FileUploadHelper } from '../../../helpers/FileUploadHelper';
import { IUploadFile } from '../../../interfaces/file';
import { AuthService } from '../../../shared/axios';
import { IGenericResponse } from '../../../interfaces/common';

const createStudent = async (req: Request) => {
  const file = req.file as IUploadFile;
  const uploadedImage = await FileUploadHelper.uploadToCloudinary(file);
  if (uploadedImage) {
    //set profileImage url to the sent req.body data
    req.body.profileImage = uploadedImage.secure_url;
  }

  const { academicDepartment, academicFaculty, academicSemester } = req.body.student;

  //get academicDepartment data from mongodb
  const academicDepartmentResponse = await AuthService.get(
    `/academic-department?syncId=${academicDepartment}`
  );

  if (academicDepartmentResponse.data && Array.isArray(academicDepartmentResponse.data)) {
    //if data found set mongodb department id to databody department id
    req.body.student.academicDepartment = academicDepartmentResponse.data[0].id;
  }

  //get academicFaculty data from mongodb
  const academicFacultyResponse = await AuthService.get(
    `/academic-faculty?syncId=${academicFaculty}`
  );

  if (academicFacultyResponse.data && Array.isArray(academicFacultyResponse.data)) {
    //if data found set mongodb faculty id to databody faculty id
    req.body.student.academicFaculty = academicFacultyResponse.data[0].id;
  }

  //get academicSemester data from mongodb
  const academicSemesterResponse = await AuthService.get(
    `/academic-semester?syncId=${academicSemester}`
  );

  if (academicSemesterResponse.data && Array.isArray(academicSemesterResponse.data)) {
    //if data found set mongodb semester id to databody semester id
    req.body.student.academicSemester = academicSemesterResponse.data[0].id;
  }

  //send the req data to auth service
  const response: IGenericResponse = await AuthService.post('/user/create-student', req.body, {
    headers: {
      Authorization: req.headers.authorization
    }
  });

  return response;
};

export const UserService = { createStudent };
