import express from 'express';
import { ENUM_USER_ROLE } from '../../../enums/user';
import validateRequest from '../../middlewares/validateRequest';
import auth from '../../middlewares/auth';

import { StudentEnrolledCourseValidation } from './studentEnrolledCourse.validation';
import { StudentEnrolledCourseController } from './studentEnrolledCourse.controller';

const router = express.Router();

router.get('/', StudentEnrolledCourseController.getAllEnrolledCourse);
router.get('/:id', StudentEnrolledCourseController.getSingleEnrolledCourse);

router.post(
  '/',
  validateRequest(StudentEnrolledCourseValidation.createZodEnrolledCourse),
  auth(ENUM_USER_ROLE.SUPER_ADMIN, ENUM_USER_ROLE.ADMIN),
  StudentEnrolledCourseController.createEnrolledCourse
);

router.patch(
  '/:id',
  validateRequest(StudentEnrolledCourseValidation.updateZodEnrolledCourse),
  auth(ENUM_USER_ROLE.SUPER_ADMIN, ENUM_USER_ROLE.ADMIN),
  StudentEnrolledCourseController.updateEnrolledCourse
);

router.delete(
  '/:id',
  auth(ENUM_USER_ROLE.SUPER_ADMIN, ENUM_USER_ROLE.ADMIN),
  StudentEnrolledCourseController.deleteEnrolledCourse
);

export const StudentEnrolledCourseRoutes = router;
