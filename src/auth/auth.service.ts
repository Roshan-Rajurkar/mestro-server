import {
  BadRequestException,
  Injectable,
  UnauthorizedException,
} from '@nestjs/common';
import { CreateUserDto } from '../user/dtos/create-user.dto';
import * as bcrypt from 'bcrypt';
import { UserService } from '../user/user.service';
import { LoginUserDto } from 'src/user/dtos/login-user.dto';
import { access } from 'fs';

@Injectable()
export class AuthService {
  constructor(private userService: UserService) {}
  saltOrRounds = 10;

  async register(user: CreateUserDto) {
    // Validate user input
    if (!user.name || !user.email || !user.password) {
      throw new BadRequestException(
        'Missing required fields: username, email, or password',
      );
    }

    // Check if the user already exists
    const userExist = await this.userService.findOne(user.email);
    if (userExist) throw new BadRequestException('User already exists');

    // Hash the password
    const hashPassword = await bcrypt.hash(user.password, this.saltOrRounds);

    // Create and save the new user
    const res = await this.userService.create({
      ...user,
      password: hashPassword,
    });

    return res;
  }

  async login(user: LoginUserDto) {
    // Check if user exists by email
    const userExist = await this.userService.findOne(user.email);

    if (!userExist) {
      throw new UnauthorizedException('Invalid email or password');
    }

    // Check if the provided password matches the stored hashed password
    const isPasswordValid = await bcrypt.compare(
      user.password,
      userExist.password,
    );
    if (!isPasswordValid) {
      throw new UnauthorizedException('Invalid email or password');
    }

    // Implement jwt token and add on header
    let access_token = '';

    return {
      access_token,
    };
  }
}
