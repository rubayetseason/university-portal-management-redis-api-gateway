import express from 'express';
import { AuthenticationController } from './auth.controller';

const router = express.Router();

router.post('/login', AuthenticationController.loginUser);
// router.post(
//     '/refresh-token',
//     AuthenticationController.refreshToken
// );

// router.post(
//     '/change-password',
//     auth(
//         ENUM_USER_ROLE.SUPER_ADMIN,
//         ENUM_USER_ROLE.ADMIN,
//         ENUM_USER_ROLE.STUDENT,
//         ENUM_USER_ROLE.FACULTY
//     ),
//     AuthenticationController.changePassword
// );

export const AuthRoutes = router;
