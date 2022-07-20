"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Migration20220715070544 = void 0;
const migrations_1 = require("@mikro-orm/migrations");
class Migration20220715070544 extends migrations_1.Migration {
    async up() {
        this.addSql('alter table "articles" add column "_id" serial;');
        this.addSql('alter table "articles" drop constraint "articles_pkey";');
        this.addSql('alter table "articles" drop column "id";');
        this.addSql('alter table "articles" add constraint "articles_pkey" primary key ("_id");');
    }
    async down() {
        this.addSql('alter table "articles" add column "id" serial;');
        this.addSql('alter table "articles" drop constraint "articles_pkey";');
        this.addSql('alter table "articles" drop column "_id";');
        this.addSql('alter table "articles" add constraint "articles_pkey" primary key ("id");');
    }
}
exports.Migration20220715070544 = Migration20220715070544;
//# sourceMappingURL=Migration20220715070544.js.map