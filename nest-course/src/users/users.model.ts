import { ApiProperty } from "@nestjs/swagger";
import { Column, DataType, Model, Table } from "sequelize-typescript";

interface UserCreateAttrs{
  email: string;
  password: string;
}

@Table({tableName: 'users'})
export class User extends Model<User, UserCreateAttrs>{
  @ApiProperty({example:'1', description:'Уникальный индентификатор'})
  @Column({type: DataType.INTEGER, unique: true, autoIncrement: true, primaryKey: true})
  id: number;

  @ApiProperty({example:'email@gmail.com', description:'Почта'})
  @Column({type: DataType.STRING, unique: true, allowNull: false})
  email: string;

  @ApiProperty({example:'123456789', description:'Пароль'})
  @Column({type: DataType.STRING, allowNull: false})
  password: string;

  @ApiProperty({example:'true', description:'Забанен или нет'})
  @Column({type: DataType.BOOLEAN, defaultValue: false})
  banned: boolean;

  @ApiProperty({example:'За хулиганство', description:'Причина блокировки'})
  @Column({type: DataType.STRING, allowNull: true})
  banReason: string;
}