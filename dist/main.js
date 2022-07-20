"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const common_1 = require("@nestjs/common");
const core_1 = require("@nestjs/core");
const app_module_1 = require("./app.module");
const session = require("express-session");
const passport = require("passport");
const express = require("express");
const cookieParser = require("cookie-parser");
const path_1 = require("path");
async function bootstrap() {
    const app = await core_1.NestFactory.create(app_module_1.AppModule);
    app.use(session({
        name: 'NEST_JS_SESSION_ID',
        secret: 'mwipfnwipotr',
        resave: false,
        saveUninitialized: false,
        cookie: {
            maxAge: 600000,
        }
    }));
    app.use(cookieParser('infios'));
    app.use(passport.initialize());
    app.use(passport.session());
    app.use((req = express.request, res = express.response, next) => {
        res.append('Access-Control-Allow-Origin', ['*']);
        res.append('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE,PATCH');
        res.append('Access-Control-Allow-Headers', 'Content-Type');
        next();
    });
    app.useGlobalPipes(new common_1.ValidationPipe());
    app.useStaticAssets((0, path_1.join)(__dirname, '..', 'public'));
    app.setBaseViewsDir((0, path_1.join)(__dirname, '..', 'src/views'));
    app.setViewEngine('pug');
    await app.listen(3000);
    console.log('Server start on port : 3000');
}
bootstrap();
//# sourceMappingURL=main.js.map