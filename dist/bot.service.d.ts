import { MikroORM } from '@mikro-orm/core';
import { EntityRepository } from '@mikro-orm/postgresql';
import { OnModuleInit } from '@nestjs/common';
import { Articles } from './articles/article.entity';
export declare class BotService implements OnModuleInit {
    private readonly orm;
    private userRepository;
    constructor(orm: MikroORM, userRepository: EntityRepository<Articles>);
    onModuleInit(): void;
    botStart(): Promise<void>;
}
