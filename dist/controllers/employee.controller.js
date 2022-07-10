"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.EmployeeController = void 0;
const tslib_1 = require("tslib");
const authentication_1 = require("@loopback/authentication");
const repository_1 = require("@loopback/repository");
const rest_1 = require("@loopback/rest");
const models_1 = require("../models");
const repositories_1 = require("../repositories");
let EmployeeController = class EmployeeController {
    constructor(employeeRepository) {
        this.employeeRepository = employeeRepository;
    }
    async create(employee) {
        return this.employeeRepository.create(employee);
    }
    async count(where) {
        return this.employeeRepository.count(where);
    }
    async find(filter) {
        return this.employeeRepository.find(filter);
    }
    async updateAll(employee, where) {
        return this.employeeRepository.updateAll(employee, where);
    }
    async findById(id, filter) {
        return this.employeeRepository.findById(id, filter);
    }
    async updateById(id, employee) {
        await this.employeeRepository.updateById(id, employee);
    }
    async replaceById(id, employee) {
        await this.employeeRepository.replaceById(id, employee);
    }
    async deleteById(id) {
        await this.employeeRepository.deleteById(id);
    }
};
tslib_1.__decorate([
    (0, authentication_1.authenticate)('jwt'),
    (0, rest_1.post)('/employees'),
    (0, rest_1.response)(200, {
        description: 'Employee model instance',
        content: { 'application/json': { schema: (0, rest_1.getModelSchemaRef)(models_1.Employee) } },
    }),
    tslib_1.__param(0, (0, rest_1.requestBody)({
        content: {
            'application/json': {
                schema: (0, rest_1.getModelSchemaRef)(models_1.Employee, {
                    title: 'NewEmployee',
                    exclude: ['id'],
                }),
            },
        },
    })),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object]),
    tslib_1.__metadata("design:returntype", Promise)
], EmployeeController.prototype, "create", null);
tslib_1.__decorate([
    (0, rest_1.get)('/employees/count'),
    (0, rest_1.response)(200, {
        description: 'Employee model count',
        content: { 'application/json': { schema: repository_1.CountSchema } },
    }),
    tslib_1.__param(0, rest_1.param.where(models_1.Employee)),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object]),
    tslib_1.__metadata("design:returntype", Promise)
], EmployeeController.prototype, "count", null);
tslib_1.__decorate([
    (0, authentication_1.authenticate)('jwt'),
    (0, rest_1.get)('/employees'),
    (0, rest_1.response)(200, {
        description: 'Array of Employee model instances',
        content: {
            'application/json': {
                schema: {
                    type: 'array',
                    items: (0, rest_1.getModelSchemaRef)(models_1.Employee, { includeRelations: true }),
                },
            },
        },
    }),
    tslib_1.__param(0, rest_1.param.filter(models_1.Employee)),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object]),
    tslib_1.__metadata("design:returntype", Promise)
], EmployeeController.prototype, "find", null);
tslib_1.__decorate([
    (0, rest_1.patch)('/employees'),
    (0, rest_1.response)(200, {
        description: 'Employee PATCH success count',
        content: { 'application/json': { schema: repository_1.CountSchema } },
    }),
    tslib_1.__param(0, (0, rest_1.requestBody)({
        content: {
            'application/json': {
                schema: (0, rest_1.getModelSchemaRef)(models_1.Employee, { partial: true }),
            },
        },
    })),
    tslib_1.__param(1, rest_1.param.where(models_1.Employee)),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [models_1.Employee, Object]),
    tslib_1.__metadata("design:returntype", Promise)
], EmployeeController.prototype, "updateAll", null);
tslib_1.__decorate([
    (0, authentication_1.authenticate)('jwt'),
    (0, rest_1.get)('/employees/{id}'),
    (0, rest_1.response)(200, {
        description: 'Employee model instance',
        content: {
            'application/json': {
                schema: (0, rest_1.getModelSchemaRef)(models_1.Employee, { includeRelations: true }),
            },
        },
    }),
    tslib_1.__param(0, rest_1.param.path.string('id')),
    tslib_1.__param(1, rest_1.param.filter(models_1.Employee, { exclude: 'where' })),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [String, Object]),
    tslib_1.__metadata("design:returntype", Promise)
], EmployeeController.prototype, "findById", null);
tslib_1.__decorate([
    (0, rest_1.patch)('/employees/{id}'),
    (0, rest_1.response)(204, {
        description: 'Employee PATCH success',
    }),
    tslib_1.__param(0, rest_1.param.path.string('id')),
    tslib_1.__param(1, (0, rest_1.requestBody)({
        content: {
            'application/json': {
                schema: (0, rest_1.getModelSchemaRef)(models_1.Employee, { partial: true }),
            },
        },
    })),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [String, models_1.Employee]),
    tslib_1.__metadata("design:returntype", Promise)
], EmployeeController.prototype, "updateById", null);
tslib_1.__decorate([
    (0, authentication_1.authenticate)('jwt'),
    (0, rest_1.put)('/employees/{id}'),
    (0, rest_1.response)(204, {
        description: 'Employee PUT success',
    }),
    tslib_1.__param(0, rest_1.param.path.string('id')),
    tslib_1.__param(1, (0, rest_1.requestBody)()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [String, models_1.Employee]),
    tslib_1.__metadata("design:returntype", Promise)
], EmployeeController.prototype, "replaceById", null);
tslib_1.__decorate([
    (0, authentication_1.authenticate)('jwt'),
    (0, rest_1.del)('/employees/{id}'),
    (0, rest_1.response)(204, {
        description: 'Employee DELETE success',
    }),
    tslib_1.__param(0, rest_1.param.path.string('id')),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [String]),
    tslib_1.__metadata("design:returntype", Promise)
], EmployeeController.prototype, "deleteById", null);
EmployeeController = tslib_1.__decorate([
    tslib_1.__param(0, (0, repository_1.repository)(repositories_1.EmployeeRepository)),
    tslib_1.__metadata("design:paramtypes", [repositories_1.EmployeeRepository])
], EmployeeController);
exports.EmployeeController = EmployeeController;
//# sourceMappingURL=employee.controller.js.map