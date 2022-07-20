import { MikroORM } from '@mikro-orm/core';
import { InjectRepository } from '@mikro-orm/nestjs';
import { EntityManager, EntityRepository } from '@mikro-orm/postgresql';
import { Injectable } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { Request, Response } from 'express';
import { CreateUserDto } from './dto/create-user.dto';
import { JwtPatternDto } from './dto/jwt-pattern.dto';
import { User } from './user.entity';


@Injectable()
export class UserService {
    constructor (
    private readonly jwtService: JwtService,
    private readonly orm: MikroORM,
    private readonly em: EntityManager,
    @InjectRepository(User)
    private userRepository: EntityRepository<User>,
    ){}


    async createUser(createUser: CreateUserDto){
        const user = await this.userRepository.create(createUser)
        await this.em.persistAndFlush(user)
        return user
    }

    async findAll(){
        return this.em.find( User, {} )
    }

    async findOne(email?: string, userName?: string ){
        const user = await this.em.findOne(User,{ $or: [ { uaerName: userName } ,{ email: email }]} )
        return user;
    }
    

    async findById(id: number){
        const user = await this.em.findOne(User,{ id: id } )
        return user;
    }

    async jwtToId(data){
        const token = data.split(' ')[1];
        const decoded = await this.jwtService.decode(token);
        return Object.values(decoded)[0]
    }

    async authorizedUserInfo(req: Request){
        const token = await req.cookies.Authorization;
        const id = await this.jwtToId(token)
        return this.em.findOne(User,  { id: id })
    }

    async exit(res: Response){
        res.clearCookie('Authorization')
    }
        
}
