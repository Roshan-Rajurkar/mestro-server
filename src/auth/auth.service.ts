import { Injectable } from '@nestjs/common';
import { CreateUserDto } from './dtos/create-user.dto';
import * as bcrypt from 'bcrypt'

@Injectable()
export class AuthService {
    salt: number = 10;

    async register(user: CreateUserDto){

        // check if exist before

        // hash password

        const hashedPassword = await bcrypt.hash(user.password, this.salt);
        
        // create user with hashedPassword

        // write to user repo
        return true;
    }

    login(){
        // find user
        // create token
        // add token on header Bearer
        // return token
        return "returning response from login";
    }
}
