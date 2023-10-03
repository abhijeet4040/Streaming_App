import {PayloadAction, createSlice} from '@reduxjs/toolkit'
// import { TrendingCards } from '../../DummyData'
import { cardsProps } from '../../type';
import { TrendingCards } from '../../DummyData';

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
            state.trendingCards.forEach(card=>{
                if(card.id ===  action.payload) card.fav=!card.fav;
            })
        }
    }
})

export const { setFav } = favoritesSlice.actions;
export default favoritesSlice.reducer; 