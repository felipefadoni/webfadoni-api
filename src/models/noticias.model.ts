/* eslint-disable @typescript-eslint/no-explicit-any */
import {Entity, model, property} from '@loopback/repository';

@model()
export class Noticias extends Entity {
  @property({
    type: 'number',
    id: true,
    generated: true,
  })
  id?: number;

  @property({
    type: 'string',
    required: true,
  })
  titulo: string;

  @property({
    type: 'string',
  })
  subtitulo?: string;

  @property({
    type: 'string',
    required: true,
  })
  url: string;

  @property({
    type: 'string',
  })
  imagem?: string;

  @property({
    type: 'string',
  })
  imagemDescricao?: string;

  @property({
    type: 'any',
    required: true,
  })
  texto: any;

  @property({
    type: 'string',
    required: true,
  })
  destaque: string;

  @property({
    type: 'string',
  })
  referencia?: string;

  @property({
    type: 'date',
  })
  createdAt?: string;

  @property({
    type: 'date',
  })
  updatedAt?: string;

  @property({
    type: 'date',
  })
  deletedAt?: string;

  constructor(data?: Partial<Noticias>) {
    super(data);
  }
}

export interface NoticiasRelations {
  // describe navigational properties here
}

export type NoticiasWithRelations = Noticias & NoticiasRelations;
