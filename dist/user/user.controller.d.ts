import { ArticlesService } from '../articles/articles.service';
import { Request, Response } from 'express';
import { UserService } from './user.service';
export declare class UserController {
    private userService;
    private readonly articlesService;
    constructor(userService: UserService, articlesService: ArticlesService);
    personalAreaGet(req: Request): Promise<{
        user: import("@mikro-orm/core").Loaded<import("./user.entity").User, never>;
        articles: import("@mikro-orm/core").Loaded<import("../articles/article.entity").Articles, never>[];
    }>;
    exit(res: Response): Promise<void>;
    getAddTelega(): Promise<void>;
    addTelegram(req: Request, chatId: number): Promise<void>;
}
