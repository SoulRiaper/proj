"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Migration20220715071947 = void 0;
const migrations_1 = require("@mikro-orm/migrations");
class Migration20220715071947 extends migrations_1.Migration {
    async up() {
        this.addSql('alter table "articles" drop constraint "articles_user_id_foreign";');
        this.addSql('alter table "articles" drop column "user_id";');
    }
    async down() {
        this.addSql('alter table "articles" add column "user_id" int not null;');
        this.addSql('alter table "articles" add constraint "articles_user_id_foreign" foreign key ("user_id") references "user" ("id") on update cascade;');
    }
}
exports.Migration20220715071947 = Migration20220715071947;
//# sourceMappingURL=Migration20220715071947.js.map