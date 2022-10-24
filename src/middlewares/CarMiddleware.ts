import { NextFunction, request, Request, Response } from 'express';
import { carZodSchema } from '../interfaces/ICar';
import CarModel from '../models/CarModel';

export default class CarMiddleware {
  private carSchema;
  private carModel;
  private reqBody;

  constructor() {
    this.carSchema = carZodSchema;
    this.carModel = new CarModel();
    this.reqBody = request;
  }

  validateData(req: Request, res: Response, next: NextFunction) {
    const { model, year, color, buyValue, seatsQty, doorsQty } = req.body;
    const parsed = this.carSchema.safeParse({ model, year, color, buyValue, seatsQty, doorsQty });

    if (!parsed.success) {
      console.log(parsed.error);
      return res.status(400).end();
    }
    next();
  }

  async validateId(req: Request, res: Response, next: NextFunction) {
    const { id } = req.params;
    if (!id || id.length < 24) {
      return res.status(400).json({ error: 'Id must have 24 hexadecimal characters' });
    }

    const carFound = await this.carModel.readOne(id);
    if (!carFound) {
      return res.status(404).json({ error: 'Object not found' });
    }

    next();
  }

  async verifyBody(_req: Request, res: Response, next: NextFunction) {
    if (!this.reqBody.body) {
      return res.status(400).end();
    }
    next();
  }
}