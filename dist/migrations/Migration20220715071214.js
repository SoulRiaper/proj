"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Migration20220715071214 = void 0;
const migrations_1 = require("@mikro-orm/migrations");
class Migration20220715071214 extends migrations_1.Migration {
    async up() {
        this.addSql('alter table "user" alter column "id" type int using ("id"::int);');
        this.addSql('alter table "user" alter column "id" set not null;');
    }
    async down() {
        this.addSql('alter table "user" alter column "id" type int using ("id"::int);');
        this.addSql('alter table "user" alter column "id" drop not null;');
    }
}
exports.Migration20220715071214 = Migration20220715071214;
//# sourceMappingURL=Migration20220715071214.js.map