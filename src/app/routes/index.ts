import express from 'express';
import { AcademicSemesterRoutes } from '../modules/academicSemester/academicSemester.route';
import { AcademicDepartmentRoutes } from '../modules/academicDepartment/academicDepartment.route';
import { AcademicFacultyRoutes } from '../modules/academicFaculty/academicFaculty.route';
import { BuildingRoutes } from '../modules/building/building.route';
import { RoomRoutes } from '../modules/room/room.route';
import { courseRoutes } from '../modules/course/course.route';
import { OfferedCourseRoutes } from '../modules/offeredCourse/offeredCourse.route';
import { OfferedCourseClassScheduleRoutes } from '../modules/offeredCourseClassSchedule/offeredCourseClassSchedule.route';
import { OfferedCourseSectionRoutes } from '../modules/offeredCourseSection/offeredCourseSection.route';
import { SemesterRegistrationRoutes } from '../modules/semesterRegistration/semesterRegistration.route';
import { StudentEnrolledCourseRoutes } from '../modules/studentEnrolledCourse/studentEnrolledCourse.route';
import { StudentEnrolledCourseMarksRoutes } from '../modules/studentEnrolledCourseMarks/studentEnrolledCourseMarks.route';
import { StudentSemesterPaymentRoutes } from '../modules/studentSemesterPayment/studentSemesterPayment.route';
import { ManagementDepartmentRoutes } from '../modules/managementDepartment/managementDepartment.route';

const router = express.Router();

const moduleRoutes = [
  {
    path: '/academic-semester',
    routes: AcademicSemesterRoutes
  },
  {
    path: '/academic-department',
    routes: AcademicDepartmentRoutes
  },
  {
    path: '/academic-faculty',
    routes: AcademicFacultyRoutes
  },
  {
    path: '/building',
    routes: BuildingRoutes
  },
  {
    path: '/room',
    routes: RoomRoutes
  },
  {
    path: '/course',
    routes: courseRoutes
  },
  {
    path: '/offered-course',
    routes: OfferedCourseRoutes
  },
  {
    path: '/offered-course-class-schedule',
    routes: OfferedCourseClassScheduleRoutes
  },
  {
    path: '/offered-course-section',
    routes: OfferedCourseSectionRoutes
  },
  {
    path: '/semester-registration',
    routes: SemesterRegistrationRoutes
  },
  {
    path: '/student-enrolled-course',
    routes: StudentEnrolledCourseRoutes
  },
  {
    path: '/student-enrolled-course-marks',
    routes: StudentEnrolledCourseMarksRoutes
  },
  {
    path: '/student-semester-payment',
    routes: StudentSemesterPaymentRoutes
  },
  {
    path: '/management-department',
    routes: ManagementDepartmentRoutes
  }
];

moduleRoutes.forEach((route) => {
  router.use(route.path, route.routes);
});

export default router;
