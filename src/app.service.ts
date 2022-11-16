import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  getApiStatus() {
    return {
      status: true,
      apiVersion: '1.0',
    };
  }
}
