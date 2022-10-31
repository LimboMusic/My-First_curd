import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  getHello(): string {
    return '你好！！!';
  }
  getMyTest(): string {
    return 'test';
  }
}
