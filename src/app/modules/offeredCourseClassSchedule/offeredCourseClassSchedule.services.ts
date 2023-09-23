import { Request } from 'express';
import { IGenericResponse } from '../../../interfaces/common';
import { CoreService } from '../../../shared/axios';

const getAllClassSchedules = async (req: Request): Promise<IGenericResponse> => {
  const response: IGenericResponse = await CoreService.get('/offered-course-class-schedule', {
    params: req.query,
    headers: {
      Authorization: req.headers.authorization
    }
  });
  return response;
};

const getSingleClassSchedule = async (req: Request): Promise<IGenericResponse> => {
  const { id } = req.params;
  const response: IGenericResponse = await CoreService.get(`/offered-course-class-schedule/${id}`, {
    headers: {
      Authorization: req.headers.authorization
    }
  });
  return response;
};

const createClassSchedule = async (req: Request): Promise<IGenericResponse> => {
  const response: IGenericResponse = await CoreService.post(
    `/offered-course-class-schedule`,
    req.body,
    {
      headers: {
        Authorization: req.headers.authorization
      }
    }
  );
  return response;
};

const updateClassSchedule = async (req: Request): Promise<IGenericResponse> => {
  const { id } = req.params;
  const response: IGenericResponse = await CoreService.patch(
    `/offered-course-class-schedule/${id}`,
    req.body,
    {
      headers: {
        Authorization: req.headers.authorization
      }
    }
  );
  return response;
};

const deleteClassSchedule = async (req: Request): Promise<IGenericResponse> => {
  const { id } = req.params;
  const response: IGenericResponse = await CoreService.delete(
    `/offered-course-class-schedule/${id}`,
    {
      headers: {
        Authorization: req.headers.authorization
      }
    }
  );
  return response;
};

export const OfferedCourseClassScheduleService = {
  getAllClassSchedules,
  getSingleClassSchedule,
  updateClassSchedule,
  deleteClassSchedule,
  createClassSchedule
};
