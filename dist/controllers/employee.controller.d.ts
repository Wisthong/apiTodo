import { Count, Filter, FilterExcludingWhere, Where } from '@loopback/repository';
import { Employee } from '../models';
import { EmployeeRepository } from '../repositories';
export declare class EmployeeController {
    employeeRepository: EmployeeRepository;
    constructor(employeeRepository: EmployeeRepository);
    create(employee: Omit<Employee, 'id'>): Promise<Employee>;
    count(where?: Where<Employee>): Promise<Count>;
    find(filter?: Filter<Employee>): Promise<Employee[]>;
    updateAll(employee: Employee, where?: Where<Employee>): Promise<Count>;
    findById(id: string, filter?: FilterExcludingWhere<Employee>): Promise<Employee>;
    updateById(id: string, employee: Employee): Promise<void>;
    replaceById(id: string, employee: Employee): Promise<void>;
    deleteById(id: string): Promise<void>;
}
