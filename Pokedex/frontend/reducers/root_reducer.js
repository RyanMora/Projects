import { combineReducers } from 'redux';

import PokemonReducer from './pokemon_reducer';

const RootReducer = combineReducers({
  pokemon: PokemonReducer
});

export default RootReducer
