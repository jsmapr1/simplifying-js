import expect from 'expect';

import { getLowestPrice } from './let';
import { getLowestPrice as getLowestPriceVar } from './problem';
import { getLowestPrice as getLowestPriceConst } from './const';

describe('let block lowest price', () => {
  it('should return none avaible', () => {
    //    # START:noInventory
    const item = {
      inventory: 0,
      price: 3,
      salePrice: 0,
      saleInventory: 0,
    };
    //    # END:noInventory

    expect(getLowestPriceVar(item)).toEqual(0);
  });

  it('should get sale price', () => {
    //    # START:salePrice
    const item = {
      inventory: 3,
      price: 3,
      salePrice: 2,
      saleInventory: 1,
    };
    //    # END:salePrice
    expect(getLowestPriceVar(item)).toEqual(2);
  });

  it('should get incorrect inventory', () => {
    //    # START:noSale
    const item = {
      inventory: 3,
      price: 3,
      salePrice: 2,
      saleInventory: 0,
    };
    //    # END:noSale
    expect(getLowestPriceVar(item)).toEqual(0);
  });
});

describe('let block lowest price let', () => {
  it('should return none avaible', () => {
    const item = {
      inventory: 0,
      price: 3,
      salePrice: 0,
      saleInventory: 0,
    };

    expect(getLowestPrice(item)).toEqual(0);
  });

  it('should get sale price', () => {
    const item = {
      inventory: 3,
      price: 3,
      salePrice: 2,
      saleInventory: 1,
    };
    expect(getLowestPrice(item)).toEqual(2);
  });

  it('should get incorrect inventory', () => {
    const item = {
      inventory: 3,
      price: 3,
      salePrice: 2,
      saleInventory: 0,
    };
    expect(getLowestPrice(item)).toEqual(3);
  });
});

describe('let block lowest price const', () => {
  it('should return none avaible', () => {
    const item = {
      inventory: 0,
      price: 3,
      salePrice: 0,
      saleInventory: 0,
    };

    expect(getLowestPriceConst(item)).toEqual(0);
  });

  it('should get sale price', () => {
    const item = {
      inventory: 3,
      price: 3,
      salePrice: 2,
      saleInventory: 1,
    };
    expect(getLowestPriceConst(item)).toEqual(2);
  });

  it('should get incorrect inventory', () => {
    const item = {
      inventory: 3,
      price: 3,
      salePrice: 2,
      saleInventory: 0,
    };
    expect(getLowestPriceConst(item)).toEqual(3);
  });
});
