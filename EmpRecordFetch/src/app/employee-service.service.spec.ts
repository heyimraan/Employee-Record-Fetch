import { TestBed } from '@angular/core/testing';

import { EmployeeSERVICEService } from './employee-service.service';

describe('EmployeeSERVICEService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: EmployeeSERVICEService = TestBed.get(EmployeeSERVICEService);
    expect(service).toBeTruthy();
  });
});
