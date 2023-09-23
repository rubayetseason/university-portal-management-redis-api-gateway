import { z } from 'zod';

const createZodEnrolledCourse = z.object({
  body: z.object({
    academicSemesterId: z.string({
      required_error: 'Academic semester id is required'
    }),
    studentId: z.string({
      required_error: 'Student id is required'
    }),
    courseId: z.string({
      required_error: 'Course id is required'
    })
  })
});

const updateZodEnrolledCourse = z.object({
  body: z.object({
    academicSemesterId: z.string().optional(),
    studentId: z.string().optional(),
    courseId: z.string().optional(),
    status: z.string().optional(),
    grade: z.string().optional(),
    point: z.number().optional(),
    marks: z.number().optional()
  })
});

export const StudentEnrolledCourseValidation = {
  createZodEnrolledCourse,
  updateZodEnrolledCourse
};
