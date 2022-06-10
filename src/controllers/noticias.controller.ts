import {
  Count,
  CountSchema,
  Filter,
  repository,
  Where,
} from '@loopback/repository';
import {get, getModelSchemaRef, param, response} from '@loopback/rest';
import {Noticias} from '../models';
import {NoticiasRepository} from '../repositories';

export class NoticiasController {
  constructor(
    @repository(NoticiasRepository)
    public noticiasRepository: NoticiasRepository,
  ) {}

  @get('/noticias/count')
  @response(200, {
    description: 'Noticias model count',
    content: {'application/json': {schema: CountSchema}},
  })
  async count(@param.where(Noticias) where?: Where<Noticias>): Promise<Count> {
    return this.noticiasRepository.count(where);
  }

  @get('/noticias')
  @response(200, {
    description: 'Array of Noticias model instances',
    content: {
      'application/json': {
        schema: {
          type: 'array',
          items: getModelSchemaRef(Noticias, {includeRelations: true}),
        },
      },
    },
  })
  async find(
    @param.filter(Noticias) filter?: Filter<Noticias>,
  ): Promise<Noticias[]> {
    return this.noticiasRepository.find(filter);
  }

  @get('/noticias/{url}')
  @response(200, {
    description: 'Array of Noticias model instances',
    content: {
      'application/json': {
        schema: {
          type: 'array',
          items: getModelSchemaRef(Noticias, {includeRelations: true}),
        },
      },
    },
  })
  async findOne(
    @param.filter(Noticias) filter?: Filter<Noticias>,
  ): Promise<Noticias[]> {
    return this.noticiasRepository.find(filter);
  }
}
