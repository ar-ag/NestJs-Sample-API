import { Controller, Get, Req, Redirect, Param, Post, Body } from '@nestjs/common';
import { CatService } from './cats.service';
import { CreateCatDto } from './create-cat.dto';

@Controller('cats')
export class CatsController {
    constructor(private readonly catService: CatService) {}

    @Post('')
    async create(@Body() createCatDto: CreateCatDto) {
      if(createCatDto.age > 2) {
        console.log(createCatDto);
        return this.catService.createCat(createCatDto);
      } else {
        return 'It is not a cat but a kitten!'
      }
      
    }

    @Get('')
    getHello(@Req() request:Request): string {
    console.log(request.url)
    return this.catService.getCatHello();
    
  }

  @Get('kittens:id')

  getKittenHello(@Param('id') id:string): string {
    console.log(id)
    return this.catService.getKittenHello(id);
  }
}
