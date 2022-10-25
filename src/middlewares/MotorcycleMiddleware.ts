import { NextFunction, Request, Response } from 'express';
import { motorcycleZodSchema } from '../interfaces/IMotorcycle';
import MotorcycleModel from '../models/MotorcycleModel';

export default class MotorcycleMiddleware {
  private motorcycleSchema;
  private motorcycleModel;

  constructor() {
    this.motorcycleSchema = motorcycleZodSchema;
    this.motorcycleModel = new MotorcycleModel();
  }

  validateData(req: Request, res: Response, next: NextFunction) {
    const parsed = this.motorcycleSchema.safeParse({ ...req.body });

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
    
    const motorcycleFound = await this.motorcycleModel.readOne(id);
    if (!motorcycleFound) {
      return res.status(404).json({ error: 'Object not found' });
    }

    next();
  }

  async validationToUpdate(req: Request, res: Response, next: NextFunction) {
    const { id } = req.params;

    if (!id || id.length < 24) {
      return res.status(400).json({ error: 'Id must have 24 hexadecimal characters' });
    }
    
    const motorcycleFound = await this.motorcycleModel.readOne(id);
    if (!motorcycleFound) {
      return res.status(404).json({ error: 'Object not found' });
    }

    if (!req.body.category) {
      return res.status(400).end();
    }

    next();
  }
}
