import express from 'express';
import { AcademicSemesterController } from './academicSemester.controller';

const router = express.Router();

router.get('/', AcademicSemesterController.getAllSemester);

router.get('/:id', AcademicSemesterController.getSingleSemester);

router.post('/', AcademicSemesterController.createSemester);

router.patch('/:id', AcademicSemesterController.updateSemester);

export const AcademicSemesterRoutes = router;
