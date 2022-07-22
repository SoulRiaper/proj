import { MikroORM, t } from '@mikro-orm/core';
import { InjectRepository } from '@mikro-orm/nestjs';
import { EntityManager, EntityRepository } from '@mikro-orm/postgresql';
import { Injectable, OnModuleInit } from '@nestjs/common';
import { Articles } from './articles/article.entity';
import { User } from './user/user.entity';

@Injectable()
export class BotService implements OnModuleInit {
    

    constructor(
        private readonly orm: MikroORM,
        @InjectRepository(Articles)
        private articlesRepository: EntityRepository<Articles>,
        @InjectRepository(User)
        private userRepozitory: EntityRepository<User>
        
    ){}
    
    onModuleInit() {
        this.botStart();
    }

    async botStart() {
        const em = this.orm.em.fork()
        const TelegramBot = require( 'node-telegram-bot-api' );

        const token = '5503796443:AAF23Y_9DJUBXWMo6EgndQwAZ3kk5nkcJuY';

        const bot = new TelegramBot(token, { polling: true });


        bot.onText(/\/start/, async (msg) => {

            const chatId = msg.chat.id
            const resp = chatId

            bot.sendMessage(chatId, 'Привет', {
                "reply_markup":{
                    "keyboard": [[], [ "/myArticles" ]],
                    "resize_keyboard": true,
                }
            });
        })


        bot.onText(/\/auth/, async (msg) => {

            const chatId = msg.chat.id
            const resp = chatId

            bot.sendMessage(chatId, resp)
        })
        await bot.onText(/\/myArticles/,  async (msg) =>  { 

            const chatId = msg.chat.id
            try{
                const article = await em.find<Articles>(Articles, { user: { telegramId: Number(chatId) } }, {disableIdentityMap: true,})
                let i = 1;
                for(let post of article){
                    bot.sendMessage(chatId, `${i}. ${(await post).title}
${(await post).content}`)
                    i++;
                }   
            }
            catch (e){
                bot.sendMessage(chatId, "у вас пока нет статей")
            }

        })

        bot.onText(/\/spam (.+)/, async (msg, match) => {

            const chatId = msg.chat.id
            const content = match[1];
            if(chatId === 1589195966){
                const tgUsers = await em.find(User, { telegramId: { $gt: 1, }})

                for(let user of tgUsers){
                    bot.sendMessage(user.telegramId , content )
                }

            } else {
                bot.sendMessage(chatId , 'You dont have permission to do it!' )
            }

        })


    }
}
