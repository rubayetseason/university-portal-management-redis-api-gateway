import express from 'express';
import { StudentController } from './student.controller';
import { ENUM_USER_ROLE } from '../../../enums/user';
import auth from '../../middlewares/auth';
import validateRequest from '../../middlewares/validateRequest';
import { StudentValidation } from './student.validation';

const router = express.Router();

router.get('/', StudentController.getAllStudents);

router.get('/profile/:id', StudentController.getStudentProfile);

router.get('/my-courses', auth(ENUM_USER_ROLE.STUDENT), StudentController.getMyCourses);

router.get(
  '/my-academic-info',
  auth(ENUM_USER_ROLE.STUDENT),
  StudentController.getMyAcademicInfos
);

router.get(
  '/my-course-schedule',
  auth(ENUM_USER_ROLE.STUDENT),
  StudentController.getMyCourseSchedules
);

router.get('/:id', StudentController.getSingleStudent);

router.patch(
  '/:id',
  validateRequest(StudentValidation.updateZodStudent),
  auth(ENUM_USER_ROLE.SUPER_ADMIN, ENUM_USER_ROLE.ADMIN),
  StudentController.updateStudent
);

router.delete(
  '/:id',
  auth(ENUM_USER_ROLE.SUPER_ADMIN, ENUM_USER_ROLE.ADMIN),
  StudentController.deleteStudent
);

export const StudentRoutes = router;
