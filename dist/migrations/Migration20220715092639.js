"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Migration20220715092639 = void 0;
const migrations_1 = require("@mikro-orm/migrations");
class Migration20220715092639 extends migrations_1.Migration {
    async up() {
        this.addSql('alter table "articles" alter column "title" type varchar(255) using ("title"::varchar(255));');
        this.addSql('alter table "articles" alter column "title" drop not null;');
        this.addSql('alter table "articles" alter column "content" type varchar(255) using ("content"::varchar(255));');
        this.addSql('alter table "articles" alter column "content" drop not null;');
    }
    async down() {
        this.addSql('alter table "articles" alter column "title" type varchar(255) using ("title"::varchar(255));');
        this.addSql('alter table "articles" alter column "title" set not null;');
        this.addSql('alter table "articles" alter column "content" type varchar(255) using ("content"::varchar(255));');
        this.addSql('alter table "articles" alter column "content" set not null;');
    }
}
exports.Migration20220715092639 = Migration20220715092639;
//# sourceMappingURL=Migration20220715092639.js.map