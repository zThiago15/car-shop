import * as sinon from 'sinon';
import chai from 'chai';
import CarService from '../../../services/CarService';
import CarModel from '../../../models/CarModel';
import { carMock, carMockWithId } from '../../mocks/carMock';
const { expect } = chai;

describe('Sua descrição', () => {

  const carModel = new CarModel();
  const  carService = new CarService(carModel);

  before(async () => {
    sinon.stub(carModel, 'create').resolves(carMockWithId);
  });

  after(()=>{
    sinon.restore();
  })

  it('create a car', async () => {
    const carCreated = await carService.create(carMock);
    expect(carCreated).to.be.deep.equal(carMockWithId);
  });

});