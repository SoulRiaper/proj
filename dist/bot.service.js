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
exports.BotService = void 0;
const core_1 = require("@mikro-orm/core");
const nestjs_1 = require("@mikro-orm/nestjs");
const postgresql_1 = require("@mikro-orm/postgresql");
const common_1 = require("@nestjs/common");
const article_entity_1 = require("./articles/article.entity");
let BotService = class BotService {
    constructor(orm, userRepository) {
        this.orm = orm;
        this.userRepository = userRepository;
    }
    onModuleInit() {
        this.botStart();
    }
    async botStart() {
        const em = this.orm.em.fork();
        const TelegramBot = require('node-telegram-bot-api');
        const token = '5503796443:AAF23Y_9DJUBXWMo6EgndQwAZ3kk5nkcJuY';
        const bot = new TelegramBot(token, { polling: true });
        bot.onText(/\/start/, async (msg) => {
            const chatId = msg.chat.id;
            const resp = chatId;
            bot.sendMessage(chatId, 'Привет', {
                "reply_markup": {
                    "keyboard": [[], ["/myArticles"]],
                    "resize_keyboard": true,
                }
            });
        });
        bot.onText(/\/auth/, async (msg) => {
            const chatId = msg.chat.id;
            const resp = chatId;
            bot.sendMessage(chatId, resp);
        });
        await bot.onText(/\/myArticles/, async (msg) => {
            const chatId = msg.chat.id;
            try {
                const article = await em.find(article_entity_1.Articles, { user: { telegramId: Number(chatId) } }, { disableIdentityMap: true, });
                let i = 1;
                for (let post of article) {
                    bot.sendMessage(chatId, `${i}. ${(await post).title}
${(await post).content}`);
                    i++;
                }
            }
            catch (e) {
                bot.sendMessage(chatId, "у вас пока нет статей");
            }
        });
    }
};
BotService = __decorate([
    (0, common_1.Injectable)(),
    __param(1, (0, nestjs_1.InjectRepository)(article_entity_1.Articles)),
    __metadata("design:paramtypes", [core_1.MikroORM,
        postgresql_1.EntityRepository])
], BotService);
exports.BotService = BotService;
//# sourceMappingURL=bot.service.js.map