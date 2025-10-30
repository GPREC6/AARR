import { TestBed } from '@angular/core/testing';

// Exporting CartData so it can be imported elsewhere
export class CartData {
  // class members
}

describe('CartData', () => {
  let service: CartData;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CartData);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
