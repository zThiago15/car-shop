import { Request, Response } from 'express';
import { ICar } from '../interfaces/ICar';
import IService from '../interfaces/IService';

export default class CarController {
  private _service: IService<ICar>;

  constructor(service: IService<ICar>) { 
    this._service = service;
  }

  async create(req: Request, res: Response) {
    const carCreted = await this._service.create(req.body);
    return res.status(201).json(carCreted);
  }
}