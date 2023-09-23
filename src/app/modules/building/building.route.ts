import express from 'express';
import validateRequest from '../../middlewares/validateRequest';
import { BuildingValidation } from './building.validation';
import auth from '../../middlewares/auth';
import { ENUM_USER_ROLE } from '../../../enums/user';
import { BuildingController } from './building.controller';

const router = express.Router();

router.get('/', BuildingController.getAllBuildings);
router.get('/:id', BuildingController.getSingleBuilding);

router.post(
  '/',
  validateRequest(BuildingValidation.createZodBuilding),
  auth(ENUM_USER_ROLE.SUPER_ADMIN, ENUM_USER_ROLE.ADMIN),
  BuildingController.createBuilding
);

router.patch(
  '/:id',
  validateRequest(BuildingValidation.updateZodBuilding),
  auth(ENUM_USER_ROLE.SUPER_ADMIN, ENUM_USER_ROLE.ADMIN),
  BuildingController.updateBuilding
);

router.delete(
  '/:id',
  auth(ENUM_USER_ROLE.SUPER_ADMIN, ENUM_USER_ROLE.ADMIN),
  BuildingController.deleteBuilding
);

export const BuildingRoutes = router;
