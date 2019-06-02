import { FooService } from './foo.service';

describe('FooService', () => {

  for (let i = 0; i < 20; i++) {
    it(`should add ${i}`, () => {
      const service: FooService = new FooService(2);
      expect(service.addStuff(i)).toEqual(2 + i);
    });
  }
});
