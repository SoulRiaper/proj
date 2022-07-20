import { Migration } from '@mikro-orm/migrations';

export class Migration20220715092639 extends Migration {

  async up(): Promise<void> {
    this.addSql('alter table "articles" alter column "title" type varchar(255) using ("title"::varchar(255));');
    this.addSql('alter table "articles" alter column "title" drop not null;');
    this.addSql('alter table "articles" alter column "content" type varchar(255) using ("content"::varchar(255));');
    this.addSql('alter table "articles" alter column "content" drop not null;');
  }

  async down(): Promise<void> {
    this.addSql('alter table "articles" alter column "title" type varchar(255) using ("title"::varchar(255));');
    this.addSql('alter table "articles" alter column "title" set not null;');
    this.addSql('alter table "articles" alter column "content" type varchar(255) using ("content"::varchar(255));');
    this.addSql('alter table "articles" alter column "content" set not null;');
  }

}
