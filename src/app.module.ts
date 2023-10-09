import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TypeormService } from './services/typeorm/typeorm.service';
import { MovieService } from './services/movie/movie.service';
import { MovieController } from './controller/movie/movie.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Movies } from './models/movies.models';

@Module({
  imports: [ TypeOrmModule.forRootAsync({useClass: TypeormService}),
  TypeOrmModule.forFeature([Movies])
],
 //imports: [TypeOrmModule.forFeature([Movies])],
 
  controllers: [AppController, MovieController],
  providers: [AppService, TypeormService, MovieService],
})
export class AppModule {}
