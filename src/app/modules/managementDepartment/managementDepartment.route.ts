import express from 'express';
import { ManagementDepartmentController } from './managementDepartment.controller';
import validateRequest from '../../middlewares/validateRequest';
import { ManagementDepartmentValidation } from './managementDepartment.validation';
import auth from '../../middlewares/auth';
import { ENUM_USER_ROLE } from '../../../enums/user';

const router = express.Router();

router.get('/', ManagementDepartmentController.getAllManagements);
router.get('/:id', ManagementDepartmentController.getSingleManagement);

router.post(
  '/',
  validateRequest(ManagementDepartmentValidation.createZodManagement),
  auth(ENUM_USER_ROLE.SUPER_ADMIN, ENUM_USER_ROLE.ADMIN),
  ManagementDepartmentController.createManagement
);

router.patch(
  '/:id',
  validateRequest(ManagementDepartmentValidation.updateZodManagement),
  auth(ENUM_USER_ROLE.SUPER_ADMIN, ENUM_USER_ROLE.ADMIN),
  ManagementDepartmentController.updateManagement
);

router.delete(
  '/:id',
  auth(ENUM_USER_ROLE.SUPER_ADMIN, ENUM_USER_ROLE.ADMIN),
  ManagementDepartmentController.deleteManagement
);

export const ManagementDepartmentRoutes = router;
