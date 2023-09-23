import express from 'express';
import { StudentSemesterPaymentController } from './studentSemesterPayment.controller';

const router = express.Router();

router.get('/', StudentSemesterPaymentController.getMyPayment);

export const StudentSemesterPaymentRoutes = router;