import { NextFunction, Request, Response } from 'express';
import sendResponse from '../../../shared/response';
import { OfferedCourseSectionService } from './offeredCourseSection.services';

const getAllSections = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const result = await OfferedCourseSectionService.getAllSections(req);
    sendResponse(res, result);
  } catch (error) {
    next(error);
  }
};

const getSingleSection = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const result = await OfferedCourseSectionService.getSingleSection(req);
    sendResponse(res, result);
  } catch (error) {
    next(error);
  }
};
const createSection = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const result = await OfferedCourseSectionService.createSection(req);
    sendResponse(res, result);
  } catch (error) {
    next(error);
  }
};

const updateSection = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const result = await OfferedCourseSectionService.updateSection(req);
    sendResponse(res, result);
  } catch (error) {
    next(error);
  }
};

const deleteSection = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const result = await OfferedCourseSectionService.deleteSection(req);
    sendResponse(res, result);
  } catch (error) {
    next(error);
  }
};

export const OfferedCourseSectionController = {
  getAllSections,
  getSingleSection,
  updateSection,
  deleteSection,
  createSection
};
