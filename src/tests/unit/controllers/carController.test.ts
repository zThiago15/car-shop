import * as sinon from 'sinon';
import chai from 'chai';
import CarController from '../../../controllers/CarController';
import CarService from '../../../services/CarService';
import CarModel from '../../../models/CarModel';
import { allCarsMock, carMock, carMockWithId } from '../../mocks/carMock';
import { Request, Response } from 'express';


const { expect } = chai;

describe('Car controller', () => {
  const carModel = new CarModel();
  const carService = new CarService(carModel);
  const carController = new CarController(carService);

  const req = {} as Request;
  const res = {} as Response;

  before(async () => {
    sinon.stub(carService, 'create').resolves(carMockWithId);
    sinon.stub(carService, 'read').resolves(allCarsMock);
    sinon.stub(carService, 'readOne').resolves(carMockWithId);
    sinon.stub(carService, 'update').resolves(carMockWithId);
    sinon.stub(carService, 'delete').resolves(null);

    res.status = sinon.stub().returns(res);
    res.json = sinon.stub().returns(res);
    req.params = { id: '3' };
    res.end = () => 'end';
  });

  after(()=>{
    sinon.restore();
  })

  it('creating a car', async () => {
    req.body = { carMock };
    await carController.create(req, res);

    expect((res.status as sinon.SinonStub).calledWith(201)).to.be.true;
    expect((res.json as sinon.SinonStub).calledWith(carMockWithId)).to.be.true;
  });

  it('all cars', async () => {
    await carController.read(req, res);
    
    expect((res.status as sinon.SinonStub).calledWith(200)).to.be.true;
    expect((res.json as sinon.SinonStub).calledWith(allCarsMock)).to.be.true;
  });

  it('find car', async () => {
    await carController.readOne(req, res);

    expect((res.status as sinon.SinonStub).calledWith(200)).to.be.true;
    expect((res.json as sinon.SinonStub).calledWith(carMockWithId)).to.be.true;
  });

  it('update car', async () => {
    await carController.update(req, res);

    expect((res.status as sinon.SinonStub).calledWith(200)).to.be.true;
    expect((res.json as sinon.SinonStub).calledWith(carMockWithId)).to.be.true;

  });

  it('delete car', async () => {
    await carController.delete(req, res);

    expect((res.status as sinon.SinonStub).calledWith(204)).to.be.true;
  })

});