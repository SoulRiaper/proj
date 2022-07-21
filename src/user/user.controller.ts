import { Body, Controller, Get, Post, Redirect, Render, Req, Res, UseGuards } from '@nestjs/common';
import { ArticlesService } from '../articles/articles.service';
import { Request, Response } from 'express';
import { JwtAuthGuard } from '../auth/jwt-auth.guard';
import { CreateUserDto } from './dto/create-user.dto';
import { UserFindDto } from './dto/find-user.dto';
import { UserService } from './user.service';

@Controller('user')
export class UserController {

    constructor(
        private userService:UserService,
        private readonly articlesService: ArticlesService,
        ){}
    
    

    @UseGuards(JwtAuthGuard)
    @Get()
    @Render('personal-area')
    async personalAreaGet(@Req() req: Request ){
        const user = await this.userService.authorizedUserInfo(req)
        const articles = await this.articlesService.findArticles(req)
        return {user: user, articles: articles}
    }


    @Get('/exit')
    @Redirect('/auth/log')
    async exit(@Res({ passthrough: true }) res: Response){
        this.userService.exit(res);
    }


    @Get("/addTelega")
    @Render('add-telega')
    async getAddTelega(){

    }

    @Post("/addTelega")
    async addTelegram( @Req() req: Request, @Body() chatId: number ){
        this.userService.addTelegramId(req,chatId)
    }
    
}
