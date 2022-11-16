import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Post,
} from '@nestjs/common';
import { ApiOkResponse, ApiTags } from '@nestjs/swagger';
import { CatsService } from './cats.service';
import { CreateCatDto } from './dto/create-cat.dto';
import { Cat } from './interfaces/cat';

@ApiTags('Cats')
@Controller('cats')
export class CatsController {
  constructor(private catsService: CatsService) {}

  // get all cats controller
  @Get()
  @ApiOkResponse({
    description: 'The user records',
    type: CreateCatDto,
    isArray: true,
  })
  findAll(): Cat[] {
    return this.catsService.getAllCats();
  }

  // create cat controller
  @Post()
  async create(@Body() createCatDto: CreateCatDto) {
    return this.catsService.createCat(createCatDto);
  }

  // get cat by id controller
  @Get(':id')
  @ApiOkResponse({
    description: 'A single cat',
    type: CreateCatDto,
    isArray: false,
  })
  findOne(@Param('id') id: number): Cat {
    return this.catsService.getCatById(id);
  }

  // delete cat by id controller
  @Delete(':id')
  deleteById(@Param('id') id: string): string {
    return `Deletes a #${id} cat`;
  }

  // patch cat by id controller
  @Patch(':id')
  patchCat(@Param('id') id: string): string {
    return `Patches a #${id} cat`;
  }
}
