import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { typeOrmConfig } from 'configs/typeorm.config';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ContatoRepository } from './contato.repository';

@Module({
  imports: [
    TypeOrmModule.forRoot(typeOrmConfig),
    TypeOrmModule.forFeature([ContatoRepository])
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule { }
