import { Entity } from '@loopback/repository';
export declare class Employee extends Entity {
    id?: string;
    name: string;
    cellphone: number;
    etnia: string;
    maritalstatus: string;
    work?: object[];
    [prop: string]: any;
    constructor(data?: Partial<Employee>);
}
export interface EmployeeRelations {
}
export declare type EmployeeWithRelations = Employee & EmployeeRelations;
