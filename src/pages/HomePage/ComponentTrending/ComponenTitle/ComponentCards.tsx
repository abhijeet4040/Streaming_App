import React from 'react';
import { ComponentSmallHeart } from '../../../../components/Buttons/ComponentSmallHeart';

interface TrendingCardsProps {
  Cards: Array<{ title: string; year: string; type: string; img: string }>;
}

export const ComponentCards: React.FC<TrendingCardsProps> = ({ Cards}) => {
  
  return (
    
    <> 
      <div className='flex gap-[24px] overflow-scroll'>
        {Cards.map((data, index) => (
          <div
            key={index}
            
            className='min-w-[275px] h-[301px]  flex flex-col justify-between rounded-[20px] overflow-hidden'
            style={{
              backgroundImage: `url('${data.img}')`,
              backgroundSize: 'cover'
            }}
          >
            <div className='p-[20px] flex justify-end'><ComponentSmallHeart /></div>
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
