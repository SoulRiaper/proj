import { MikroORM } from '@mikro-orm/core';
import { InjectRepository } from '@mikro-orm/nestjs';
import { EntityManager, EntityRepository } from '@mikro-orm/postgresql';
import { ExecutionContext, Injectable, UnauthorizedException } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { Request, request, response } from 'express';
import { Observable } from 'rxjs';
import { User } from '../user/user.entity';
import { UserService } from '../user/user.service';
import { Articles } from './article.entity';
import { ArticlesController } from './articles.controller';
import { CreateArticleDto } from './dto/create-article.dto';

@Injectable()
export class ArticlesService {
    constructor (
    private readonly jwtService: JwtService,
    private readonly userService: UserService,
    private readonly orm: MikroORM,
    private readonly em: EntityManager,
    @InjectRepository(Articles)
    private articlesRepository: EntityRepository<Articles>,
    ){}

    
     async createArticle(createDto: CreateArticleDto, req: Request){

        const token = await req.cookies.Authorization;

        if (!token){
            throw new UnauthorizedException({ message : 'Чтобы опубликовать пост нужно авторизоваться или зарегестрироваться' })
        }

        const id = await this.userService.jwtToId(token);

        const author = await this.userService.findById(id);
        const post = await this.em.create(Articles, {...createDto, user: author});
        await this.em.persistAndFlush(post);
    }
    
    async findArticles(req: Request){
        const token = await req.cookies.Authorization;
        const id = await this.userService.jwtToId(token)
        const articles = await this.em.find(Articles, {user: id}) 
        return articles
    }




    async findMyArticle(articleId: number, req: Request){
        const token = await req.cookies.Authorization;
        const id = await this.userService.jwtToId(token)
        const article = await this.em.findOne(Articles, { $and: [ { user: id } , { _id: Object.values(articleId) }]}) 
        return article
    }


    async editArticle(articleDto: CreateArticleDto, articleId: number){
        const article = await this.em.findOne(Articles, { _id: Object.values(articleId) });
        if (article){
            article.title = articleDto.title;
            article.content = articleDto.content
        } else {
            return 'Такая статья не найдена'
        }
        await this.em.flush()


    }


    async findForRead(articleId: number){
        return this.em.findOne(Articles, { _id: Object.values(articleId) })
    }

}
