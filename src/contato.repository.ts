import { InternalServerErrorException } from "@nestjs/common";
import { EntityRepository, Repository } from "typeorm";
import { Contato } from "./contato.entity";
import { ContatoDto } from "./create-contato.dto";

@EntityRepository(Contato)
export class ContatoRepository extends Repository<Contato> {
    async saveContato(createContato: ContatoDto) {
        const { ...contatoDto } = createContato;

        const contato = this.create();

        contato.email   = contatoDto.email;
        contato.telefone = contatoDto.telefone;
        contato.nome = contatoDto.nome;

        try {
            await contato.save();
            return contato;
        } catch(err){
            throw new InternalServerErrorException('Não foi possivel guardar essa informação no banco de dados')
        }
    }
}