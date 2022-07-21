import { Migration } from '@mikro-orm/migrations';

export class Migration20220721072006 extends Migration {

  async up(): Promise<void> {
    this.addSql('alter table "user" alter column "telegram_id" type int using ("telegram_id"::int);');
    this.addSql('alter table "user" alter column "telegram_id" drop not null;');
  }

  async down(): Promise<void> {
    this.addSql('alter table "user" alter column "telegram_id" type int using ("telegram_id"::int);');
    this.addSql('alter table "user" alter column "telegram_id" set not null;');
  }

}
