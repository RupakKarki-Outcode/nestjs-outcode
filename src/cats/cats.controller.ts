import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Post,
  Query,
} from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import { CatsService } from './cats.service';
import { CreateCatDto } from './dto/create-cat.dto';

@ApiTags('Cats')
@Controller('cats')
export class CatsController {
  constructor(private catsService: CatsService) {}

  @Get()
  findAll(): string {
    return this.catsService.getAllCats();
  }

  @Post()
  async create(@Body() createCatDto: CreateCatDto) {
    console.log(createCatDto);
    return 'Adds a new cat';
  }

  @Get(':id')
  findOne(@Param('id') id: string): string {
    return `Finds a cat with ${id}`;
  }

  @Delete(':id')
  deleteById(@Param('id') id: string): string {
    return `Deletes a #${id} cat`;
  }

  @Patch(':id')
  patchCat(@Param('id') id: string): string {
    return `Patches a #${id} cat`;
  }
}
