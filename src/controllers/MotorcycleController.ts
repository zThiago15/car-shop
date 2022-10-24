import { Request, Response } from 'express';
import { IMotorcycle } from '../interfaces/IMotorcycle';
import IService from '../interfaces/IService';

export default class MotorcycleController {
  private _service: IService<IMotorcycle>;

  constructor(service: IService<IMotorcycle>) {
    this._service = service;
  }

  async create(req: Request, res: Response) {
    const motorcycleCreated = await this._service.create(req.body);
    return res.status(201).json(motorcycleCreated);
  }

  async readOne(req: Request, res: Response) {
    const { id } = req.params;
    const motorcycleFound = await this._service.readOne(id);
    return res.status(200).json(motorcycleFound);
  }

  async read(req: Request, res: Response) {
    const allMotorcycles = await this._service.read();
    return res.status(200).json(allMotorcycles);
  }

  async update(req: Request, res: Response) {
    const { id } = req.params;

    const updatedMotorcycle = await this._service.update(id, req.body);
    return res.status(200).json(updatedMotorcycle);
  }

  async delete(req: Request, res: Response) {
    const { id } = req.params;

    await this._service.delete(id);
    return res.status(204).end();
  }
}