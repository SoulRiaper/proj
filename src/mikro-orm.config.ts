import { Logger } from '@nestjs/common';
import { Options } from '@mikro-orm/core';
import { TsMorphMetadataProvider } from '@mikro-orm/reflection';
import * as path from "path";
import { User } from './user/user.entity';
import { Articles } from './articles/article.entity';

const logger = new Logger('MikroORM');
const config: Options = {
  entities: [Articles],
  entitiesTs: [User, Articles],
  dbName: 'proj',
  type: 'postgresql',
  host: 'localhost',
  port: 5432,
  debug: true,
  user: 'postgres',
  password: 'root',
  metadataProvider: TsMorphMetadataProvider,
  migrations: {
    pathTs: path.join(__dirname,'/migrations'),
    path: path.join(__dirname,'/migrations'),
    glob: '!(*.d).{js,ts}',
  },
  logger: logger.log.bind(logger),
};

export default config;