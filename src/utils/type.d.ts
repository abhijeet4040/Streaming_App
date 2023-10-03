// id: 1,
//       title: 'Tokyo Train',
//       year: '2023',
//       type: 'Action Comedy',
//       img: card1,
//       description:
//         'The movie follows the lives of a wealthy family, the Johnsons, who appear to have it all: a grand mansion.',
//       time: '2h 38m',
//       favorite: false,
// type Movie = {
//     id: number,
//     title: string,
//     year: number,
//     type: string,
// }

export type cardType={
  id:number
title:string,
year:string,
type:string,
img:string,
description:string,
time: string,
fav:boolean
}

export type cardsProps = {
    trendingCards: Array<cardType>,
    Cards: Array<cardType>;
    CardWidth: string;
  }

export type FavoritesState = {
  favoriteCards: cardType[]
}

export type TypeComponentCard = {
  Cards: Array<cardType>;
  CardWidth: string;
};