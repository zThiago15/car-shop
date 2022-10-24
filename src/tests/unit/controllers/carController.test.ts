import * as sinon from 'sinon';
import chai from 'chai';
const { expect } = chai;

describe('Car controller', () => {

  before(async () => {
    sinon
      .stub()
      .resolves();
  });

  after(()=>{
    sinon.restore();
  })

  it('', async () => {});

});