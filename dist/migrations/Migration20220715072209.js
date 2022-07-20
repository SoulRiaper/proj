"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Migration20220715072209 = void 0;
const migrations_1 = require("@mikro-orm/migrations");
class Migration20220715072209 extends migrations_1.Migration {
    async up() {
        this.addSql('alter table "articles" add column "user_id" int not null;');
        this.addSql('alter table "articles" add constraint "articles_user_id_foreign" foreign key ("user_id") references "user" ("id") on update cascade;');
    }
    async down() {
        this.addSql('alter table "articles" drop constraint "articles_user_id_foreign";');
        this.addSql('alter table "articles" drop column "user_id";');
    }
}
exports.Migration20220715072209 = Migration20220715072209;
//# sourceMappingURL=Migration20220715072209.js.map