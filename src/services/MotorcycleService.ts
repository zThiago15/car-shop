import { IModel } from '../interfaces/IModel';
import { IMotorcycle } from '../interfaces/IMotorcycle';
import IService from '../interfaces/IService';

export default class MotorcycleService implements IService<IMotorcycle> {
  private _motorcycle;

  constructor(model: IModel<IMotorcycle>) {
    this._motorcycle = model;
  }

  async create(object: IMotorcycle): Promise<IMotorcycle> {
    return this._motorcycle.create(object);
  }

  async readOne(_id: string): Promise<IMotorcycle | null> {
    return this._motorcycle.readOne(_id);
  }

  async read(): Promise<IMotorcycle[]> {
    return this._motorcycle.read();
  }

  async update(_id: string, obj: IMotorcycle): Promise<IMotorcycle | null> {
    return this._motorcycle.update(_id, obj);
  }

  async delete(_id: string): Promise<IMotorcycle | null> {
    return this._motorcycle.delete(_id);
  }
}