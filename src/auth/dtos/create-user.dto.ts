import { IsEmail, IsEmpty, Min } from "class-validator";

export class CreateUserDto {
    @IsEmpty()
    name: string;
    
    @IsEmpty()
    @IsEmail()
    email: string;
    
    @IsEmpty()
    @Min(6, { message: 'password must be at least 6 characters'})
    password: string;
}