import {PayloadAction, createSlice} from '@reduxjs/toolkit'
// import { TrendingCards } from '../../DummyData'
import { cardType, cardsProps } from '../../type';
import { TrendingCards } from '../../DummyData';

const getFevoriteData = (payload: number, cards: cardType[]) => {
    const id = payload;
    console.log('-------------', id, cards, '========');
    const newData = cards.map((card) => {
        card.id == id ? { ...card, fav: !card.fav } : card;
        return card;
    });
    console.log(newData, '-----------');
    return newData;
};
const initialState: cardsProps = {
    trendingCards: TrendingCards,
    CardWidth: '',
    Cards: [],
}

const favoritesSlice = createSlice({
    name: 'favorites',
    initialState,
    reducers: {
        setFav: (state, action: PayloadAction<number>) => {
            console.log(state.trendingCards);
            return {
                ...state,
                trendingCards: getFevoriteData(action.payload, state.trendingCards),
            }
            
        }
    }
})

export const { setFav } = favoritesSlice.actions;
export default favoritesSlice.reducer;