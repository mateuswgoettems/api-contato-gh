import { IsEmail, IsPhoneNumber, IsString, MaxLength } from "class-validator";

export class ContatoDto {
    @IsEmail({}, {
        message: 'O Endereço acima precisa ser uma email válido',
    })
    @MaxLength(80, {
        message: 'Máximo 80 caracteres no email'
    })
    email: string;

    @IsPhoneNumber()
    @IsString()
    telefone: string;

    @MaxLength(300, { message: 'Mensagens com no máximo 80 caracteres' })
    nome: string;
}