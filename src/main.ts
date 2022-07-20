import { ValidationPipe } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import * as session from 'express-session';
import * as passport from 'passport';
import * as express from 'express';
import * as cookieParser from 'cookie-parser'
import { NestExpressApplication } from '@nestjs/platform-express';
import { join } from 'path';

async function bootstrap() {
  const app = await NestFactory.create<NestExpressApplication>(AppModule);

  app.use(session({
    name: 'NEST_JS_SESSION_ID',
    secret: 'mwipfnwipotr',
    resave: false, 
    saveUninitialized: false,
    cookie:{
      maxAge: 600000,
      }
    })
  )


  app.use(cookieParser('infios'))


  app.use(passport.initialize());
  app.use(passport.session());

  app.use((
    req = express.request,
    res = express.response,
    next
     ) => {
    res.append('Access-Control-Allow-Origin', ['*']);
    res.append('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE,PATCH');
    res.append('Access-Control-Allow-Headers', 'Content-Type');
    next();
});


  app.useGlobalPipes(new ValidationPipe());

  app.useStaticAssets(join(__dirname, '..', 'public'));
  app.setBaseViewsDir(join(__dirname, '..', 'src/views'));
  app.setViewEngine('pug');

  await app.listen(3000);
  console.log('Server start on port : 3000')
}
bootstrap();
