import { Request } from 'express';
import { ArticlesService } from './articles.service';
import { CreateArticleDto } from './dto/create-article.dto';
export declare class ArticlesController {
    private readonly articleService;
    constructor(articleService: ArticlesService);
    create(articleCreate: CreateArticleDto, req: Request): Promise<void>;
    createForm(req: Request): void;
    getMyArticle(req: Request): Promise<{
        articles: import("@mikro-orm/core").Loaded<import("./article.entity").Articles, never>[];
    }>;
    editArticleGet(articleId: number, req: Request): Promise<import("@mikro-orm/core").Loaded<import("./article.entity").Articles, never>>;
    editArticle(articleId: number, articleDto: CreateArticleDto): Promise<void>;
    getArticle(articleId: number): Promise<{
        article: import("@mikro-orm/core").Loaded<import("./article.entity").Articles, never>;
    }>;
}
