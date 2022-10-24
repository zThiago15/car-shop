import { NextFunction, Request, Response } from 'express';
import { carZodSchema } from '../interfaces/ICar';

export default class CarMiddleware {
  private carSchema;

  constructor() {
    this.carSchema = carZodSchema;
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
}