"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ArticlesService = void 0;
const core_1 = require("@mikro-orm/core");
const nestjs_1 = require("@mikro-orm/nestjs");
const postgresql_1 = require("@mikro-orm/postgresql");
const common_1 = require("@nestjs/common");
const jwt_1 = require("@nestjs/jwt");
const user_service_1 = require("../user/user.service");
const article_entity_1 = require("./article.entity");
let ArticlesService = class ArticlesService {
    constructor(jwtService, userService, orm, em, articlesRepository) {
        this.jwtService = jwtService;
        this.userService = userService;
        this.orm = orm;
        this.em = em;
        this.articlesRepository = articlesRepository;
    }
    async createArticle(createDto, req) {
        const token = await req.cookies.Authorization;
        if (!token) {
            throw new common_1.UnauthorizedException({ message: 'Чтобы опубликовать пост нужно авторизоваться или зарегестрироваться' });
        }
        const id = await this.userService.jwtToId(token);
        const author = await this.userService.findById(id);
        const post = await this.em.create(article_entity_1.Articles, Object.assign(Object.assign({}, createDto), { user: author }));
        await this.em.persistAndFlush(post);
    }
    async findArticles(req) {
        const token = await req.cookies.Authorization;
        const id = await this.userService.jwtToId(token);
        const articles = await this.em.find(article_entity_1.Articles, { user: id });
        return articles;
    }
    async findMyArticle(articleId, req) {
        const token = await req.cookies.Authorization;
        const id = await this.userService.jwtToId(token);
        const article = await this.em.findOne(article_entity_1.Articles, { $and: [{ user: id }, { _id: Object.values(articleId) }] });
        return article;
    }
    async editArticle(articleDto, articleId) {
        const article = await this.em.findOne(article_entity_1.Articles, { _id: Object.values(articleId) });
        if (article) {
            article.title = articleDto.title;
            article.content = articleDto.content;
        }
        else {
            return 'Такая статья не найдена';
        }
        await this.em.flush();
    }
    async findForRead(articleId) {
        return this.em.findOne(article_entity_1.Articles, { _id: Object.values(articleId) });
    }
};
ArticlesService = __decorate([
    (0, common_1.Injectable)(),
    __param(4, (0, nestjs_1.InjectRepository)(article_entity_1.Articles)),
    __metadata("design:paramtypes", [jwt_1.JwtService,
        user_service_1.UserService,
        core_1.MikroORM,
        postgresql_1.EntityManager,
        postgresql_1.EntityRepository])
], ArticlesService);
exports.ArticlesService = ArticlesService;
//# sourceMappingURL=articles.service.js.map