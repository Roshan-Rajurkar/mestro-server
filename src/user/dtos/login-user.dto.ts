import { IsEmail, Min } from 'class-validator';

export class LoginUserDto {
  @IsEmail()
  email: string;

  @Min(6, { message: 'password must be at least 6 characters' })
  password: string;
}
