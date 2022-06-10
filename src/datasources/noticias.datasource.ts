import {inject, lifeCycleObserver, LifeCycleObserver} from '@loopback/core';
import {juggler} from '@loopback/repository';

const config = {
  name: 'Noticias',
  connector: 'mysql',
  url: '',
  host: process.env.DB_HOST,
  port: 3306,
  user: process.env.DB_USER,
  password: process.env.DB_PASS,
  database: process.env.DB_NAME,
};

// Observe application's life cycle to disconnect the datasource when
// application is stopped. This allows the application to be shut down
// gracefully. The `stop()` method is inherited from `juggler.DataSource`.
// Learn more at https://loopback.io/doc/en/lb4/Life-cycle.html
@lifeCycleObserver('datasource')
export class NoticiasDataSource
  extends juggler.DataSource
  implements LifeCycleObserver
{
  static dataSourceName = 'Noticias';
  static readonly defaultConfig = config;

  constructor(
    @inject('datasources.config.Noticias', {optional: true})
    dsConfig: object = config,
  ) {
    super(dsConfig);
  }
}
