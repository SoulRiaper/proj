import { Migration } from '@mikro-orm/migrations';

export class Migration20220715110038 extends Migration {

  async up(): Promise<void> {
    this.addSql('alter table "articles" alter column "image" type varchar(255) using ("image"::varchar(255));');
    this.addSql('alter table "articles" alter column "image" drop not null;');
  }

  async down(): Promise<void> {
    this.addSql('alter table "articles" alter column "image" type varchar(255) using ("image"::varchar(255));');
    this.addSql('alter table "articles" alter column "image" set not null;');
  }

}
