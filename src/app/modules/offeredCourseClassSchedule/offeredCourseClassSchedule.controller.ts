import { NextFunction, Request, Response } from 'express';
import sendResponse from '../../../shared/response';
import { OfferedCourseClassScheduleService } from './offeredCourseClassSchedule.services';

const getAllClassSchedules = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const result = await OfferedCourseClassScheduleService.getAllClassSchedules(req);
    sendResponse(res, result);
  } catch (error) {
    next(error);
  }
};

const getSingleClassSchedule = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const result = await OfferedCourseClassScheduleService.getSingleClassSchedule(req);
    sendResponse(res, result);
  } catch (error) {
    next(error);
  }
};
const createClassSchedule = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const result = await OfferedCourseClassScheduleService.createClassSchedule(req);
    sendResponse(res, result);
  } catch (error) {
    next(error);
  }
};

const updateClassSchedule = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const result = await OfferedCourseClassScheduleService.updateClassSchedule(req);
    sendResponse(res, result);
  } catch (error) {
    next(error);
  }
};

const deleteClassSchedule = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const result = await OfferedCourseClassScheduleService.deleteClassSchedule(req);
    sendResponse(res, result);
  } catch (error) {
    next(error);
  }
};

export const OfferedCourseClassScheduleController = {
  getAllClassSchedules,
  getSingleClassSchedule,
  updateClassSchedule,
  deleteClassSchedule,
  createClassSchedule
};
