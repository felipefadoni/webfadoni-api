import {inject} from '@loopback/core';
import {DefaultCrudRepository} from '@loopback/repository';
import {NoticiasDataSource} from '../datasources';
import {Noticias, NoticiasRelations} from '../models';

export class NoticiasRepository extends DefaultCrudRepository<
  Noticias,
  typeof Noticias.prototype.id,
  NoticiasRelations
> {
  constructor(@inject('datasources.Noticias') dataSource: NoticiasDataSource) {
    super(Noticias, dataSource);
  }
}
