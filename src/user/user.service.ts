import { BadRequestException, Inject, Injectable } from '@nestjs/common';
import { DeleteResult, Repository, UpdateResult } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';
import { CreateUserDto } from './dtos/create-user.dto';
import { UserEntity } from './entities/user.entity';
// import { CreateUserDto } from './dtos/user.dto';
@Injectable()
export class UserService {
  constructor(
    @InjectRepository(UserEntity)
    private userRepository: Repository<UserEntity>,
  ) {}

  saltOrRounds = 10;

  async findAll(): Promise<CreateUserDto[]> {
    return await this.userRepository.find();
  }

  async findOne(email: string): Promise<CreateUserDto> {
    return await this.userRepository.findOne({
      where: { email },
    });
  }

  async create(user: CreateUserDto): Promise<CreateUserDto> {
    const newUser = this.userRepository.create(user);

    return this.userRepository.save(newUser);
  }

  update(id: string, updateUser: CreateUserDto): Promise<UpdateResult> {
    return this.userRepository.update(id, updateUser);
  }

  delete(id: string): Promise<DeleteResult> {
    return this.userRepository.delete(id);
  }
}
