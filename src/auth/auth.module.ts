import { forwardRef, Module } from '@nestjs/common';
import { AuthService } from './auth.service';
import { UserModule } from '../user/user.module';
import { PassportModule } from '@nestjs/passport';
import { JwtModule, JwtService } from '@nestjs/jwt';
import { AuthController } from './auth.controller';
import { SessionSerializer } from './ustils/session-serializer';


@Module({
  imports: [
    forwardRef(() => UserModule),
    
    JwtModule.register({
      secret: 'secretkey',
      signOptions: {expiresIn: '60s'},
    }),
    PassportModule
  ],
  providers: [AuthService, JwtService, SessionSerializer],
  controllers: [AuthController],
  exports: [
    AuthService,
    JwtModule
  ]
})
export class AuthModule {}
