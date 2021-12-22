import { Controller, Post, ValidationPipe, Body } from '@nestjs/common';
import { AppService } from './app.service';
import { ContatoDto } from './create-contato.dto';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) { }

  @Post()
  async saveContact(@Body(ValidationPipe) createContact: ContatoDto) {
    await this.appService.create(createContact);
  }
}
