import { Card } from './card';

export type Articles = {
  //Estendendo o tipo opinionCard com a variavel autor
  articles: Array<Card> | Array<Card & { author: string }>;
};
