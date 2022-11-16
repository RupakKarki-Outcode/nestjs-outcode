import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { Cat } from './interfaces/cat';

@Injectable()
export class CatsService {
  private readonly cats: Cat[] = [];

  // get all cats
  getAllCats() {
    try {
      return this.cats;
    } catch (e) {
      throw new HttpException(e.message, HttpStatus.FORBIDDEN);
    }
  }

  // create cat
  createCat(cat: Cat) {
    try {
      this.cats.push(cat);
    } catch (e) {
      throw new HttpException(e.message, HttpStatus.INTERNAL_SERVER_ERROR);
    }
  }

  // get cat by id
  getCatById(id: number) {
    const cat = this.cats.filter((cat) => cat.id === id)[0];
    if (cat) {
      return cat;
    } else {
      throw new HttpException('Cat not found', HttpStatus.NOT_FOUND);
    }
  }
}
