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
exports.ArticlesController = void 0;
const common_1 = require("@nestjs/common");
const articles_service_1 = require("./articles.service");
const create_article_dto_1 = require("./dto/create-article.dto");
let ArticlesController = class ArticlesController {
    constructor(articleService) {
        this.articleService = articleService;
    }
    create(articleCreate, req) {
        return this.articleService.createArticle(articleCreate, req);
    }
    createForm(req) {
    }
    async getMyArticle(req) {
        const articles = await this.articleService.findArticles(req);
        return { articles };
    }
    async editArticleGet(articleId, req) {
        const article = this.articleService.findMyArticle(articleId, req);
        return article;
    }
    async editArticle(articleId, articleDto) {
        this.articleService.editArticle(articleDto, articleId);
    }
    async getArticle(articleId) {
        const article = await this.articleService.findForRead(articleId);
        return { article: article };
    }
};
__decorate([
    (0, common_1.Post)(''),
    (0, common_1.Redirect)('articles/my', 301),
    __param(0, (0, common_1.Body)()),
    __param(1, (0, common_1.Req)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [create_article_dto_1.CreateArticleDto, Object]),
    __metadata("design:returntype", void 0)
], ArticlesController.prototype, "create", null);
__decorate([
    (0, common_1.Get)(''),
    (0, common_1.Render)('create-article'),
    __param(0, (0, common_1.Req)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", void 0)
], ArticlesController.prototype, "createForm", null);
__decorate([
    (0, common_1.Get)('/my'),
    (0, common_1.Render)('articles-home'),
    __param(0, (0, common_1.Req)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], ArticlesController.prototype, "getMyArticle", null);
__decorate([
    (0, common_1.Get)('edit/:id'),
    (0, common_1.Render)('edit-article'),
    __param(0, (0, common_1.Param)()),
    __param(1, (0, common_1.Req)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number, Object]),
    __metadata("design:returntype", Promise)
], ArticlesController.prototype, "editArticleGet", null);
__decorate([
    (0, common_1.Post)('edit/:id'),
    (0, common_1.Redirect)('/articles/my'),
    __param(0, (0, common_1.Param)()),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number, create_article_dto_1.CreateArticleDto]),
    __metadata("design:returntype", Promise)
], ArticlesController.prototype, "editArticle", null);
__decorate([
    (0, common_1.Get)('read/:id'),
    (0, common_1.Render)('article-read'),
    __param(0, (0, common_1.Param)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", Promise)
], ArticlesController.prototype, "getArticle", null);
ArticlesController = __decorate([
    (0, common_1.Controller)('articles'),
    __metadata("design:paramtypes", [articles_service_1.ArticlesService])
], ArticlesController);
exports.ArticlesController = ArticlesController;
//# sourceMappingURL=articles.controller.js.map