import { NextFunction, Request, Response } from 'express';
import { AcademicSemesterService } from './academicSemester.services';
import sendResponse from '../../../shared/response';

const createSemester = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const result = await AcademicSemesterService.createSemester(req);
    sendResponse(res, result);
  } catch (err) {
    next(err);
  }
};

const getAllSemester = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const result = await AcademicSemesterService.getAllSemester(req);
    sendResponse(res, result);
  } catch (err) {
    next(err);
  }
};

const getSingleSemester = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const result = await AcademicSemesterService.getSingleSemester(req);
    sendResponse(res, result);
  } catch (error) {
    next(error);
  }
};

export const AcademicSemesterController = { createSemester, getAllSemester, getSingleSemester };
