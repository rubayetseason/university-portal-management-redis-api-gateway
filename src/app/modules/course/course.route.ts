import express from 'express';
import { CourseController } from './course.controller';
import validateRequest from '../../middlewares/validateRequest';
import auth from '../../middlewares/auth';
import { ENUM_USER_ROLE } from '../../../enums/user';
import { CourseValidation } from './course.validation';

const router = express.Router();

router.get('/', CourseController.getAllCourses);
router.get('/:id', CourseController.getSingleCourse);

router.post(
  '/',
  validateRequest(CourseValidation.createZodCourse),
  auth(ENUM_USER_ROLE.SUPER_ADMIN, ENUM_USER_ROLE.ADMIN),
  CourseController.createCourse
);

router.patch(
  '/:id',
  validateRequest(CourseValidation.updateZodCourse),
  auth(ENUM_USER_ROLE.SUPER_ADMIN, ENUM_USER_ROLE.ADMIN),
  CourseController.updateCourse
);

router.delete(
  '/:id',
  auth(ENUM_USER_ROLE.SUPER_ADMIN, ENUM_USER_ROLE.ADMIN),
  CourseController.deleteCourse
);

router.post(
    '/:id/assign-faculties',
    validateRequest(CourseValidation.assignOrRemoveZodFaculties),
    auth(ENUM_USER_ROLE.SUPER_ADMIN, ENUM_USER_ROLE.ADMIN),
    CourseController.assignFaculties
  );
  
  router.delete(
    '/:id/remove-faculties',
    validateRequest(CourseValidation.assignOrRemoveZodFaculties),
    auth(ENUM_USER_ROLE.SUPER_ADMIN, ENUM_USER_ROLE.ADMIN),
    CourseController.removeFaculties
  );


export const courseRoutes = router;
