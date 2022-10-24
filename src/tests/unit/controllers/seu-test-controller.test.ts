import * as sinon from 'sinon';
import chai from 'chai';
import MongoModel from '../../../models/MongoModel';
import { ICar } from '../../../interfaces/ICar';
import CarModel from '../../../models/CarModel';
import { Model } from 'mongoose';
import { carMockWithId, carMock } from '../../mocks/carMock';
const { expect } = chai;

describe('Car model', () => {
  const carModel = new CarModel();

  before(async () => {
    sinon.stub(Model, 'create').resolves(carMockWithId);
  });

  after(()=>{
    sinon.restore();
  })

  it('creating a car', async () => {
    const newCar = await carModel.create(carMock);
    expect(newCar).to.be.deep.equal(carMockWithId);
  });

});