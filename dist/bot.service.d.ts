import { MikroORM } from '@mikro-orm/core';
import { EntityRepository } from '@mikro-orm/postgresql';
import { OnModuleInit } from '@nestjs/common';
import { Articles } from './articles/article.entity';
import { User } from './user/user.entity';
export declare class BotService implements OnModuleInit {
    private readonly orm;
    private articlesRepository;
    private userRepozitory;
    constructor(orm: MikroORM, articlesRepository: EntityRepository<Articles>, userRepozitory: EntityRepository<User>);
    onModuleInit(): void;
    botStart(): Promise<void>;
}
