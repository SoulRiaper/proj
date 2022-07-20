import { MikroOrmModule } from '@mikro-orm/nestjs';
import { forwardRef, Module } from '@nestjs/common';
import { User } from './user.entity';
import { UserService } from './user.service';
import { UserController } from './user.controller';
import { AuthModule } from '../auth/auth.module';
import { JwtService } from '@nestjs/jwt';
import { ArticlesModule } from '../articles/articles.module';

@Module({
  imports: [
    MikroOrmModule.forFeature([User]),
    forwardRef( () => AuthModule ),
    forwardRef( () => ArticlesModule )

],
  providers: [UserService, JwtService],
  controllers: [UserController],
  exports: [UserService]
})
export class UserModule {}
