"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Migration20220715071616 = void 0;
const migrations_1 = require("@mikro-orm/migrations");
class Migration20220715071616 extends migrations_1.Migration {
    async up() {
        this.addSql('alter table "articles" drop constraint "articles_author_id_foreign";');
        this.addSql('alter table "articles" rename column "author_id" to "user_id";');
        this.addSql('alter table "articles" add constraint "articles_user_id_foreign" foreign key ("user_id") references "user" ("id") on update cascade;');
    }
    async down() {
        this.addSql('alter table "articles" drop constraint "articles_user_id_foreign";');
        this.addSql('alter table "articles" rename column "user_id" to "author_id";');
        this.addSql('alter table "articles" add constraint "articles_author_id_foreign" foreign key ("author_id") references "user" ("id") on update cascade;');
    }
}
exports.Migration20220715071616 = Migration20220715071616;
//# sourceMappingURL=Migration20220715071616.js.map