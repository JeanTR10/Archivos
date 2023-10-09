"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AppModule = void 0;
const common_1 = require("@nestjs/common");
const app_controller_1 = require("./app.controller");
const app_service_1 = require("./app.service");
const typeorm_service_1 = require("./services/typeorm/typeorm.service");
const movie_service_1 = require("./services/movie/movie.service");
const movie_controller_1 = require("./controller/movie/movie.controller");
const typeorm_1 = require("@nestjs/typeorm");
const movies_models_1 = require("./models/movies.models");
let AppModule = class AppModule {
};
exports.AppModule = AppModule;
exports.AppModule = AppModule = __decorate([
    (0, common_1.Module)({
        imports: [typeorm_1.TypeOrmModule.forRootAsync({ useClass: typeorm_service_1.TypeormService }),
            typeorm_1.TypeOrmModule.forFeature([movies_models_1.Movies])
        ],
        controllers: [app_controller_1.AppController, movie_controller_1.MovieController],
        providers: [app_service_1.AppService, typeorm_service_1.TypeormService, movie_service_1.MovieService],
    })
], AppModule);
//# sourceMappingURL=app.module.js.map