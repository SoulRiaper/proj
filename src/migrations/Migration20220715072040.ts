import { Migration } from '@mikro-orm/migrations';

export class Migration20220715072040 extends Migration {

  async up(): Promise<void> {
    this.addSql('create table "articles" ("_id" serial primary key, "title" varchar(255) not null, "content" varchar(255) not null, "image" varchar(255) not null);');

    this.addSql('create table "user" ("id" serial primary key, "email" varchar(255) not null, "pass" varchar(255) not null, "uaer_name" varchar(255) not null);');
    this.addSql('alter table "user" add constraint "user_email_unique" unique ("email");');
    this.addSql('alter table "user" add constraint "user_uaer_name_unique" unique ("uaer_name");');
  }

  async down(): Promise<void> {
    this.addSql('drop table if exists "articles" cascade;');

    this.addSql('drop table if exists "user" cascade;');
  }

}
