import { Body, Controller, Get, Param, Post } from '@nestjs/common';
import { UserService } from './user.service';
import { CreateUserDto } from './dtos/create-user.dto';

@Controller('user')
export class UserController {
  constructor(private userService: UserService) {}

  @Get()
  getUsers() {
    return this.userService.findAll();
  }

  @Get()
  // need to serialize the user details like password should not be excluded
  getUser(@Param('id') userId: string) {
    return this.userService.findOne(userId);
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
