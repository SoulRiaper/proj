"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Migration20220721072006 = void 0;
const migrations_1 = require("@mikro-orm/migrations");
class Migration20220721072006 extends migrations_1.Migration {
    async up() {
        this.addSql('alter table "user" alter column "telegram_id" type int using ("telegram_id"::int);');
        this.addSql('alter table "user" alter column "telegram_id" drop not null;');
    }
    async down() {
        this.addSql('alter table "user" alter column "telegram_id" type int using ("telegram_id"::int);');
        this.addSql('alter table "user" alter column "telegram_id" set not null;');
    }
}
exports.Migration20220721072006 = Migration20220721072006;
//# sourceMappingURL=Migration20220721072006.js.map