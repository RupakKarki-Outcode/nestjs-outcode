import { HttpException, HttpStatus, Injectable } from '@nestjs/common';

@Injectable()
export class CatsService {
  getAllCats() {
    try {
      return 'Returning all cats';
    } catch (e) {
      throw new HttpException(e.message, HttpStatus.FORBIDDEN);
    }
  }
}
