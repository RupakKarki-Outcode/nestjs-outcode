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
import { CreateCatDto } from './dto/create-cat.dto';

@ApiTags('Cats')
@Controller('cats')
export class CatsController {
  @Get()
  findAll(): string {
    return 'Returning all cats';
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
