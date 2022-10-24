import { Schema, model as mongooseCreateModel } from 'mongoose';
import { IMotorcycle } from '../interfaces/IMotorcycle';
import MongoModel from './MongoModel';

const motorcycleMongooseSchema = new Schema<IMotorcycle>({
  model: String,
  year: Number,
  color: String,
  status: Boolean,
  buyValue: Number,
  category: Enumerator,
  engineCapacity: Number,
});

export default class MotorcycleModel extends MongoModel<IMotorcycle> {
  constructor(model = mongooseCreateModel('Motorcycles', motorcycleMongooseSchema)) {
    super(model);
  }
}