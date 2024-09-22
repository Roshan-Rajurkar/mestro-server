import {
  Controller,
  Post,
  Body,
  UseInterceptors,
  ClassSerializerInterceptor,
} from '@nestjs/common';
import { AuthService } from './auth.service';
import { CreateUserDto } from '../user/dtos/create-user.dto';
import { LoginUserDto } from 'src/user/dtos/login-user.dto';

@Controller('auth')
export class AuthController {
  // inject auth service
  constructor(private readonly authService: AuthService) {}

  @Post('register')
  register(@Body() createUserDto: CreateUserDto) {
    return this.authService.register(createUserDto);
  }

  @Post('login')
  login(@Body() UserForm: LoginUserDto) {
    return this.authService.login(UserForm);
  }
}
