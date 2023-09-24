import { Request } from 'express';
import { IGenericResponse } from '../../../interfaces/common';
import { AuthService } from '../../../shared/axios';

const createManagement = async (req: Request): Promise<IGenericResponse> => {
  const response: IGenericResponse = await AuthService.post(
    `/management-department/create-department`,
    req.body,
    {
      headers: {
        Authorization: req.headers.authorization
      }
    }
  );
  return response;
};

const getAllManagements = async (req: Request): Promise<IGenericResponse> => {
  const response: IGenericResponse = await AuthService.get('/management-department', {
    params: req.query,
    headers: {
      Authorization: req.headers.authorization
    }
  });
  return response;
};

const getSingleManagement = async (req: Request): Promise<IGenericResponse> => {
  const { id } = req.params;
  const response: IGenericResponse = await AuthService.get(`/management-department/${id}`, {
    headers: {
      Authorization: req.headers.authorization
    }
  });
  return response;
};

const updateManagement = async (req: Request): Promise<IGenericResponse> => {
  const { id } = req.params;
  const response: IGenericResponse = await AuthService.patch(
    `/management-department/${id}`,
    req.body,
    {
      headers: {
        Authorization: req.headers.authorization
      }
    }
  );
  return response;
};

const deleteManagement = async (req: Request): Promise<IGenericResponse> => {
  const { id } = req.params;
  const response: IGenericResponse = await AuthService.delete(`/management-department/${id}`, {
    headers: {
      Authorization: req.headers.authorization
    }
  });
  return response;
};

export const ManagementDepartmentService = {
  createManagement,
  getAllManagements,
  getSingleManagement,
  updateManagement,
  deleteManagement
};
