"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const common_1 = require("@nestjs/common");
const reflection_1 = require("@mikro-orm/reflection");
const path = require("path");
const user_entity_1 = require("./user/user.entity");
const article_entity_1 = require("./articles/article.entity");
const logger = new common_1.Logger('MikroORM');
const config = {
    entities: [article_entity_1.Articles],
    entitiesTs: [user_entity_1.User, article_entity_1.Articles],
    dbName: 'proj',
    type: 'postgresql',
    host: 'localhost',
    port: 5432,
    debug: true,
    user: 'postgres',
    password: 'root',
    metadataProvider: reflection_1.TsMorphMetadataProvider,
    migrations: {
        pathTs: path.join(__dirname, '/migrations'),
        path: path.join(__dirname, '/migrations'),
        glob: '!(*.d).{js,ts}',
    },
    logger: logger.log.bind(logger),
};
exports.default = config;
//# sourceMappingURL=mikro-orm.config.js.map