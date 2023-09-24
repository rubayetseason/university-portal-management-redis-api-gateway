import { NextFunction, Request, Response } from 'express';
import sendResponse from '../../../shared/response';
import { ManagementDepartmentService } from './managementDepartment.services';

const getAllManagements = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const result = await ManagementDepartmentService.getAllManagements(req);
    sendResponse(res, result);
  } catch (error) {
    next(error);
  }
};

const createManagement = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const result = await ManagementDepartmentService.createManagement(req);
    sendResponse(res, result);
  } catch (error) {
    next(error);
  }
};

const getSingleManagement = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const result = await ManagementDepartmentService.getSingleManagement(req);
    sendResponse(res, result);
  } catch (error) {
    next(error);
  }
};

const updateManagement = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const result = await ManagementDepartmentService.updateManagement(req);
    sendResponse(res, result);
  } catch (error) {
    next(error);
  }
};

const deleteManagement = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const result = await ManagementDepartmentService.deleteManagement(req);
    sendResponse(res, result);
  } catch (error) {
    next(error);
  }
};

export const ManagementDepartmentController = {
  createManagement,
  getAllManagements,
  getSingleManagement,
  updateManagement,
  deleteManagement
};
