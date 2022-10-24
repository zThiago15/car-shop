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
    const car = await this._car.readOne(_id);
    if (!car) {
      throw Error(ErrorTypes.carNotFound);
    }
    return car;
  }

  async read(): Promise<ICar[]> {
    return this._car.read();
  }

  async update(_id: string, obj: ICar): Promise<ICar | null> {
    const parsed = carZodSchema.safeParse(obj);
    if (!parsed.success) throw parsed.error; 

    const carExists = await this._car.readOne(_id);
    if (!carExists) throw Error(ErrorTypes.carNotFound);

    return this._car.update(_id, obj);
  }

  async delete(_id: string): Promise<ICar | null> {
    const carExists = await this._car.readOne(_id);
    if (!carExists) throw Error(ErrorTypes.carNotFound);

    return this._car.delete(_id);
  }
}