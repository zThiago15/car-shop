import { Router } from 'express';
import CarController from '../controllers/CarController';
import CarMiddleware from '../middlewares/CarMiddleware';
import CarModel from '../models/CarModel';
import CarService from '../services/CarService';

const route = Router();

const carModel = new CarModel();
const carService = new CarService(carModel);
const carController = new CarController(carService);
const carMiddleware = new CarMiddleware();

route.post(
  '/cars', 
  (req, res, next) => carMiddleware.validateData(req, res, next),
  (req, res) => carController.create(req, res),
);

route.get(
  '/cars/:id', 
  (req, res, next) => carMiddleware.validateId(req, res, next),
  (req, res) => carController.readOne(req, res),
);

route.get('/cars', (req, res) => carController.read(req, res));

export default route;