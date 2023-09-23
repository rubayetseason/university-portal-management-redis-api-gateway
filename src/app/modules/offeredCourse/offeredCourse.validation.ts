import { z } from 'zod';

const createZodOfferedCourse = z.object({
  body: z.object({
    semesterRegistrationId: z.string({
      required_error: 'Semester registration id is required'
    }),
    courseIds: z.array(
      z.string({
        required_error: 'Course id is required'
      }),
      {
        required_error: 'Course ids are required'
      }
    ),
    academicDepartmentId: z.string({
      required_error: 'Academic department id is required'
    })
  })
});

const updateZodOfferedCourse = z.object({
  body: z.object({
    semesterRegistrationId: z.string().optional(),
    courseId: z.string().optional(),
    academicDepartmentId: z.string().optional()
  })
});

export const OfferedCourseValidation = {
  createZodOfferedCourse,
  updateZodOfferedCourse
};
