import { Inject, Injectable } from '@nestjs/common';
import { UserEntity } from './entities/user.entity';
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';
import { CreateUserDto } from './dtos/create-user.dto';

@Injectable()
export class UserService {
  constructor(
    @InjectRepository(UserEntity)
    private userRepository: Repository<UserEntity>,
  ) {}

  async findAll() {
    return await this.userRepository.find();
  }

  findOne(id: string) {
    return this.userRepository.findOne({
      where: { id },
    });
  }

  create(user: CreateUserDto) {
    const newUser = this.userRepository.create(user);

    return this.userRepository.save(newUser);
  }

  update(id: string, updateUser: CreateUserDto) {
    return this.userRepository.update(id, updateUser);
  }

  delete(id: string) {
    return this.userRepository.delete(id);
  }
}
