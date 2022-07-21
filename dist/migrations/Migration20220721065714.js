"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Migration20220721065714 = void 0;
const migrations_1 = require("@mikro-orm/migrations");
class Migration20220721065714 extends migrations_1.Migration {
    async up() {
        this.addSql('alter table "user" add column "telegram_id" int not null;');
        this.addSql('alter table "user" add constraint "user_telegram_id_unique" unique ("telegram_id");');
    }
    async down() {
        this.addSql('alter table "user" drop constraint "user_telegram_id_unique";');
        this.addSql('alter table "user" drop column "telegram_id";');
    }
}
exports.Migration20220721065714 = Migration20220721065714;
//# sourceMappingURL=Migration20220721065714.js.map