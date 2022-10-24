import * as sinon from 'sinon';
import chai from 'chai';
import MongoModel from '../../../models/MongoModel';
import { ICar } from '../../../interfaces/ICar';
import CarModel from '../../../models/CarModel';
import { Model } from 'mongoose';
import { carMockWithId, carMock, allCarsMock } from '../../mocks/carMock';
const { expect } = chai;

describe('Car model', () => {
  const carModel = new CarModel();

  before(async () => {
    sinon.stub(Model, 'create').resolves(carMockWithId);
    sinon.stub(Model, 'find').resolves(allCarsMock);
    sinon.stub(Model, 'findById').resolves(carMockWithId);
    sinon.stub(Model, 'findByIdAndUpdate').resolves(carMockWithId);
    sinon.stub(Model, 'findByIdAndDelete').resolves(null);
  });

  after(()=>{
    sinon.restore();
  })

  it('creating a car', async () => {
    const newCar = await carModel.create(carMock);
    expect(newCar).to.be.deep.equal(carMockWithId);
  });

  it('all cars', async () => {
    const allCars = await carModel.read();
    expect(allCars).to.be.deep.equal(allCarsMock);
  });

  it('find car', async () => {
    const carFound = await carModel.readOne(carMockWithId._id);
    expect(carFound).to.be.deep.equal(carMockWithId);
  });

  it('update car', async () => {
    const updatedCar = await carModel.update(carMockWithId._id, carMockWithId);
    expect(updatedCar).to.be.deep.equal(carMockWithId); 
  });

  it('delete car', async () => {
    const deletedCar = await carModel.delete(carMockWithId._id);
    expect(deletedCar).to.be.equal(null);
  })

});