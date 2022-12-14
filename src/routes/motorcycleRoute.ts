import { Router } from 'express';
import MotorcycleController from '../controllers/MotorcycleController';
import MotorcycleMiddleware from '../middlewares/MotorcycleMiddleware';
import MotorcycleModel from '../models/MotorcycleModel';
import MotorcycleService from '../services/MotorcycleService';

const route = Router();

const motorcycleModel = new MotorcycleModel();
const motorcycleService = new MotorcycleService(motorcycleModel);
const motorcycleController = new MotorcycleController(motorcycleService);

const motorcycleMiddleware = new MotorcycleMiddleware();

const routeMotorcycleId = '/motorcycles/:id';
route.post(
  '/motorcycles',
  (req, res, next) => motorcycleMiddleware.validateData(req, res, next),
  (req, res) => motorcycleController.create(req, res),
);

route.get(
  routeMotorcycleId,
  (req, res, next) => motorcycleMiddleware.validateId(req, res, next),
  (req, res) => motorcycleController.readOne(req, res),
);

route.get('/motorcycles', (req, res) => motorcycleController.read(req, res));
route.put(
  routeMotorcycleId,
  (req, res, next) => motorcycleMiddleware.validationToUpdate(req, res, next),
  (req, res) => motorcycleController.update(req, res),
);

route.delete(
  routeMotorcycleId,
  (req, res, next) => motorcycleMiddleware.validateId(req, res, next),
  (req, res) => motorcycleController.delete(req, res),
);

export default route;