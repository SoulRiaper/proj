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
exports.UserService = void 0;
const core_1 = require("@mikro-orm/core");
const nestjs_1 = require("@mikro-orm/nestjs");
const postgresql_1 = require("@mikro-orm/postgresql");
const common_1 = require("@nestjs/common");
const jwt_1 = require("@nestjs/jwt");
const user_entity_1 = require("./user.entity");
let UserService = class UserService {
    constructor(jwtService, orm, em, userRepository) {
        this.jwtService = jwtService;
        this.orm = orm;
        this.em = em;
        this.userRepository = userRepository;
    }
    async createUser(createUser) {
        const user = await this.userRepository.create(createUser);
        await this.em.persistAndFlush(user);
        return user;
    }
    async findAll() {
        return this.em.find(user_entity_1.User, {});
    }
    async findOne(email, userName) {
        const user = await this.em.findOne(user_entity_1.User, { $or: [{ uaerName: userName }, { email: email }] });
        return user;
    }
    async findById(id) {
        const user = await this.em.findOne(user_entity_1.User, { id: id });
        return user;
    }
    async jwtToId(data) {
        const token = data.split(' ')[1];
        const decoded = await this.jwtService.decode(token);
        return Object.values(decoded)[0];
    }
    async authorizedUserInfo(req) {
        const token = await req.cookies.Authorization;
        const id = await this.jwtToId(token);
        return this.em.findOne(user_entity_1.User, { id: id });
    }
    async exit(res) {
        res.clearCookie('Authorization');
    }
};
UserService = __decorate([
    (0, common_1.Injectable)(),
    __param(3, (0, nestjs_1.InjectRepository)(user_entity_1.User)),
    __metadata("design:paramtypes", [jwt_1.JwtService,
        core_1.MikroORM,
        postgresql_1.EntityManager,
        postgresql_1.EntityRepository])
], UserService);
exports.UserService = UserService;
//# sourceMappingURL=user.service.js.map