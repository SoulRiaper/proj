import { Body, Controller, Get, Param, Post, Redirect, Render, Req } from '@nestjs/common';
import { Request } from 'express';
import { ArticlesService } from './articles.service';
import { CreateArticleDto } from './dto/create-article.dto';

@Controller('articles')
export class ArticlesController {

    constructor( private readonly articleService: ArticlesService ){}

    @Post('')
    @Redirect('articles/my', 301)
    create(@Body() articleCreate: CreateArticleDto, @Req() req : Request ){
        return this.articleService.createArticle(articleCreate, req);
    }

    @Get('')
    @Render('create-article')
    createForm(@Req() req: Request){
        
    }

    @Get('/my')
    @Render('articles-home')
    async getMyArticle(@Req() req: Request){
        const articles = await this.articleService.findArticles(req);
        return { articles }; 
    }



    @Get('edit/:id')
    @Render('edit-article')
    async editArticleGet(@Param() articleId: number, @Req() req: Request){
        const article = this.articleService.findMyArticle(articleId, req)
        return article
    }
    @Post('edit/:id')
    @Redirect('/articles/my' )
    async editArticle(@Param() articleId: number, @Body() articleDto:CreateArticleDto){
        this.articleService.editArticle(articleDto, articleId)
    }

    @Get('read/:id')
    @Render('article-read')
    async getArticle( @Param() articleId: number ){
        const article = await this.articleService.findForRead(articleId);
        return {article : article}
    }


}
