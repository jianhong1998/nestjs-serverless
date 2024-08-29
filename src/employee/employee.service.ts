import { Injectable } from '@nestjs/common';
import { IEmployee } from './types/employee.type';
import { randomUUID } from 'crypto';

@Injectable()
export class EmployeeService {
  constructor() {}

  public async getEmployees(): Promise<IEmployee[]> {
    return [
      {
        uuid: randomUUID(),
        name: 'Employee 1',
      },
      {
        uuid: randomUUID(),
        name: 'Employee 2',
      },
      {
        uuid: randomUUID(),
        name: 'Employee 3',
      },
      {
        uuid: randomUUID(),
        name: 'Employee 4',
      },
    ];
  }
}
