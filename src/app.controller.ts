import { Body, Controller, Get, Param, Post } from '@nestjs/common';
import { AppService } from './app.service';
import { CalculationService } from './calculation/calculation.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService, 
    private calculation: CalculationService) { }

  @Get()
  getHello(): string {
    return this.appService.getHello();
  }

  @Get('calculate/:number')
  calculate(@Param() params, @Body('a') a: string): string {
    const result = params.number + ' * ' + params.number + ' = ' + this.calculation.square(params.number);
    return (
      'Rechnung: ' + result + a
    );
  }
}
