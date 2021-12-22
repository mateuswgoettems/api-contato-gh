import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Contato } from './contato.entity';
import { ContatoRepository } from './contato.repository';
import { ContatoDto } from './create-contato.dto';

@Injectable()
export class AppService {
  constructor(
    @InjectRepository(ContatoRepository)
    private contatoRepository: ContatoRepository
  ) { }


  create(createContato: ContatoDto): Promise<Contato> {
    return this.contatoRepository.saveContato(createContato)
  }
}
