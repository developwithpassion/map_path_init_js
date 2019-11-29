import { expect } from 'chai';
import sut from './';

describe('Defining a map', () => {
  let ns;
  describe('with a root', () => {
    beforeEach(() => {
      ns = {};
    });

    describe('without a provided factory', () => {
      beforeEach(() => {
        sut('root.ui', ns);
      });

      it('Defines all parts of the map', () => {
        expect(ns.root).to.not.be.undefined;
        expect(ns.root.ui).to.not.be.undefined;
      });
    });

    describe('with a provided factory', () => {
      let factory;
      beforeEach(() => {
        factory = () => {
          return { item: 42 };
        };
      });

      beforeEach(() => {
        sut('root.ui', ns, factory);
      });

      it('Each path of the map is an instance of the object created by the factory', () => {
        expect(ns.root.item).to.eql(42);
        expect(ns.root.ui).to.not.be.undefined;
      });
    });

    describe('without a root', () => {
      describe('without a provided factory', () => {
        it('Defines all parts of the map', () => {
          sut('root.ui');
        });
      });
    });
  });
});
