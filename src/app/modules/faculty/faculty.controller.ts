import { NextFunction, Request, Response } from 'express';
import sendResponse from '../../../shared/response';
import { FacultyService } from './faculty.services';

const getAllFaculties = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const result = await FacultyService.getAllFaculties(req);
    sendResponse(res, result);
  } catch (error) {
    next(error);
  }
};

const getMyCourses = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const result = await FacultyService.getMyCourses(req);
    sendResponse(res, result);
  } catch (error) {
    next(error);
  }
};

const getMyCourseStudents = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const result = await FacultyService.getMyCourseStudents(req);
    sendResponse(res, result);
  } catch (error) {
    next(error);
  }
};

const getSingleFaculty = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const result = await FacultyService.getSingleFaculty(req);
    sendResponse(res, result);
  } catch (error) {
    next(error);
  }
};

const getFacultyProfile = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const result = await FacultyService.getFacultyProfile(req);
    sendResponse(res, result);
  } catch (error) {
    next(error);
  }
};

const updateFaculty = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const result = await FacultyService.updateFaculty(req);
    sendResponse(res, result);
  } catch (error) {
    next(error);
  }
};

const deleteFaculty = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const result = await FacultyService.deleteFaculty(req);
    sendResponse(res, result);
  } catch (error) {
    next(error);
  }
};

export const FacultyController = {
  updateFaculty,
  getAllFaculties,
  getSingleFaculty,
  getMyCourses,
  getFacultyProfile,
  getMyCourseStudents,
  deleteFaculty
};
