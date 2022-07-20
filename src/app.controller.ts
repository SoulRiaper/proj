import { Controller, Get, Post, Redirect, Request, UseGuards } from '@nestjs/common';
import { AppService } from './app.service';
import { AuthService } from './auth/auth.service';
import { AuthGuard } from '@nestjs/passport';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService,
      private authService: AuthService
    ) {}

    @Get()
    @Redirect('/auth/reg')
    async run(){

    }
}
