import {Card} from './card'

export type Articles = {
  bigCard: Card,
  smallCard: Array<Card>

  //Estendendo o tipo opinionCard com a variavel autor
  opinionCards: Array<Card & {author: string}>
}
