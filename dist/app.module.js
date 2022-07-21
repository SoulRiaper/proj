"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AppModule = void 0;
const nestjs_1 = require("@mikro-orm/nestjs");
const common_1 = require("@nestjs/common");
const app_controller_1 = require("./app.controller");
const app_service_1 = require("./app.service");
const auth_module_1 = require("./auth/auth.module");
const mikro_orm_config_1 = require("./mikro-orm.config");
const user_module_1 = require("./user/user.module");
const articles_module_1 = require("./articles/articles.module");
const passport_1 = require("@nestjs/passport");
const bot_service_1 = require("./bot.service");
const article_entity_1 = require("./articles/article.entity");
let AppModule = class AppModule {
};
AppModule = __decorate([
    (0, common_1.Module)({
        imports: [
            passport_1.PassportModule.register({
                defaultStrategy: 'jwt',
                property: 'user',
                session: false,
            }),
            nestjs_1.MikroOrmModule.forRoot(mikro_orm_config_1.default),
            (0, common_1.forwardRef)(() => nestjs_1.MikroOrmModule.forFeature([article_entity_1.Articles])),
            auth_module_1.AuthModule,
            user_module_1.UserModule,
            articles_module_1.ArticlesModule,
        ],
        controllers: [app_controller_1.AppController],
        providers: [app_service_1.AppService, bot_service_1.BotService],
    })
], AppModule);
exports.AppModule = AppModule;
//# sourceMappingURL=app.module.js.map