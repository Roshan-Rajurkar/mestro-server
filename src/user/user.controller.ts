import {
  Body,
  ClassSerializerInterceptor,
  Controller,
  Get,
  Param,
  Post,
  UseInterceptors,
} from '@nestjs/common';
import { UserService } from './user.service';
import { CreateUserDto } from './dtos/create-user.dto';
import { SerializeInterceptor } from 'src/interceptors/serialize.interceptor';
import { UserDto } from './dtos/user.dto';

@Controller('user')
export class UserController {
  constructor(private userService: UserService) {}

  @Get()
  findAll() {
    return this.userService.findAll();
  }

  // @UseInterceptors(ClassSerializerInterceptor)
  @UseInterceptors(new SerializeInterceptor(UserDto))
  @Get()
  // need to serialize the user details like password should not be excluded
  findOne() {
    return this.userService.findOne();
  }

  @Post()
  createUser(@Body() user: CreateUserDto) {
    return this.userService.create(user);
  }

  @Post()
  updateUser(@Body() user: CreateUserDto, @Param('id') userId: string) {
    return this.userService.update(userId, user);
  }

  @Post()
  deleteUser(@Param('id') userId: string) {
    return this.userService.delete(userId);
  }
}
