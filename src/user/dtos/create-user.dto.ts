import { Exclude } from 'class-transformer';
import { IsEmail, IsEmpty, Min } from 'class-validator';

export class CreateUserDto {
  @IsEmpty()
  name: string;

  @IsEmpty()
  @IsEmail()
  email: string;

  @IsEmpty()
  @Exclude()
  @Min(6, { message: 'password must be at least 6 characters' })
  password: string;
}
