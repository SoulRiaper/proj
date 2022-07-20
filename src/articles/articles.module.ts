import { forwardRef, Module } from '@nestjs/common';
import { ArticlesService } from './articles.service';
import { ArticlesController } from './articles.controller';
import { Articles } from './article.entity';
import { MikroOrmModule } from '@mikro-orm/nestjs';
import { UserModule } from '../user/user.module';
import { User } from '../user/user.entity';
import { PassportModule } from '@nestjs/passport';
import { JwtService } from '@nestjs/jwt';

@Module({
  imports: [
    MikroOrmModule.forFeature([Articles, User]),
    forwardRef( () => UserModule ),
    PassportModule.register({
      session: true,
    })
],
  providers: [ArticlesService, JwtService],
  controllers: [ArticlesController],
  exports: [ ArticlesService ]
})
export class ArticlesModule {}
