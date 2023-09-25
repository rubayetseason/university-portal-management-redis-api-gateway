import { Request, Response, NextFunction } from 'express';
import { UserService } from './user.services';
import sendResponse from '../../../shared/response';

const createStudent = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const result = await UserService.createStudent(req);
    sendResponse(res, result);
  } catch (error) {
    next(error);
  }
};

export const UserController = { createStudent };
