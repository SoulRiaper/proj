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
Object.defineProperty(exports, "__esModule", { value: true });
exports.User = void 0;
const core_1 = require("@mikro-orm/core");
const article_entity_1 = require("../articles/article.entity");
let User = class User {
};
__decorate([
    (0, core_1.PrimaryKey)({ autoincrement: true, unique: true, }),
    __metadata("design:type", Number)
], User.prototype, "id", void 0);
__decorate([
    (0, core_1.Property)({ unique: true }),
    __metadata("design:type", String)
], User.prototype, "email", void 0);
__decorate([
    (0, core_1.Property)(),
    __metadata("design:type", String)
], User.prototype, "pass", void 0);
__decorate([
    (0, core_1.Property)({ fieldName: 'uaer_name', unique: true }),
    __metadata("design:type", String)
], User.prototype, "uaerName", void 0);
__decorate([
    (0, core_1.OneToMany)(() => article_entity_1.Articles, article => article.user),
    __metadata("design:type", core_1.Collection)
], User.prototype, "articlesCollection", void 0);
__decorate([
    (0, core_1.Property)({ unique: true, nullable: true }),
    __metadata("design:type", Number)
], User.prototype, "telegramId", void 0);
User = __decorate([
    (0, core_1.Entity)({ tableName: 'user' })
], User);
exports.User = User;
//# sourceMappingURL=user.entity.js.map