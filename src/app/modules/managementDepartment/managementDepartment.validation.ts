import { z } from 'zod';

const createZodManagement = z.object({
  body: z.object({
    title: z.string({
      required_error: 'Title is required'
    })
  })
});

const updateZodManagement = z.object({
  body: z.object({
    title: z.string({
      required_error: 'Title is required'
    })
  })
});

export const ManagementDepartmentValidation = {
  createZodManagement,
  updateZodManagement
};
