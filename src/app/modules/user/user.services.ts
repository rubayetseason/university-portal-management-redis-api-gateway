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

const createFaculty = async (req: Request): Promise<IGenericResponse> => {
  const file = req.file as IUploadFile;

  const uploadedProfileImage = await FileUploadHelper.uploadToCloudinary(file);

  if (uploadedProfileImage) {
    req.body.faculty.profileImage = uploadedProfileImage.secure_url;
  }

  const { academicDepartment, academicFaculty } = req.body.faculty;

  const academicDepartmentResponse: IGenericResponse = await AuthService.get(
    `/academic-department?syncId=${academicDepartment}`
  );

  if (academicDepartmentResponse.data && Array.isArray(academicDepartmentResponse.data)) {
    req.body.faculty.academicDepartment = academicDepartmentResponse.data[0].id;
  }

  const academicFacultyResponse: IGenericResponse = await AuthService.get(
    `/academic-faculty?syncId=${academicFaculty}`
  );

  if (academicFacultyResponse.data && Array.isArray(academicFacultyResponse.data)) {
    req.body.faculty.academicFaculty = academicFacultyResponse.data[0].id;
  }

  const response: IGenericResponse = await AuthService.post('/user/create-faculty', req.body, {
    headers: {
      Authorization: req.headers.authorization
    }
  });
  return response;
};

const createAdmin = async (req: Request): Promise<IGenericResponse> => {
  const file = req.file as IUploadFile;

  const uploadedProfileImage = await FileUploadHelper.uploadToCloudinary(file);

  if (uploadedProfileImage) {
    req.body.admin.profileImage = uploadedProfileImage.secure_url;
  }

  const response: IGenericResponse = await AuthService.post('/user/create-admin', req.body, {
    headers: {
      Authorization: req.headers.authorization
    }
  });
  return response;
};

export const UserService = { createStudent, createFaculty, createAdmin };
