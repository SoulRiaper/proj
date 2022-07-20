import { Body, Controller, Get, Head, HttpStatus, Patch, Post, Put, Redirect, Render, Req, Res, Session, UseGuards } from '@nestjs/common';
import { Request, Response } from 'express';
import { CreateUserDto } from '../user/dto/create-user.dto';
import { AuthService } from './auth.service';
import { LocalAuthGuard } from './local.guard';

@Controller('auth')
export class AuthController {


    constructor(  private authService: AuthService){}

    @Get('/log')
    @Render('login')
    async loginRender(){
        return null;
    }

    @Post('/log')
    @Redirect('/user')
    async login(@Body() userDto: CreateUserDto, @Res({ passthrough: true }) res: Response) {
        res.cookie('Authorization' , 'Bearer ' +  Object.values( await this.authService.login(userDto)),
        {
            expires: new Date (Date.now() + 8 * 3600000 )
        } );
        return 'вы приняли cookie файлы'
    }


    @Get('/reg')
    @Render('reg')
    async regGet(){

    }



    @Post('/reg')
    @Redirect('/user')
    async registration(@Body() userDto: CreateUserDto, @Res( {passthrough: true} ) res: Response ) {
        res.cookie('Authorization' , 'Bearer ' +  Object.values( await this.authService.regisration(userDto)),{
            expires: new Date (Date.now() + 8 * 3600000 ),
        } );
        return this.authService.regisration(userDto);

    }


}
