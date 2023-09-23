import { NextFunction, Request, Response } from 'express';
import sendResponse from '../../../shared/response';
import { CourseService } from './course.services';

const getAllCourses = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const result = await CourseService.getAllCourses(req);
    sendResponse(res, result);
  } catch (error) {
    next(error);
  }
};

const getSingleCourse = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const result = await CourseService.getSingleCourse(req);
    sendResponse(res, result);
  } catch (error) {
    next(error);
  }
};
const createCourse = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const result = await CourseService.createCourse(req);
    sendResponse(res, result);
  } catch (error) {
    next(error);
  }
};

const updateCourse = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const result = await CourseService.updateCourse(req);
    sendResponse(res, result);
  } catch (error) {
    next(error);
  }
};

const deleteCourse = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const result = await CourseService.deleteCourse(req);
    sendResponse(res, result);
  } catch (error) {
    next(error);
  }
};

const assignFaculties = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const result = await CourseService.assignFaculties(req);
    sendResponse(res, result);
  } catch (error) {
    next(error);
  }
};

const removeFaculties = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const result = await CourseService.removeFaculties(req);
    sendResponse(res, result);
  } catch (error) {
    next(error);
  }
};

export const CourseController = {
  getAllCourses,
  getSingleCourse,
  updateCourse,
  deleteCourse,
  createCourse,
  assignFaculties,
  removeFaculties
};
