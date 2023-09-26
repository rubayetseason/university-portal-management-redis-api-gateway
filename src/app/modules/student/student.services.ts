import { Request } from 'express';
import { IGenericResponse } from '../../../interfaces/common';
import { CoreService as HttpService, AuthService } from '../../../shared/axios';

const getAllStudents = async (req: Request): Promise<IGenericResponse> => {
  const response: IGenericResponse = await HttpService.get('/student', {
    params: req.query,
    headers: {
      Authorization: req.headers.authorization
    }
  });
  return response;
};

const getMyCourses = async (req: Request): Promise<IGenericResponse> => {
  const response: IGenericResponse = await HttpService.get('/student/my-courses', {
    params: req.query,
    headers: {
      Authorization: req.headers.authorization
    }
  });
  return response;
};

const getMyAcademicInfos = async (req: Request): Promise<IGenericResponse> => {
  const response: IGenericResponse = await HttpService.get('/student/my-academic-info', {
    params: req.query,
    headers: {
      Authorization: req.headers.authorization
    }
  });
  return response;
};

const getMyCourseSchedules = async (req: Request): Promise<IGenericResponse> => {
  const response: IGenericResponse = await HttpService.get('/student/my-course-schedule', {
    params: req.query,
    headers: {
      Authorization: req.headers.authorization
    }
  });
  return response;
};

const getSingleStudent = async (req: Request): Promise<IGenericResponse> => {
  const { id } = req.params;
  const response: IGenericResponse = await HttpService.get(`/student/${id}`, {
    headers: {
      Authorization: req.headers.authorization
    }
  });
  return response;
};

const getStudentProfile = async (req: Request): Promise<IGenericResponse> => {
  const { id } = req.params;
  const response: IGenericResponse = await AuthService.get(`/student/${id}`, {
    headers: {
      Authorization: req.headers.authorization
    }
  });
  return response;
};

const updateStudent = async (req: Request): Promise<IGenericResponse> => {
  const { id } = req.params;
  console.log(id);
  const response: IGenericResponse = await AuthService.patch(`/student/${id}`, req.body, {
    headers: {
      Authorization: req.headers.authorization
    }
  });
  return response;
};

const deleteStudent = async (req: Request): Promise<IGenericResponse> => {
  const { id } = req.params;
  const response: IGenericResponse = await HttpService.delete(`/student/${id}`, {
    headers: {
      Authorization: req.headers.authorization
    }
  });
  return response;
};

export const StudentService = {
  getAllStudents,
  getSingleStudent,
  updateStudent,
  deleteStudent,
  getMyCourses,
  getMyCourseSchedules,
  getMyAcademicInfos,
  getStudentProfile
};