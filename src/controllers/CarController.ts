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

  async readOne(req: Request, res: Response) {
    const { id } = req.params;
    const carFound = await this._service.readOne(id);
    return res.status(200).json(carFound);
  }

  async read(req: Request, res: Response) {
    const allCars = await this._service.read();
    return res.status(200).json(allCars);
  }

  async update(req: Request, res: Response) {
    const { id } = req.params;

    const updatedCar = await this._service.update(id, req.body);
    return res.status(200).json(updatedCar);
  }

  async delete(req: Request, res: Response) {
    const { id } = req.params;

    await this._service.delete(id);
    return res.status(204).end();
  }
}