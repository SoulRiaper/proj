"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Migration20220715065032 = void 0;
const migrations_1 = require("@mikro-orm/migrations");
class Migration20220715065032 extends migrations_1.Migration {
    async up() {
        this.addSql('create table "articles" ("id" serial primary key, "title" varchar(255) not null, "content" varchar(255) not null, "image" varchar(255) not null, "author_id" int not null);');
        this.addSql('alter table "articles" add constraint "articles_author_id_foreign" foreign key ("author_id") references "user" ("id") on update cascade;');
        this.addSql('alter table "user" alter column "id" type int using ("id"::int);');
        this.addSql('alter table "user" alter column "id" drop not null;');
        this.addSql('alter table "user" add constraint "user_email_unique" unique ("email");');
        this.addSql('alter table "user" add constraint "user_uaer_name_unique" unique ("uaer_name");');
    }
    async down() {
        this.addSql('drop table if exists "articles" cascade;');
        this.addSql('alter table "user" alter column "id" type int4 using ("id"::int4);');
        this.addSql('alter table "user" alter column "id" set not null;');
        this.addSql('alter table "user" drop constraint "user_email_unique";');
        this.addSql('alter table "user" drop constraint "user_uaer_name_unique";');
    }
}
exports.Migration20220715065032 = Migration20220715065032;
//# sourceMappingURL=Migration20220715065032.js.map