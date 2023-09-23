import { Request } from 'express';
import { IGenericResponse } from '../../../interfaces/common';
import { CoreService } from '../../../shared/axios';

const getAllCourses = async (req: Request): Promise<IGenericResponse> => {
  const response: IGenericResponse = await CoreService.get('/course', {
    params: req.query,
    headers: {
      Authorization: req.headers.authorization
    }
  });
  return response;
};

const getSingleCourse = async (req: Request): Promise<IGenericResponse> => {
  const { id } = req.params;
  const response: IGenericResponse = await CoreService.get(`/course/${id}`, {
    headers: {
      Authorization: req.headers.authorization
    }
  });
  return response;
};

const createCourse = async (req: Request): Promise<IGenericResponse> => {
  const response: IGenericResponse = await CoreService.post(`/course`, req.body, {
    headers: {
      Authorization: req.headers.authorization
    }
  });
  return response;
};

const updateCourse = async (req: Request): Promise<IGenericResponse> => {
  const { id } = req.params;
  const response: IGenericResponse = await CoreService.patch(`/course/${id}`, req.body, {
    headers: {
      Authorization: req.headers.authorization
    }
  });
  return response;
};

const deleteCourse = async (req: Request): Promise<IGenericResponse> => {
  const { id } = req.params;
  const response: IGenericResponse = await CoreService.delete(`/course/${id}`, {
    headers: {
      Authorization: req.headers.authorization
    }
  });
  return response;
};

const assignFaculties = async (req: Request): Promise<IGenericResponse> => {
  const { id } = req.params;
  const response: IGenericResponse = await CoreService.post(
    `/course/${id}/assign-faculties`,
    req.body,
    {
      headers: {
        Authorization: req.headers.authorization
      }
    }
  );
  return response;
};

const removeFaculties = async (req: Request): Promise<IGenericResponse> => {
  const { id } = req.params;
  const response: IGenericResponse = await CoreService.delete(`/course/${id}/remove-faculties`, {
    headers: {
      Authorization: req.headers.authorization
    }
  });
  return response;
};

export const CourseService = {
  getAllCourses,
  getSingleCourse,
  updateCourse,
  deleteCourse,
  createCourse,
  assignFaculties,
  removeFaculties
};
