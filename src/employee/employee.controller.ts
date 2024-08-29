import { Controller, Get } from '@nestjs/common';
import { EmployeeService } from './employee.service';

@Controller('/employee')
export class EmployeeController {
  constructor(private readonly employeeService: EmployeeService) {}

  @Get('/')
  public async getEmployee() {
    const employees = await this.employeeService.getEmployees();

    return { employees };
  }
}
