import * as sinon from 'sinon';
import chai from 'chai';
import CarService from '../../../services/CarService';
import CarModel from '../../../models/CarModel';
import { allCarsMock, carMock, carMockWithId } from '../../mocks/carMock';
const { expect } = chai;

describe('Car service', () => {

  const carModel = new CarModel();
  const  carService = new CarService(carModel);

  before(async () => {
    sinon.stub(carModel, 'create').resolves(carMockWithId);
    sinon.stub(carModel, 'read').resolves(allCarsMock);
    sinon.stub(carModel, 'readOne').resolves(carMockWithId);
    sinon.stub(carModel, 'update').resolves(carMockWithId);
    sinon.stub(carModel, 'delete').resolves(null);
  });

  after(()=>{
    sinon.restore();
  })

  it('create a car', async () => {
    const carCreated = await carService.create(carMock);
    expect(carCreated).to.be.deep.equal(carMockWithId);
  });

  it('all cars', async () => {
    const allCars = await carService.read();
    expect(allCars).to.be.deep.equal(allCarsMock);
  });

  it('find car', async () => {
    const carFound = await carService.readOne(carMockWithId._id);
    expect(carFound).to.be.deep.equal(carMockWithId);
  });

  it('update car', async () => {
    const updatedCar = await carService.update(carMockWithId._id, carMockWithId);
    expect(updatedCar).to.be.deep.equal(carMockWithId); 
  });

  it('delete car', async () => {
    const deletedCar = await carService.delete(carMockWithId._id);
    expect(deletedCar).to.be.equal(null);
  })

});