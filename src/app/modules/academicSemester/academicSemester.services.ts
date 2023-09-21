import { Request } from 'express';
import { CoreService as HttpService } from '../../../shared/axios';
import { IGenericResponse } from '../../../interfaces/common';

const createSemester = async (req: Request): Promise<IGenericResponse> => {
  //academicSemester is more needed in coreService hence use core service here
  const response: IGenericResponse = await HttpService.post('/academic-semester', req.body, {
    headers: {
      Authorization: req.headers.authorization
    }
  });
  return response;
};

const getAllSemester = async (req: Request): Promise<IGenericResponse> => {
  //academicSemester is more needed in coreService hence use core service here
  const response: IGenericResponse = await HttpService.get('/academic-semester', {
    //send params here
    params: req.query,
    headers: {
      Authorization: req.headers.authorization
    }
  });
  return response;
};

const getSingleSemester = async (req: Request): Promise<IGenericResponse> => {
  const { id } = req.params;
  const response: IGenericResponse = await HttpService.get(`/academic-semester/${id}`, {
    headers: {
      Authorization: req.headers.authorization
    }
  });
  return response;
};

export const AcademicSemesterService = {
  createSemester,
  getAllSemester,
  getSingleSemester
};
