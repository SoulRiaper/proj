import { MikroOrmModule } from '@mikro-orm/nestjs';
import { forwardRef, Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { AuthModule } from './auth/auth.module';
import config from './mikro-orm.config';
import { UserModule } from './user/user.module';
import { ArticlesModule } from './articles/articles.module';
import { PassportModule } from '@nestjs/passport';
import { BotService } from './bot.service';
import { Articles } from './articles/article.entity';

@Module({
  imports: [
    PassportModule.register({
      defaultStrategy: 'jwt',
      property: 'user',
      session: false,
  }),
    MikroOrmModule.forRoot(config),
    forwardRef( () => MikroOrmModule.forFeature([Articles]) ),
    AuthModule,
    UserModule,
    ArticlesModule,
    ],
  controllers: [AppController],
  providers: [AppService, BotService],
})
export class AppModule {}
