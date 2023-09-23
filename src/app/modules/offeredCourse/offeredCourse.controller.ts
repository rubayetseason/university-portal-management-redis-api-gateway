import { NextFunction, Request, Response } from 'express';
import sendResponse from '../../../shared/response';
import { OfferedCourseService } from './offeredCourse.services';

const getAllOfferedCourses = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const result = await OfferedCourseService.getAllOfferedCourses(req);
    sendResponse(res, result);
  } catch (error) {
    next(error);
  }
};

const getSingleOfferedCourse = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const result = await OfferedCourseService.getSingleOfferedCourse(req);
    sendResponse(res, result);
  } catch (error) {
    next(error);
  }
};
const createOfferedCourse = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const result = await OfferedCourseService.createOfferedCourse(req);
    sendResponse(res, result);
  } catch (error) {
    next(error);
  }
};

const updateOfferedCourse = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const result = await OfferedCourseService.updateOfferedCourse(req);
    sendResponse(res, result);
  } catch (error) {
    next(error);
  }
};

const deleteOfferedCourse = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const result = await OfferedCourseService.deleteOfferedCourse(req);
    sendResponse(res, result);
  } catch (error) {
    next(error);
  }
};

export const OfferedCourseController = {
  getAllOfferedCourses,
  getSingleOfferedCourse,
  updateOfferedCourse,
  deleteOfferedCourse,
  createOfferedCourse
};
