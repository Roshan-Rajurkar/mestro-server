import {
  Controller,
  Post,
  Body,
  UseInterceptors,
  ClassSerializerInterceptor,
  Get,
  UseGuards,
  Request,
} from '@nestjs/common';
import { AuthService } from './auth.service';
import { CreateUserDto } from '../user/dtos/create-user.dto';
import { LoginUserDto } from 'src/user/dtos/login-user.dto';
import { AppHttpException } from 'src/exceptions/appHttpException.exception';
import { AuthGuard } from '@nestjs/passport';

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
    try {
      if (!UserForm)
        return new AppHttpException(
          'Missing email or password',
          102,
        ).getResponse();
      return this.authService.login(UserForm);
    } catch (error) {
      throw new AppHttpException('Internal server error', 500);
    }
  }

  // @UseGuards(AuthGuard('jwt'))
  @Get('profile')
  getProfile(@Request() req) {
    console.log(req['Authentication']);
    return req.user;
  }
}
