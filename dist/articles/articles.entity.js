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
var _a;
Object.defineProperty(exports, "__esModule", { value: true });
exports.Articles = void 0;
const core_1 = require("@mikro-orm/core");
const user_entity_1 = require("user/user.entity");
let Articles = class Articles {
};
__decorate([
    (0, core_1.PrimaryKey)({ autoincrement: true, unique: true, }),
    __metadata("design:type", Number)
], Articles.prototype, "id", void 0);
__decorate([
    (0, core_1.Property)(),
    __metadata("design:type", String)
], Articles.prototype, "title", void 0);
__decorate([
    (0, core_1.Property)(),
    __metadata("design:type", String)
], Articles.prototype, "content", void 0);
__decorate([
    (0, core_1.Property)(),
    __metadata("design:type", String)
], Articles.prototype, "image", void 0);
__decorate([
    (0, core_1.ManyToOne)(() => user_entity_1.User),
    __metadata("design:type", typeof (_a = typeof user_entity_1.User !== "undefined" && user_entity_1.User) === "function" ? _a : Object)
], Articles.prototype, "author", void 0);
Articles = __decorate([
    (0, core_1.Entity)({ tableName: 'articles' })
], Articles);
exports.Articles = Articles;
//# sourceMappingURL=articles.entity.js.map