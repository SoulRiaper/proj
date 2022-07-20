import { MikroOrmModule } from '@mikro-orm/nestjs';
import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { AuthModule } from './auth/auth.module';
import config from './mikro-orm.config';
import { UserModule } from './user/user.module';
import { ArticlesModule } from './articles/articles.module';
import { PassportModule } from '@nestjs/passport';

@Module({
  imports: [
    // GraphQLModule.forRoot<ApolloDriverConfig>({
    //   include: [UserModule],
    //   driver: ApolloDriver,
    //   debug: true,
    //   playground: true,
    //   autoSchemaFile: true,
    // }),
    PassportModule.register({
      defaultStrategy: 'jwt',
      property: 'user',
      session: false,
  }),
    MikroOrmModule.forRoot(config),
    AuthModule,
    UserModule,
    ArticlesModule,
    ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
