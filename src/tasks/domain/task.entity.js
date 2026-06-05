"use strict";
//Entity Modelo de datos 
Object.defineProperty(exports, "__esModule", { value: true });
exports.Task = void 0;
var Task = /** @class */ (function () {
    function Task(id, title, description, status, createdAt) {
        this.id = id;
        this.title = title;
        this.description = description;
        this.status = status;
        this.createdAt = createdAt;
    }
    //logica en la capa de dominio 
    Task.prototype.complete = function () {
        this.status = 'COMPLETED';
    };
    return Task;
}());
exports.Task = Task;
