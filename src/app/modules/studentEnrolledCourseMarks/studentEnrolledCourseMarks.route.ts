import express from 'express';
import { StudentEnrolledCourseMarkValidation } from './studentEnrolledCourseMarks.validation';
import auth from '../../middlewares/auth';
import { ENUM_USER_ROLE } from '../../../enums/user';
import validateRequest from '../../middlewares/validateRequest';
import { StudentEnrolledCourseMarkController } from './studentEnrolledCourseMarks.controller';

const router = express.Router();

router.get('/', StudentEnrolledCourseMarkController.getAllMarks);
router.get('/my-marks', StudentEnrolledCourseMarkController.getStudentMarks);

router.post(
  '/update-student-marks',
  validateRequest(StudentEnrolledCourseMarkValidation.updateZodStudentMarks),
  auth(ENUM_USER_ROLE.FACULTY),
  StudentEnrolledCourseMarkController.updateMarks
);

router.post(
  '/update-final-total-marks',
  validateRequest(StudentEnrolledCourseMarkValidation.updateZodStudentCourseFinalMarks),
  auth(ENUM_USER_ROLE.FACULTY),
  StudentEnrolledCourseMarkController.updateCourseFinalMarks
);

export const StudentEnrolledCourseMarksRoutes = router;
