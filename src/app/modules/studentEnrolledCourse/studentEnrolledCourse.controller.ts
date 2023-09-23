import { NextFunction, Request, Response } from 'express';
import sendResponse from '../../../shared/response';
import { StudentEnrolledCourseService } from './studentEnrolledCourse.services';

const getAllEnrolledCourse = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const result = await StudentEnrolledCourseService.getAllEnrolledCourse(req);
    sendResponse(res, result);
  } catch (error) {
    next(error);
  }
};

const getSingleEnrolledCourse = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const result = await StudentEnrolledCourseService.getSingleEnrolledCourse(req);
    sendResponse(res, result);
  } catch (error) {
    next(error);
  }
};
const createEnrolledCourse = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const result = await StudentEnrolledCourseService.createEnrolledCourse(req);
    sendResponse(res, result);
  } catch (error) {
    next(error);
  }
};

const updateEnrolledCourse = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const result = await StudentEnrolledCourseService.updateEnrolledCourse(req);
    sendResponse(res, result);
  } catch (error) {
    next(error);
  }
};

const deleteEnrolledCourse = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const result = await StudentEnrolledCourseService.deleteEnrolledCourse(req);
    sendResponse(res, result);
  } catch (error) {
    next(error);
  }
};

export const StudentEnrolledCourseController = {
  createEnrolledCourse,
  getAllEnrolledCourse,
  getSingleEnrolledCourse,
  updateEnrolledCourse,
  deleteEnrolledCourse
};
