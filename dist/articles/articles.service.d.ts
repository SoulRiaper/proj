import { MikroORM } from '@mikro-orm/core';
import { EntityManager, EntityRepository } from '@mikro-orm/postgresql';
import { JwtService } from '@nestjs/jwt';
import { Request } from 'express';
import { UserService } from '../user/user.service';
import { Articles } from './article.entity';
import { CreateArticleDto } from './dto/create-article.dto';
export declare class ArticlesService {
    private readonly jwtService;
    private readonly userService;
    private readonly orm;
    private readonly em;
    private articlesRepository;
    constructor(jwtService: JwtService, userService: UserService, orm: MikroORM, em: EntityManager, articlesRepository: EntityRepository<Articles>);
    createArticle(createDto: CreateArticleDto, req: Request): Promise<void>;
    findArticles(req: Request): Promise<import("@mikro-orm/core").Loaded<Articles, never>[]>;
    findMyArticle(articleId: number, req: Request): Promise<import("@mikro-orm/core").Loaded<Articles, never>>;
    editArticle(articleDto: CreateArticleDto, articleId: number): Promise<string>;
    findForRead(articleId: number): Promise<import("@mikro-orm/core").Loaded<Articles, never>>;
}
