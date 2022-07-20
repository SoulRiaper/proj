
import { HttpException, HttpStatus, Injectable, UnauthorizedException } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { CreateUserDto } from '../user/dto/create-user.dto';
import { UserService } from '../user/user.service';
import * as bcrypt from 'bcrypt';
import { User } from '../user/user.entity';
import { Response } from 'express';

@Injectable()
export class AuthService {

    constructor(
        private readonly userService: UserService,
        private jwtService: JwtService,
        ){}


    private async validateUser(userDto: CreateUserDto){
        const user  = await this.userService.findOne(userDto.email || userDto.uaerName)

        if (!user){
            throw new UnauthorizedException({message: 'Пользователя с таким логином или email нет!'});
        }

        const passEquals = await bcrypt.compare( userDto.pass, user.pass )

        if (user && passEquals ){
            return user
        }
        throw new UnauthorizedException({message: 'Неверный email или пароль'});
    }


    async login(userDto: CreateUserDto){
        const user = await this.validateUser(userDto);
        const token = await this.generateToken(user);
        return token
    }


    async regisration( userDto: CreateUserDto ){
        const candidate = await this.userService.findOne(userDto.email, userDto.uaerName)
        if ( candidate ){
            throw new HttpException('Пользователь с таким именем существует', HttpStatus.BAD_REQUEST)
        }
        const hashPass = await bcrypt.hash( userDto.pass, 5)
        const user = await this.userService.createUser({...userDto, pass: hashPass})

        return this.generateToken(user)
    }
    
    private async generateToken(user: User){
        const payload = {id: user.id}

        return {
            token: this.jwtService.sign(payload,{ secret: 'secretkey', expiresIn: '24h'})
        }

    }

}
