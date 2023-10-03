import React from 'react';

import { TypeComponentCard } from '../../../../utils/type';
import { FullHeart } from '../../../../assets/Svg/FullHeart';
import { useAppDispatch } from '../../../../utils/hooks';
import { EmptyHeart } from '../../../../assets/Svg/EmptyHeart';
import { setFav } from '../../../../utils/redux/slices/favoriteSlice';


export const ComponentCards: React.FC<TypeComponentCard> = ({ Cards, CardWidth }) => {

  const dispatch = useAppDispatch()
  // const favoriteCards = useAppSelector((state) => state.favorites.favCards)
  // console.log(favoriteCards,'favoriteCards')
  return (

    <>
      <div className='flex gap-[24px] overflow-scroll'>
        {Cards.map((data) => (
          <div
            key={data.id}
            className='h-[301px] no-scrollbar flex flex-col justify-between rounded-[20px] overflow-hidden'
            style={{
              backgroundImage: `url('${data.img}')`,
              backgroundSize: 'cover',
              minWidth: CardWidth

            }}
          >

            <div className='p-[20px] flex justify-end'>
              <button className='p-[10px] ButtonColor w-[37px]' onClick={() => { 
                console.log('--------------');
                dispatch(setFav(data.id)); }}>
                {data.fav ? <FullHeart /> : <EmptyHeart />}
              </button>
            </div>
            <div className='flex flex-col bg-white p-[20px] opacity-80 '>
              <div className='CardTitleFont'>{data.title}</div>
              <div className='CardDetailFont'>{data.year} | {data.type}</div>
            </div>
          </div>
        ))}
      </div>
    </>
  );
};
