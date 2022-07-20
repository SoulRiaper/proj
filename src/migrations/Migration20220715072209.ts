import { Migration } from '@mikro-orm/migrations';

export class Migration20220715072209 extends Migration {

  async up(): Promise<void> {
    this.addSql('alter table "articles" add column "user_id" int not null;');
    this.addSql('alter table "articles" add constraint "articles_user_id_foreign" foreign key ("user_id") references "user" ("id") on update cascade;');
  }

  async down(): Promise<void> {
    this.addSql('alter table "articles" drop constraint "articles_user_id_foreign";');

    this.addSql('alter table "articles" drop column "user_id";');
  }

}
