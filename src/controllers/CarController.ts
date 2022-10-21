import { Request, Response } from 'express';
import { ICar } from '../interfaces/ICar';
import IService from '../interfaces/IService';

export default class CarController {
  constructor(private _service: IService<ICar>) { }

  async create(req: Request, res: Response) {
    const carCreted = await this._service.create(req.body);
    return res.status(201).json(carCreted);
  }
}