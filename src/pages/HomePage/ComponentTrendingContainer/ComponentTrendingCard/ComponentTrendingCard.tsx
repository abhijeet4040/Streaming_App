import React from 'react';

interface TrendingCardsProps {
  TrendingCards: Array<{ title: string; year: string; type: string; img: string }>;
}

export const ComponentTrendingCard: React.FC<TrendingCardsProps> = ({ TrendingCards }) => {
  return (
    <>
      <div className='flex'>
        {TrendingCards.map((data, index) => (
          <div
            key={index}
            className='trending-card'
            style={{
              backgroundImage: `url('${data.img}')`,
              backgroundSize: 'cover'
            }}
          >
            <div>{data.title}</div>
            <div>{data.year} | {data.type}</div>
          </div>
        ))}
      </div>
    </>
  );
};
