import { NextFunction, Request, Response } from 'express';
import sendResponse from '../../../shared/response';
import { RoomService } from './room.services';

const getAllRooms = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const result = await RoomService.getAllRooms(req);
    sendResponse(res, result);
  } catch (error) {
    next(error);
  }
};

const getSingleRoom = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const result = await RoomService.getSingleRoom(req);
    sendResponse(res, result);
  } catch (error) {
    next(error);
  }
};
const createRoom = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const result = await RoomService.createRoom(req);
    sendResponse(res, result);
  } catch (error) {
    next(error);
  }
};

const updateRoom = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const result = await RoomService.updateRoom(req);
    sendResponse(res, result);
  } catch (error) {
    next(error);
  }
};

const deleteRoom = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const result = await RoomService.deleteRoom(req);
    sendResponse(res, result);
  } catch (error) {
    next(error);
  }
};

export const RoomController = {
  getAllRooms,
  getSingleRoom,
  updateRoom,
  deleteRoom,
  createRoom
};
