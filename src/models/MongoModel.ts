import { Model } from 'mongoose';
import { IModel } from '../interfaces/IModel';

export default class MongoModel<T> implements IModel<T> {
  protected _model: Model<T>;

  constructor(model: Model<T>) {
    this._model = model;
  }

  async create(object: T): Promise<T> {
    return this._model.create({ ...object });
  }

  async read(): Promise<T[]> {
    return this._model.find();
  }

  async readOne(_id: string): Promise<T | null> {
    return this._model.findById({ _id });
  }

  async update(_id: string, obj: T): Promise<T | null> {
    return this._model.findByIdAndUpdate({ _id }, { obj });
  }

  async delete(_id: string): Promise<T | null> {
    return this._model.findByIdAndDelete({ _id });
  }
}