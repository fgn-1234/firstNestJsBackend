import { Injectable } from '@nestjs/common';

@Injectable()
export class CalculationService {
    double(n: number): number {
        return (n * 2);
    }

    square(n: number): number {
        return (n * n);
    }
}
