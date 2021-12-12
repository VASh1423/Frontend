import { ApiProperty } from "@nestjs/swagger";

export class CreateUserDto{
  @ApiProperty({example:'email@gmail.com', description:'Почта'})
  readonly email: string;
  @ApiProperty({example:'123456789', description:'Пароль'})
  readonly password: string;
}