import ErrorTypes from '../errors/carCatalog';
import { carZodSchema, ICar } from '../interfaces/ICar';
import { IModel } from '../interfaces/IModel';
import IService from '../interfaces/IService';

export default class CarService implements IService<ICar> {
  private _car:IModel<ICar>;

  constructor(model:IModel<ICar>) {
    this._car = model;
  }

  async create(object: ICar): Promise<ICar> {
    return this._car.create(object);
  }

  async readOne(_id: string): Promise<ICar | null> {
    return this._car.readOne(_id);
  }

  async read(): Promise<ICar[]> {
    return this._car.read();
  }

  async update(_id: string, obj: ICar): Promise<ICar | null> {
    return this._car.update(_id, obj);
  }

  async delete(_id: string): Promise<ICar | null> {
    return this._car.delete(_id);
  }
}