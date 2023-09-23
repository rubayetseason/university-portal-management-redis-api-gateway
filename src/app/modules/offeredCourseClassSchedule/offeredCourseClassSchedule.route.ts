import express from 'express';
import auth from '../../middlewares/auth';
import { ENUM_USER_ROLE } from '../../../enums/user';
import { OfferedCourseClassScheduleController } from './offeredCourseClassSchedule.controller';
import validateRequest from '../../middlewares/validateRequest';
import { OfferedCourseClassScheduleValidation } from './offeredCourseClassSchedule.validation';

const router = express.Router();

router.get('/', OfferedCourseClassScheduleController.getAllClassSchedules);
router.get('/:id', OfferedCourseClassScheduleController.getSingleClassSchedule);

router.post(
  '/',
  auth(ENUM_USER_ROLE.SUPER_ADMIN, ENUM_USER_ROLE.ADMIN),
  OfferedCourseClassScheduleController.createClassSchedule
);

router.patch(
  '/:id',
  validateRequest(OfferedCourseClassScheduleValidation.updateZodClassSchedule),
  auth(ENUM_USER_ROLE.SUPER_ADMIN, ENUM_USER_ROLE.ADMIN),
  OfferedCourseClassScheduleController.updateClassSchedule
);

router.delete(
  '/:id',
  auth(ENUM_USER_ROLE.SUPER_ADMIN, ENUM_USER_ROLE.ADMIN),
  OfferedCourseClassScheduleController.deleteClassSchedule
);

export const OfferedCourseClassScheduleRoutes = router;
