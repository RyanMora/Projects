export const RECEIVE_ALL_POKEMON = 'RECEIVE_ALL_POKEMON';

export const requestAllPokemon = () => (dispatch) => {
  return APIUtil.fetchAllPokemon().then(pokemon => dispatch(receiveAllPokemon(pokemon)));
}



export const receiveAllPokemon = pokemon => ({
  type: RECEIVE_ALL_POKEMON,
  pokemon
});
