import { IsEmail, IsEmpty, IsNotEmpty, IsString, MinLength } from "class-validator";

export class CreateUserDto{

    @IsEmail()
    email: string;

    @MinLength(8)
    @IsString()
    pass: string;

    uaerName: string;


    constructor(email, pass, userName){
        this.email = email;
        this.pass = pass;
        this.uaerName = userName;
    }
}