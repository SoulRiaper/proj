import { MikroORM } from '@mikro-orm/core';
import { EntityManager, EntityRepository } from '@mikro-orm/postgresql';
import { JwtService } from '@nestjs/jwt';
import { Request, Response } from 'express';
import { CreateUserDto } from './dto/create-user.dto';
import { User } from './user.entity';
export declare class UserService {
    private readonly jwtService;
    private readonly orm;
    private readonly em;
    private userRepository;
    constructor(jwtService: JwtService, orm: MikroORM, em: EntityManager, userRepository: EntityRepository<User>);
    createUser(createUser: CreateUserDto): Promise<User>;
    findAll(): Promise<import("@mikro-orm/core").Loaded<User, never>[]>;
    findOne(email?: string, userName?: string): Promise<import("@mikro-orm/core").Loaded<User, never>>;
    findById(id: number): Promise<import("@mikro-orm/core").Loaded<User, never>>;
    jwtToId(data: any): Promise<any>;
    authorizedUserInfo(req: Request): Promise<import("@mikro-orm/core").Loaded<User, never>>;
    exit(res: Response): Promise<void>;
    addTelegramId(req: any, chatId: any): Promise<void>;
}
