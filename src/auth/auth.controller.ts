import { Controller, Post, Body } from '@nestjs/common';
import { AuthService } from './auth.service';
import { CreateUserDto } from './dtos/create-user.dto';

@Controller('auth')
export class AuthController {

    // inject auth service
    constructor(private readonly authService: AuthService){}

    @Post('register')
    register(@Body() createUserDto:CreateUserDto){
        return this.authService.register(createUserDto);
    }

    @Post('login')
    login(){
        return this.authService.login();
    }

}
