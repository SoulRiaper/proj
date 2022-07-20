"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Migration20220715110038 = void 0;
const migrations_1 = require("@mikro-orm/migrations");
class Migration20220715110038 extends migrations_1.Migration {
    async up() {
        this.addSql('alter table "articles" alter column "image" type varchar(255) using ("image"::varchar(255));');
        this.addSql('alter table "articles" alter column "image" drop not null;');
    }
    async down() {
        this.addSql('alter table "articles" alter column "image" type varchar(255) using ("image"::varchar(255));');
        this.addSql('alter table "articles" alter column "image" set not null;');
    }
}
exports.Migration20220715110038 = Migration20220715110038;
//# sourceMappingURL=Migration20220715110038.js.map