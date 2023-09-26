import express from 'express';
import { AdminController } from './admin.controller';
import { ENUM_USER_ROLE } from '../../../enums/user';
import auth from '../../middlewares/auth';
import validateRequest from '../../middlewares/validateRequest';
import { AdminValidation } from './admin.validation';

const router = express.Router();

router.get('/', AdminController.getAllAdmins);
router.get('/:id', AdminController.getSingleAdmin);

router.patch(
  '/:id',
  validateRequest(AdminValidation.updateZodAdmin),
  auth(ENUM_USER_ROLE.SUPER_ADMIN, ENUM_USER_ROLE.ADMIN),
  AdminController.updateAdmin
);

router.delete(
  '/:id',
  auth(ENUM_USER_ROLE.SUPER_ADMIN, ENUM_USER_ROLE.ADMIN),
  AdminController.deleteAdmin
);

export const AdminRoutes = router;
