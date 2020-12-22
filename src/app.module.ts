import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { CalculationService } from './calculation/calculation.service';
import { MongooseModule } from '@nestjs/mongoose';
import { CatsModule } from './cats/cats.module';

@Module({
  imports: 
  [
    MongooseModule.forRoot('mongodb://localhost/nest'),
    CatsModule
  ],
  controllers: [AppController],
  providers: [AppService, CalculationService],
})
export class AppModule { }
