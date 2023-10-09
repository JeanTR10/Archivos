"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.MovieService = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const movies_models_1 = require("../../models/movies.models");
const typeorm_2 = require("typeorm");
let MovieService = class MovieService {
    constructor(moviesRepository) {
        this.moviesRepository = moviesRepository;
    }
    async findAll() {
        return await this.moviesRepository.findBy({ status: true });
    }
    async findById(id) {
        return await this.moviesRepository.findOneBy({ id: id, status: true });
    }
    async create(movie) {
        return await this.moviesRepository.save(movie);
    }
    async update(movie) {
        return await this.moviesRepository.save(movie);
    }
    async delete(id) {
        await this.moviesRepository.delete(id);
        return 'OK';
    }
};
exports.MovieService = MovieService;
exports.MovieService = MovieService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_1.InjectRepository)(movies_models_1.Movies)),
    __metadata("design:paramtypes", [typeorm_2.Repository])
], MovieService);
//# sourceMappingURL=movie.service.js.map