import { Request } from 'express';
import { CoreService as HttpService } from '../../../shared/axios';

const createSemester = async (req: Request) => {
  //academicSemester is more needed in coreService hence use core service here
  const response = await HttpService.post('/academic-semester', req.body, {
    headers: {
      Authorization: req.headers.authorization
    }
  });
  return response;
};

export const AcademicSemesterService = {
  createSemester
};
