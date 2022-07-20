"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Migration20220711123136 = void 0;
const migrations_1 = require("@mikro-orm/migrations");
class Migration20220711123136 extends migrations_1.Migration {
    async up() {
        this.addSql('create table "user" ("id" serial primary key, "email" varchar(255) not null, "pass" varchar(255) not null, "uaer_name" varchar(255) not null);');
    }
    async down() {
        this.addSql('drop table if exists "user" cascade;');
    }
}
exports.Migration20220711123136 = Migration20220711123136;
//# sourceMappingURL=Migration20220711123136.js.map